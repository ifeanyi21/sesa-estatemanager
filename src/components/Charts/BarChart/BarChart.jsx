import React from 'react'
import { ResponsiveContainer,BarChart, XAxis, YAxis, Bar } from 'recharts'

function BarChartContainer(chartData) {
  const {data,Xaxis,Yaxis,datakey, datakey1,fill,fill1,} = chartData

  return (
  <ResponsiveContainer width="100%" height="85%">
    <BarChart width={150} height={40} data={data}>
        <XAxis dataKey={Xaxis}/>
      <YAxis dataKey={Yaxis} />
      <Bar dataKey={datakey} fill={fill} />
      {
        fill1&&
      <Bar dataKey={datakey1} fill={fill1} />
      }
    </BarChart>
    
  </ResponsiveContainer>
  )
}

export default BarChartContainer