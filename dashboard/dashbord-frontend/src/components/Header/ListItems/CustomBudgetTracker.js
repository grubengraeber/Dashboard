import React from 'react';
import { BasicListItem } from './BasicListItem'
import BalanceSharpIcon from '@mui/icons-material/BalanceSharp';
import { useNavigate } from 'react-router-dom'


export const CustomBudgetTracker = () => {
  const navigate = useNavigate();

  const navigateToBudgetTracker = () => {
    // 👇️ navigate to /
    navigate('/BudgetTracker');
  };

  return (
    <>
      <BasicListItem text={'Budget Tracker'} onClick={navigateToBudgetTracker} icon={<BalanceSharpIcon />} />
    </>
  )
}