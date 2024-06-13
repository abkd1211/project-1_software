/** @format */
"use client";
import React from "react";
import {
  BarChart as BarGraph,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Bar
} from "recharts";
import { useTheme } from "next-themes";

const data = [
  { name: "Jan", total: Math.floor(Math.random() * 20) + 1 },
  { name: "Feb", total: Math.floor(Math.random() * 20) + 1 },
  { name: "Mar", total: Math.floor(Math.random() * 20) + 1 },
  { name: "Apr", total: Math.floor(Math.random() * 20) + 1 },
  { name: "May", total: Math.floor(Math.random() * 20) + 1 },
  { name: "Jun", total: Math.floor(Math.random() * 20) + 1 },
  { name: "Jul", total: Math.floor(Math.random() * 20) + 1 },
  { name: "Aug", total: Math.floor(Math.random() * 20) + 1 },
  { name: "Sep", total: Math.floor(Math.random() * 20) + 1 },
  { name: "Oct", total: Math.floor(Math.random() * 20) + 1 },
  { name: "Nov", total: Math.floor(Math.random() * 20) + 1 },
  { name: "Dec", total: Math.floor(Math.random() * 20) + 1 }
];

export default function BarChart() {
  const { theme } = useTheme(); // Get the current theme

  const axisColor = theme === 'dark' ? '#bbbbbb' : '#888888';
  const barColor = theme === 'dark' ? '#8884d8' : '#82ca9d';

  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <BarGraph data={data}>
        <XAxis
          dataKey={"name"}
          tickLine={false}
          axisLine={false}
          stroke={axisColor}
          fontSize={12}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          stroke={axisColor}
          fontSize={12}
          tickFormatter={(value) => `${value} points`}
        />
        <Bar dataKey={"total"} fill={barColor} radius={[4, 4, 0, 0]} />
      </BarGraph>
    </ResponsiveContainer>
  );
}
