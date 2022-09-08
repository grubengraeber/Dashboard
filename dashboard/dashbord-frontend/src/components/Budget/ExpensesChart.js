import React, { useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useQuery } from '@tanstack/react-query';
import { endpoints } from '../../Fetch/reactQueryEndpoints';


ChartJS.register(ArcElement, Tooltip, Legend);
// NEXT LINE UNUSED THEREFOR COMMENTED OUT BECAUSE OF CONSOLE WARNINGS
// const labels = ['section 1', 'section 2', 'section 3', 'section 4', 'section 5', 'section 6'];
const borderColors = [
       'rgb(255, 99, 132)',
       'rgb(255, 159, 64)',
       'rgb(255, 205, 86)',
       'rgb(75, 192, 192)',
       'rgb(54, 162, 235)',
       'rgb(153, 102, 255)',
       'rgb(201, 203, 207)'
];

const hoverBorderColors = ['rgb(255, 99, 132)',
       'rgb(255, 159, 64)',
       'rgb(255, 205, 86)',
       'rgb(75, 192, 192)',
       'rgb(54, 162, 235)',
       'rgb(153, 102, 255)',
       'rgb(201, 203, 207)'
];

const backgroundColors = [
       'rgba(255, 99, 132, 0.2)',
       'rgba(255, 159, 64, 0.2)',
       'rgba(255, 205, 86, 0.2)',
       'rgba(75, 192, 192, 0.2)',
       'rgba(54, 162, 235, 0.2)',
       'rgba(153, 102, 255, 0.2)',
       'rgba(201, 203, 207, 0.2)'
];




const ExpensesChart = ({ theme }) => {

       const { data, isLoading, isError, refetch } = useQuery(["chartData"], endpoints.getChartData, { refetchOnMount: "always" });

       useEffect(() => {
              async function refetchData() {
                     refetch();
              }
              refetchData();
       })


       if (isLoading) return (<h1>loading...</h1>)
       if (isError) return (<h1>error on loading</h1>)




       const chartData = {
              labels: Object.keys(data),
              datasets: [{
                     label: 'Doughnut chart',
                     data: Object.values(data),
                     backgroundColor: backgroundColors,
                     borderColor: borderColors,
                     borderWidth: 1,
                     hoverBorderWidth: 1,
                     hoverBorderColor: hoverBorderColors,
              }
              ],
       };
       const darkMode = theme.palette.mode === "dark";
       return (
              <div style={{ margin: "auto" }}>
                     <Doughnut data={chartData}
                            options={{
                                   maintainAspectRatio: true,
                                   plugins: {
                                          legend: {
                                                 labels: {
                                                        color: darkMode ? theme.palette.primary.dark : "black"
                                                 }
                                          }
                                   }

                            }} />
              </div>
       )
}

export default ExpensesChart
