import React from 'react'
import {Line} from 'react-chartjs-2';
import {Chart as ChartJS }from 'chart.js/auto'

const LineGraph = ({chartData}) => {
  return (
    <div>
        <h3>Line</h3>
        <Line data={chartData}/>
    </div>
  )
}

export default LineGraph