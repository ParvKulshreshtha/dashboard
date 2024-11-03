
import {  Line, LineChart, XAxis, YAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
} from "@/components/ui/chart"
import { FC } from "react"

interface ComponentInterface {
    darkTheme:boolean;
}

const chartData = [
  { month: "January", current: 15, previous: 10 },
  { month: "February", current: 10, previous: 19 },
  { month: "March", current: 11, previous: 16 },
  { month: "April", current: 16, previous: 12 },
  { month: "May", current: 20, previous:  13},
  { month: "June", current: 22, previous: 24 },
]

const chartConfig = {
  current: {
    label: "Current",
    color: "hsl(var(--chart-1))",
  },
  previous: {
    label: "Previous",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export const RevenueChart:FC<ComponentInterface> = ({darkTheme})=> {
  return (
    <ChartContainer config={chartConfig} className=" h-[232px]">
        <LineChart
        // accessibilityLayer
        data={chartData}
        >
        <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}

            tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis tickLine={false} axisLine={false}/>
        <Line
            dataKey="current"
            type="monotone"
            stroke={"#A8C5DA"}
            strokeWidth={2}
            dot={false}
        />
        <Line
            dataKey="previous"
            type="monotone"
            stroke={darkTheme?"#C6C7F8":"#1C1C1C"}
            strokeWidth={2}
            dot={false}
        />
        </LineChart>
    </ChartContainer>
  )
}
