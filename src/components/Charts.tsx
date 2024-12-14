import { ChartsProps } from "@/interfaces/interfaces";
import { Card } from "./ui/card";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

function Charts({ data }: ChartsProps) {
  return (
    <Card className="pt-3">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value}`}
          />
          <Bar dataKey="total" fill="#0359a1" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
export default Charts;
