import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { useQuery } from '@tanstack/react-query'
import { endpoints } from '../Fetch/endpoints';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);





const ExpensesChart = () => {
  const data = {
    datasets: [{
        data: [10, 10]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red', 'blue'
    ]
};
  
  const {isLoading, isError} = useQuery(["chartData"], endpoints.getChartData);
  if (isLoading) return (<h1>loading...</h1>)
  if (isError) return (<h1>error on loading</h1>)
    return (
        <div style={{width: "100px", margin: "auto"}}>
        <Doughnut data={data}/>
        </div>
  )
}

export default ExpensesChart