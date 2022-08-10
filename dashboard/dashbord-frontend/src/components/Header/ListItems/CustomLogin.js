import React from 'react';
import {BasicListItem} from './BasicListItem'
import LoginSharpIcon from '@mui/icons-material/LoginSharp';


export const CustomLogin = (props) => {
  return (
    <>
    <BasicListItem text={'Login'} onClick={() => {console.log("onClick Login")}} icon={<LoginSharpIcon />}/>
    </>
  )
}
