import React from 'react'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

function LineChartContainer(ChartData) {
  const {data,fill1,fill2} = ChartData

  return  <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
        >
          <XAxis dataKey="day" />
          <YAxis dataKey="checkin" />
           <Tooltip />
          <Line dataKey="checkin" stroke={fill1} activeDot={{ r: 8 }} />
          <Line dataKey="checkout" stroke={fill2} />
        </LineChart>
      </ResponsiveContainer>
}

export default LineChartContainer