"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { revenueSeries } from "@/lib/mock-data";

export function RevenueChart({ height = 300 }: { height?: number }) {
  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer>
        <AreaChart
          data={revenueSeries}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7C3AED" stopOpacity={0.45} />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#E5E7EB" vertical={false} strokeDasharray="4 4" />
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
            tickFormatter={(v) => `৳${Math.round(v / 1000)}k`}
          />
          <Tooltip
            contentStyle={{
              borderRadius: 12,
              border: "1px solid #E5E7EB",
              boxShadow: "0 8px 24px rgba(15,11,61,0.08)",
              fontSize: 12,
            }}
            formatter={(v) => [`৳${Number(v).toLocaleString()}`, "Revenue"]}
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#7C3AED"
            strokeWidth={2.5}
            fill="url(#rev)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
