import React from 'react';
import {BasicListItem} from './BasicListItem'
import CloseSharpIcon from '@mui/icons-material/CloseSharp';


export const CustomClose = (props) => {
  return (
    <>
    <BasicListItem text={'Close'} onClick={() => {}} icon={<CloseSharpIcon />}/>
    </>
  )
}