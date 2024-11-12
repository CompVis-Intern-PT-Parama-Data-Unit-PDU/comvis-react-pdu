import * as React from "react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

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
const chartData = [
  { date: "2024-04-01T00:00:01", desktop: 222, mobile: 150 },
  { date: "2024-04-01T00:00:02", desktop: 97, mobile: 180 },
  { date: "2024-04-01T00:00:03", desktop: 167, mobile: 120 },
  { date: "2024-04-01T00:00:04", desktop: 242, mobile: 260 },
  { date: "2024-04-01T00:00:05", desktop: 373, mobile: 290 },
  { date: "2024-04-01T00:00:06", desktop: 301, mobile: 340 },
  { date: "2024-04-01T00:00:07", desktop: 245, mobile: 180 },
  { date: "2024-04-01T00:00:08", desktop: 409, mobile: 320 },
  { date: "2024-04-01T00:00:09", desktop: 59, mobile: 110 },
  { date: "2024-04-01T00:00:10", desktop: 261, mobile: 190 },
  { date: "2024-04-01T00:00:11", desktop: 327, mobile: 350 },
  { date: "2024-04-01T00:00:12", desktop: 292, mobile: 210 },
  { date: "2024-04-01T00:00:13", desktop: 342, mobile: 380 },
  { date: "2024-04-01T00:00:14", desktop: 137, mobile: 220 },
  { date: "2024-04-01T00:00:15", desktop: 120, mobile: 170 },
  { date: "2024-04-01T00:00:16", desktop: 138, mobile: 190 },
  { date: "2024-04-01T00:00:17", desktop: 446, mobile: 360 },
  { date: "2024-04-01T00:00:18", desktop: 364, mobile: 410 },
  { date: "2024-04-01T00:00:19", desktop: 243, mobile: 180 },
  { date: "2024-04-01T00:00:20", desktop: 89, mobile: 150 },
  { date: "2024-04-01T00:00:21", desktop: 137, mobile: 200 },
  { date: "2024-04-01T00:00:22", desktop: 224, mobile: 170 },
  { date: "2024-04-01T00:00:23", desktop: 138, mobile: 230 },
  { date: "2024-04-01T00:00:24", desktop: 387, mobile: 290 },
  { date: "2024-04-01T00:00:25", desktop: 215, mobile: 250 },
  { date: "2024-04-01T00:00:26", desktop: 75, mobile: 130 },
  { date: "2024-04-01T00:00:27", desktop: 383, mobile: 420 },
  { date: "2024-04-01T00:00:28", desktop: 122, mobile: 180 },
  { date: "2024-04-01T00:00:29", desktop: 315, mobile: 240 },
  { date: "2024-04-01T00:00:30", desktop: 454, mobile: 380 },
  { date: "2024-04-01T00:00:31", desktop: 165, mobile: 220 },
  { date: "2024-04-01T00:00:32", desktop: 293, mobile: 310 },
  { date: "2024-04-01T00:00:33", desktop: 247, mobile: 190 },
  { date: "2024-04-01T00:00:34", desktop: 385, mobile: 420 },
  { date: "2024-04-01T00:00:35", desktop: 481, mobile: 390 },
  { date: "2024-04-01T00:00:36", desktop: 498, mobile: 520 },
  { date: "2024-04-01T00:00:37", desktop: 388, mobile: 300 },
  { date: "2024-04-01T00:00:38", desktop: 149, mobile: 210 },
  { date: "2024-04-01T00:00:39", desktop: 227, mobile: 180 },
  { date: "2024-04-01T00:00:40", desktop: 293, mobile: 330 },
  { date: "2024-04-01T00:00:41", desktop: 335, mobile: 270 },
  { date: "2024-04-01T00:00:42", desktop: 197, mobile: 240 },
  { date: "2024-04-01T00:00:43", desktop: 197, mobile: 160 },
  { date: "2024-04-01T00:00:44", desktop: 448, mobile: 490 },
  { date: "2024-04-01T00:00:45", desktop: 473, mobile: 380 },
  { date: "2024-04-01T00:00:46", desktop: 338, mobile: 400 },
  { date: "2024-04-01T00:00:47", desktop: 499, mobile: 420 },
  { date: "2024-04-01T00:00:48", desktop: 315, mobile: 350 },
  { date: "2024-04-01T00:00:49", desktop: 235, mobile: 180 },
  { date: "2024-04-01T00:00:50", desktop: 177, mobile: 230 },
  { date: "2024-04-01T00:00:51", desktop: 82, mobile: 140 },
  { date: "2024-04-01T00:00:52", desktop: 81, mobile: 120 },
  { date: "2024-04-01T00:00:53", desktop: 252, mobile: 290 },
  { date: "2024-04-01T00:00:54", desktop: 294, mobile: 220 },
  { date: "2024-04-01T00:00:55", desktop: 201, mobile: 250 },
  { date: "2024-04-01T00:00:56", desktop: 213, mobile: 170 },
  { date: "2024-04-01T00:00:57", desktop: 420, mobile: 460 },
  { date: "2024-04-01T00:00:58", desktop: 233, mobile: 190 },
  { date: "2024-04-01T00:00:59", desktop: 78, mobile: 130 },
  { date: "2024-04-01T00:01:00", desktop: 340, mobile: 280 },
]

const chartConfig = {
  views: {
    label: "Page Views",
  },
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function Component() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("desktop")

  const total = React.useMemo(
    () => ({
      desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
      mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
    }),
    []
  )

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Line Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </div>
        <div className="flex">
          {["desktop", "mobile"].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="desktop"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",

                    })
                  }}
                />
              }
            />
            <Line
              dataKey={activeChart}
              type="monotone"
              stroke={`var(--color-${activeChart})`}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
