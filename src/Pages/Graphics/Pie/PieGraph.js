import React from 'react'
import {Pie} from 'react-chartjs-2';
import {Chart as ChartJS }from 'chart.js/auto'

const PieGraph = ({chartData}) => {
  return (
    <div>
        <h3>Pie</h3>
        <Pie data={chartData}/>
    </div>
  )
}

export default PieGraph