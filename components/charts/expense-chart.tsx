"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { clientExpenseSeries } from "@/lib/mock-data";

export function ExpenseChart({ height = 260 }: { height?: number }) {
  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer>
        <BarChart
          data={clientExpenseSeries}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <CartesianGrid
            stroke="#E5E7EB"
            vertical={false}
            strokeDasharray="4 4"
          />
          <XAxis
            dataKey="month"
            stroke="#6B7280"
            tickLine={false}
            axisLine={false}
            fontSize={12}
          />
          <YAxis
            stroke="#6B7280"
            tickLine={false}
            axisLine={false}
            fontSize={12}
            tickFormatter={(v) => `৳${v / 1000}k`}
          />
          <Tooltip
            cursor={{ fill: "rgba(124,58,237,0.08)" }}
            contentStyle={{
              borderRadius: 12,
              border: "1px solid #E5E7EB",
              fontSize: 12,
            }}
            formatter={(v) => [`৳${Number(v).toLocaleString()}`, "Spent"]}
          />
          <Bar dataKey="spent" radius={[8, 8, 2, 2]}>
            {clientExpenseSeries.map((_, i) => (
              <Cell
                key={i}
                fill={i === clientExpenseSeries.length - 1 ? "#7C3AED" : "#1B1464"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
