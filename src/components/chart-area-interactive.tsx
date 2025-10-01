"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, Line, LineChart, XAxis } from "recharts"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  Card,
  CardAction,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

export const description = "An interactive area chart"

const chartData = [
  { date: "2024-04-01", desktop: 55 },
  { date: "2024-04-02", desktop: 66 },
  { date: "2024-04-03", desktop: 78 },
  { date: "2024-04-04", desktop: 81 },
  { date: "2024-04-05", desktop: 79 },
  { date: "2024-04-06", desktop: 80 },
  { date: "2024-04-07", desktop: 7 },
  { date: "2024-04-08", desktop: 77 },
  { date: "2024-04-09", desktop: 66 },
  { date: "2024-04-10", desktop: 79 },
  { date: "2024-04-11", desktop: 80 },
  { date: "2024-04-12", desktop: 99 },
  { date: "2024-04-13", desktop: 10 },
  { date: "2024-04-14", desktop: 81 },
  { date: "2024-04-15", desktop: 78 },
  { date: "2024-04-16", desktop: 80 },
  { date: "2024-04-17", desktop: 83 },
  { date: "2024-04-18", desktop: 22 },
  { date: "2024-04-19", desktop: 81 },
  { date: "2024-04-20", desktop: 79 },
  { date: "2024-04-21", desktop: 80 },
  { date: "2024-04-22", desktop: 82 },
  { date: "2024-04-23", desktop: 11 },
  { date: "2024-04-24", desktop: 77 },
  { date: "2024-04-25", desktop: 78 },
  { date: "2024-04-26", desktop: 44 },
  { date: "2024-04-27", desktop: 83 },
  { date: "2024-04-28", desktop: 0 },
  { date: "2024-04-29", desktop: 81 },
  { date: "2024-04-30", desktop: 79 },
  { date: "2024-05-01", desktop: 80 },
  { date: "2024-05-02", desktop: 82 },
  { date: "2024-05-03", desktop: 28 },
  { date: "2024-05-04", desktop: 81 },
  { date: "2024-05-05", desktop: 78 },
  { date: "2024-05-06", desktop: 80 },
  { date: "2024-05-07", desktop: 83 },
  { date: "2024-05-08", desktop: 1 },
  { date: "2024-05-09", desktop: 81 },
  { date: "2024-05-10", desktop: 79 },
  { date: "2024-05-11", desktop: 80 },
  { date: "2024-05-12", desktop: 82 },
  { date: "2024-05-13", desktop: 2 },
  { date: "2024-05-14", desktop: 81 },
  { date: "2024-05-15", desktop: 78 },
  { date: "2024-05-16", desktop: 80 },
  { date: "2024-05-17", desktop: 83 },
  { date: "2024-05-18", desktop: 51 },
  { date: "2024-05-19", desktop: 81 },
  { date: "2024-05-20", desktop: 79 },
  { date: "2024-05-21", desktop: 80 },
  { date: "2024-05-22", desktop: 82 },
  { date: "2024-05-23", desktop: 11 },
  { date: "2024-05-24", desktop: 81 },
  { date: "2024-05-25", desktop: 78 },
  { date: "2024-05-26", desktop: 80 },
  { date: "2024-05-27", desktop: 83 },
  { date: "2024-05-28", desktop: 22 },
  { date: "2024-05-29", desktop: 81 },
  { date: "2024-05-30", desktop: 79 },
  { date: "2024-05-31", desktop: 80 },
  { date: "2024-06-01", desktop: 82 },
  { date: "2024-06-02", desktop: 0 },
  { date: "2024-06-03", desktop: 81 },
  { date: "2024-06-04", desktop: 78 },
  { date: "2024-06-05", desktop: 80 },
  { date: "2024-06-06", desktop: 83 },
  { date: "2024-06-07", desktop: 11 },
  { date: "2024-06-08", desktop: 81 },
  { date: "2024-06-09", desktop: 79 },
  { date: "2024-06-10", desktop: 80 },
  { date: "2024-06-11", desktop: 82 },
  { date: "2024-06-12", desktop: 22 },
  { date: "2024-06-13", desktop: 81 },
  { date: "2024-06-14", desktop: 78 },
  { date: "2024-06-15", desktop: 80 },
  { date: "2024-06-16", desktop: 83 },
  { date: "2024-06-17", desktop: 11 },
  { date: "2024-06-18", desktop: 81 },
  { date: "2024-06-19", desktop: 79 },
  { date: "2024-06-20", desktop: 80 },
  { date: "2024-06-21", desktop: 82 },
  { date: "2024-06-22", desktop: 22 },
  { date: "2024-06-23", desktop: 81 },
  { date: "2024-06-24", desktop: 78 },
  { date: "2024-06-25", desktop: 80 },
  { date: "2024-06-26", desktop: 83 },
  { date: "2024-06-27", desktop: 22 },
  { date: "2024-06-28", desktop: 81 },
  { date: "2024-06-29", desktop: 79 },
  { date: "2024-06-30", desktop: 80 },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  desktop: {
    label: "患者数",
    color: "var(--primary)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--primary)",
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const isMobile = useIsMobile()
  const [timeRange, setTimeRange] = React.useState("90d")

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d")
    }
  }, [isMobile])

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 10
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>来院者数</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            来院者数の推移
          </span>
          <span className="@[540px]/card:hidden">Last 3 months</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
          >
            <ToggleGroupItem value="90d">Last 3 months</ToggleGroupItem>
            <ToggleGroupItem value="30d">Last 30 days</ToggleGroupItem>
            <ToggleGroupItem value="7d">Last 7 days</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart data={filteredData}>
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
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />

            {/* 影なしの折れ線 */}
          <Line
            dataKey="mobile"
            type="linear"              // ← 直線的な折れ線
            stroke="var(--color-mobile)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            dataKey="desktop"
            type="linear"
            stroke="var(--color-desktop)"
            strokeWidth={2}
            dot={false}
          />
          </LineChart>

        </ChartContainer>
      </CardContent>
    </Card>
  )
}
