import React from 'react'
import {Bar} from 'react-chartjs-2';
import {Chart as ChartJS }from 'chart.js/auto'

const Bars = ({chartData}) => {
  return (
    <div>
        <h3>Bars</h3>
        <Bar data={chartData}/>
    </div>
  )
}

export default Bars