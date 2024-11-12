import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { timeStamp } from "console";
import { Percent } from "lucide-react";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
  
  const data = [
    {
      timestamp: new Date("2024-11-10T23:58:40").toISOString().replace("T", " ").split(".")[0],
      percent: 70,
    },
    {
      timestamp: new Date("2024-11-10T23:58:45").toISOString().replace("T", " ").split(".")[0],
      percent: 77,
    },
    {
      timestamp: new Date("2024-11-10T23:58:50").toISOString().replace("T", " ").split(".")[0],
      percent: 98,
    },
    {
      timestamp: new Date("2024-11-10T23:58:55").toISOString().replace("T", " ").split(".")[0],
      percent: 60,
    },
    {
      timestamp: new Date("2024-11-10T23:59:00").toISOString().replace("T", " ").split(".")[0],
      percent: 48,
    },
    {
      timestamp: new Date("2024-11-10T23:59:05").toISOString().replace("T", " ").split(".")[0],
      percent: 38,
    },
    {
      timestamp: new Date("2024-11-10T23:59:10").toISOString().replace("T", " ").split(".")[0],
      percent: 43,
    }
  ];
  
  

const chartConfig = {
  timestamp: {
    label: "Timestamp",
    color: "hsl(12 76% 61%)", 
  },
  percent: {
    label: "Percent",
    color: "hsl(12 76% 61%)", 
  },
} satisfies ChartConfig

export function VerticalChart() {
  return (
    <ChartContainer
      config={chartConfig}
      className="min-h-[200px] max-w-[30%] mb-12"
    >
      <LineChart
        layout="vertical"
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" domain={[0, 100]} />
        <YAxis dataKey="timestamp" type="category" />
        <Tooltip />
        <Legend />
        <ChartTooltip
  content={
    <ChartTooltipContent
      className="w-[150px]"
      nameKey="percent"
      labelFormatter={(_, index) => {
        const timestamp = data[Number(index)].timestamp;
        return new Date(timestamp).toLocaleTimeString("en-US", {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true, // Jika ingin format 12 jam (AM/PM)
        });
      }}
    />
  }
/>

        <Line
          dataKey="percent"
          fill="var(--color-percent)"
          stroke="var(--color-percent)"
        />
      </LineChart>
    </ChartContainer>
  );
}
