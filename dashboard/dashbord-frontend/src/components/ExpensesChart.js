import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useQuery } from '@tanstack/react-query';
import { endpoints } from '../Fetch/endpoints';

ChartJS.register(ArcElement, Tooltip, Legend);

const labels = ['section 1', 'section 2', 'section 3', 'section 4', 'section 5', 'section 6'];
const data = {
       labels: labels,
       datasets: [{
       label: 'Doughnut chart',
 data: [65, 59, 83, 89, 76, 55, 40],
 backgroundColor: [
 'rgba(255, 99, 132, 0.2)',
 'rgba(255, 159, 64, 0.2)',
 'rgba(255, 205, 86, 0.2)',
 'rgba(75, 192, 192, 0.2)',
 'rgba(54, 162, 235, 0.2)',
 'rgba(153, 102, 255, 0.2)',
 'rgba(201, 203, 207, 0.2)'
        ],
 borderColor: [
 'rgb(255, 99, 132)',
 'rgb(255, 159, 64)',
 'rgb(255, 205, 86)',
 'rgb(75, 192, 192)',
 'rgb(54, 162, 235)',
 'rgb(153, 102, 255)',
 'rgb(201, 203, 207)'
        ],
 borderWidth: 1,
 hoverBorderWidth: 1,
 hoverBorderColor: ['rgb(255, 99, 132)',
 'rgb(255, 159, 64)',
//  'rgb(255, 205, 86)',
//  'rgb(75, 192, 192)',
//  'rgb(54, 162, 235)',
//  'rgb(153, 102, 255)',
 'rgb(201, 203, 207)'],
    }]
};



const ExpensesChart = () => {
    // These labels appear in the legend and in the tooltips when hovering different arcs
    
  
  const {isLoading, isError} = useQuery(["chartData"], endpoints.getChartData);
  if (isLoading) return (<h1>loading...</h1>)
  if (isError) return (<h1>error on loading</h1>)
    return (
        <div style={{width: "20%", margin: "auto"}}>
        <Doughnut data={data} 
                     options={{
                            maintainAspectRatio: true,
                    }}/>
        </div>
  )
}

export default ExpensesChart