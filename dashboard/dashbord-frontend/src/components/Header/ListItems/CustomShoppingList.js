import React from 'react';
import {BasicListItem} from './BasicListItem'
import ReceiptLongSharpIcon from '@mui/icons-material/ReceiptLongSharp';
import {useNavigate} from 'react-router-dom'


export const CustomShoppingList = () => {
  const navigate = useNavigate();

  const navigateToShoppingList = () => {
    // 👇️ navigate to /
    navigate('/ShoppingList');
  };
  return (
    <>
    <BasicListItem text={'Shopping List'} onClick={navigateToShoppingList} icon={<ReceiptLongSharpIcon />}/>
    </>
  )
}