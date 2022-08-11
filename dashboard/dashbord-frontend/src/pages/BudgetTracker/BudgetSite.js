import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { endpoints } from '../../Fetch/endpoints';
import ExpensesChart from '../../components/ExpensesChart';
import { Grid } from '@mui/material';
import ExpensesListItem from '../../components/ExpensesListItem';
import { List } from '@mui/material';
import { CenterFocusStrong } from '@mui/icons-material';


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
      >
        <Grid item xs={12}>
          <ExpensesChart />
        </Grid>
        <Grid item xs={12}>

        </Grid>
        <Grid item xs={12} border={0.5} direction={'column'} margin={7}>
          <List dense>
            {data.map((expense) => <ExpensesListItem key={expense.id} data={expense} />)}
          </List>
        </Grid>
      </Grid >


    )
  }


}


export default BudgetSite