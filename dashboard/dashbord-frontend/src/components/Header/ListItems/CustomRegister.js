import React from 'react';
import {BasicListItem} from './BasicListItem'
import HowToRegSharpIcon from '@mui/icons-material/HowToRegSharp';



export const CustomRegister = (props) => {
  return (
    <>
    <BasicListItem text={'Register'} onClick={() => {console.log("onClick Register")}} icon={<HowToRegSharpIcon />}/>
    </>
  )
}