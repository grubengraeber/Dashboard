import React from 'react';
import {BasicListItem} from './BasicListItem'
import BalanceSharpIcon from '@mui/icons-material/BalanceSharp';
import {useNavigate} from 'react-router-dom'


export const CustomBudgetTracker = (props) => {
  const navigate = useNavigate();

  const navigateToBudgetTracker = () => {
    // 👇️ navigate to /
    navigate('/Budget');
  };

  return (
    <>
    <BasicListItem text={'Budget Harmony'} onClick={navigateToBudgetTracker} icon={<BalanceSharpIcon />}/>
    </>
  )
}