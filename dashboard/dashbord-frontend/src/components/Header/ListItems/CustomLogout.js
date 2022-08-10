import React from 'react';
import {BasicListItem} from './BasicListItem'
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';


export const CustomLogout = (props) => {
  return (
    <>
    <BasicListItem text={'Logout'} onClick={() => {console.log("onClick Logout")}} icon={<LogoutSharpIcon />}/>
    </>
  )
}