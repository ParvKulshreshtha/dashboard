import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
} from "@/components/ui/chart";

export const description = "A stacked bar chart with a legend";

const chartData = [
  { name: 'Jan', actual: 15, projected: 25 },
  { name: 'Feb', actual: 20, projected: 28 },
  { name: 'Mar', actual: 18, projected: 24 },
  { name: 'Apr', actual: 22, projected: 30 },
  { name: 'May', actual: 14, projected: 20 },
  { name: 'Jun', actual: 20, projected: 25 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function Component() {
  return (
    <div>
      <ChartContainer config={chartConfig} className="h-[160px] w-full">
        <BarChart accessibilityLayer data={chartData?.map(data => ({ ...data, projected: data.projected - data.actual }))}>
          <XAxis dataKey="name" tickMargin={10} />
          <YAxis tickLine={false} />
          <Bar
            dataKey="actual"
            stackId="a"
            fill={"#A8C5DA"}
            radius={[0, 0, 0, 0]}
            barSize={30}
          />
          <Bar
            dataKey="projected"
            stackId="a"
            fill={"#A8C5DA66"}
            radius={[4, 4, 0, 0]}
            barSize={30}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
