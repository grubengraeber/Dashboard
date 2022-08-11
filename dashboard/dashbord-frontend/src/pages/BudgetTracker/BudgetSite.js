import React from 'react'
import ExpensesChart from '../../components/Budget/ExpensesChart';
import { Card, Grid } from '@mui/material';
import ExpenseNav from '../../components/Budget/ExpenseNav';
import ExpensesList from '../../components/Budget/ExpensesList';
import { useQuery } from '@tanstack/react-query';
import { endpoints } from '../../Fetch/endpoints';

const BudgetSite = () => {
  const { data, isLoading, error, isError } = useQuery(["expenses"], endpoints.getExpenses);

  if (isLoading) {
    return (<h1>is loading...</h1>)
  } if (isError) {
    console.log(error)
    return (<h1>an error happened</h1>)
  } else {

    return (
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
            <ExpensesChart />
          </Card>
        </Grid>
        <Grid item xs={12} margin={2} alignItems={"flex-start"}>
          <Card>
            <ExpenseNav />
          </Card>
        </Grid>
        <Grid item xs={12} margin={2}>
          <Card>
            <ExpensesList data={data} />

          </Card>
        </Grid>
      </Grid >


    )
  }
}





export default BudgetSite