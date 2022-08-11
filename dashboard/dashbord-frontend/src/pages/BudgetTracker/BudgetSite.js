import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { endpoints } from '../../Fetch/endpoints';
import ExpensesChart from '../../components/ExpensesChart';



const BudgetSite = () => {

  const {data, isLoading, error, isError} = useQuery(["expenses"], endpoints.getExpenses);

  if (isLoading) {
    return (<h1>is loading...</h1>)
  } if (isError) {
    console.log(error)
    return (<h1>an error happened</h1>)
  } else {
    
  
    return (
      <>
          <ExpensesChart/>
            { data.map((expense) => <p key={expense.id}>{expense.name}</p> )}
      </>
    )
  }


}


export default BudgetSite