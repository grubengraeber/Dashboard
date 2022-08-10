import React from 'react';
import {BasicListItem} from './BasicListItem'
import BalanceSharpIcon from '@mui/icons-material/BalanceSharp';
import {useNavigate} from 'react-router-dom'


export const CustomBudgetHarmony = (props) => {
  const navigate = useNavigate();

  const navigateToBudgetHarmony = () => {
    // 👇️ navigate to /
    navigate('/BudgetHarmony');
  };

  return (
    <>
    <BasicListItem text={'Budget Harmony'} onClick={navigateToBudgetHarmony} icon={<BalanceSharpIcon />}/>
    </>
  )
}