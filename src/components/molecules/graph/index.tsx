"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

interface PercentileLineChartProps {
  data: { percentile: number; numberOfStudents: number }[];
  yourPercentile: number;
}

const PercentileLineChart: React.FC<PercentileLineChartProps> = ({
  data,
  yourPercentile,
}) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis
          dataKey="percentile"
          domain={[0, 100]}
          //   ticks={[0, 25, 50, 75, 100]}
          label={{ value: "Percentile", position: "insideBottom", offset: -5 }}
        />
        <Tooltip formatter={(value) => [`${value} students`, "Count"]} />

        <Line
          type="monotone"
          dataKey="numberOfStudents"
          stroke="#8884d8"
          dot={{ r: 5 }}
          activeDot={{ r: 8 }}
        />

        {/* Your Percentile Marker */}
        <ReferenceLine
          x={yourPercentile}
          stroke="red"
          strokeDasharray="1 3"
          direction={"left"}
        />
        {/* <text
          x={yourPercentile}
          y={30}
          textAnchor="middle"
          fill="gray"
          fontSize="12px"
        >
          Your Percentile
        </text> */}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PercentileLineChart;
