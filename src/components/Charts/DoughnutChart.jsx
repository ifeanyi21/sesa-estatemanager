import React from 'react'
import {Doughnut} from 'react-chartjs-2'
// eslint-disable-next-line 
import {Chart as ChartJS} from 'chart.js/auto'

function DoughnutChart({chartData,options}) {
  return (
    <Doughnut data={chartData} options={options}/>
  )
}

export default DoughnutChart