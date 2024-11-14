import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";

const data = [
  {
    timestamp: new Date("2024-11-10T23:58:40")
      .toISOString()
      .replace("T", " ")
      .split(".")[0],
    percent: 70,
  },
  {
    timestamp: new Date("2024-11-10T23:58:45")
      .toISOString()
      .replace("T", " ")
      .split(".")[0],
    percent: 77,
  },
  {
    timestamp: new Date("2024-11-10T23:58:50")
      .toISOString()
      .replace("T", " ")
      .split(".")[0],
    percent: 98,
  },
  {
    timestamp: new Date("2024-11-10T23:58:55")
      .toISOString()
      .replace("T", " ")
      .split(".")[0],
    percent: 60,
  },
  {
    timestamp: new Date("2024-11-10T23:59:00")
      .toISOString()
      .replace("T", " ")
      .split(".")[0],
    percent: 48,
  },
  {
    timestamp: new Date("2024-11-10T23:59:05")
      .toISOString()
      .replace("T", " ")
      .split(".")[0],
    percent: 38,
  },
  {
    timestamp: new Date("2024-11-10T23:59:10")
      .toISOString()
      .replace("T", " ")
      .split(".")[0],
    percent: 43,
  },
];

const chartConfig = {
  timestamp: {
    label: "Timestamp",
    color: "hsl(var(--chart-1))",
  },
  percent: {
    label: "Percent",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;


export function VerticalChart() {

  return (
    <ChartContainer
      config={chartConfig}
      className="min-h-[300px] flex w-20 xl:w-1/4 h-full xl:max-w-1/4 max-w-fit grow xl:grow-0 mr-auto"
    >
      <LineChart 

        accessibilityLayer data={data} 
        layout="vertical"
      >
        <CartesianGrid vertical={true} />
        <XAxis
          dataKey="percent"
          type="number"
          domain={[0, 100]}
          tickLine={true}
          tickMargin={10}
          axisLine={true}
          tickFormatter={(value) => `${value}%`}
        />
        <YAxis
          dataKey="timestamp"
          type="category"
          tickLine={true}
          tickMargin={10}
          axisLine={true}
        />
        <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Line
          dataKey="percent"
          fill="var(--color-percent)"
          stroke="var(--color-percent)"
          radius={3}
        />
      </LineChart>
    </ChartContainer>
  );
}
