import React from 'react'
import ExpensesChart from '../../components/Budget/ExpensesChart';
import { Card, Grid } from '@mui/material';
import ExpenseNav from '../../components/Budget/ExpenseNav';
import ExpensesList from '../../components/Budget/ExpensesList';
import { useQuery } from '@tanstack/react-query';
import { endpoints } from '../../Fetch/reactQueryEndpoints';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';



export const ExpenseContext = React.createContext()


const BudgetSite = ({ theme }) => {
  const [force, setForce] = useState(0);
  const auth = useAuth();
  const forceUpdate = () => {

    setForce(force => force + 1);
  }
  if (false) {
    console.log(force)
  }


  const { data, isLoading, error, isError } = useQuery(["expenses"], () => endpoints.getExpenses(auth),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false
    });


  if (isLoading) {
    return (<h1>is loading...</h1>)
  } if (isError) {
    console.log(error)
    return (<h1>an error happened</h1>)
  } else {

    return (
      <ExpenseContext.Provider value={{ 'forceUpdate': forceUpdate }}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          margin={5}
        >
          <Grid item xs={12}>
            <Card >
              <ExpensesChart theme={theme} />
            </Card>
          </Grid>
          <Grid item xs={12} margin={2} alignItems={"flex-start"}>
            <Card>
              <ExpenseNav forceUpdate={forceUpdate} />
            </Card>
          </Grid>
          <Grid item xs={12} margin={2}>
            <Card>
              <ExpensesList data={data} />

            </Card>
          </Grid>
        </Grid >
      </ExpenseContext.Provider>

    )
  }
}





export default BudgetSite