import { Grid } from '@mui/material'
import { QueryClient, useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import ExpenseNav from '../../components/Expenses/ExpenseNav'
import ExpensesChart from '../../components/Expenses/ExpensesChart'
import ExpensesList from '../../components/Expenses/ExpensesList'
import ExpensesListItem from '../../components/Expenses/ExpensesListItem'
import { endpoints } from '../../Fetch/reactQueryEndpoints'
import useAuth from '../../hooks/useAuth'
import { useMutation } from '@tanstack/react-query'
import AddExpenseForm from '../../components/Expenses/AddExpenseFormDialog'
import { useState } from 'react'


const ExpensesSite = () => {
    const auth = useAuth();
    const queryClient = useQueryClient()

    const {
        data: expensesData,
        isFetching: isFetchingExpenses,
        error: errorExpenses,
        isError: isErrorExpenses,
        refetch: refetchExpenseData,
        isFetched: isExpensesFetched } = useQuery(["expenses"], () => endpoints.getExpenses(auth),
            { refetchOnWindowFocus: false });
    const {
        data: chartData,
        isFetching:
        isFetchingChart,
        error: errorChart,
        isError: isErrorChart,
        refetch: refetchChartData,
        isFetched: isChartFetched } = useQuery(["chart"], () => endpoints.getChartData(auth),
            { refetchOnWindowFocus: false });

    //setting up usemutation
    const mutationDeleteExpense = useMutation((expenseId) => endpoints.deleteExpense(auth, expenseId),
        {
            onSuccess: () => {
                refetchBudgetSite();
                console.log("success and refetch after delete");
            }
        });
    const mutationAddExpense = useMutation((payload) => endpoints.postExpense(auth, payload), { onSuccess: () => refetchBudgetSite() })
    const [showAddDialog, setShowAddDialog] = useState(false);

    const refetchBudgetSite = async () => {
        await queryClient.invalidateQueries();
    }

    const onDeleteExpense = (expenseId) => {
        console.log("delete expense with id = ", expenseId);
        mutationDeleteExpense.mutate(expenseId);
        refetchBudgetSite();
    }

    const createListItems = () =>
        (expensesData.map((expense) => <ExpensesListItem key={expense.id} data={expense} onDelete={onDeleteExpense} />))
    const onCloseDialog = () => setShowAddDialog(false);
    const onShowAddDialog = () => setShowAddDialog(true);

    /**
           * takes a new expense Object and
           * @param {*} newExpense 
           */
    const onAddExpense = (newExpense) => {
        console.log(newExpense);
        mutationAddExpense.mutate(newExpense);
        setShowAddDialog(false);
        //refetchBudgetSite();
    }



    console.log("set up expensesSite")

    // if (isFetchingExpenses && isFetchingChart) {
    //     console.log("loading fetch")
    //     return (<>Loading ....</>)
    // }

    if (isErrorChart || isErrorExpenses) {
        console.log(errorExpenses)
        console.log(errorChart)
    }

    if (isExpensesFetched && isChartFetched) {




        return (
            <>
                <Grid
                    container
                    flexDirection={"column"}
                    alignContent={"center"}
                    spacing={1}>
                    <Grid item xs={3}>
                        <ExpensesChart data={chartData} />
                    </Grid>
                    <Grid item xs={3}>
                        <ExpenseNav onAdd={onShowAddDialog} />
                    </Grid>
                    <Grid item xs={3}>
                        <ExpensesList data={expensesData} listItemsCreator={createListItems} />
                    </Grid>
                </Grid>
                <AddExpenseForm show={showAddDialog} onClose={onCloseDialog} onNewExpense={onAddExpense} />
            </>

        )
    }
}

export default ExpensesSite