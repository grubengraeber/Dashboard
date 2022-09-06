import React from 'react';
import {BasicListItem} from './BasicListItem'
import CloseSharpIcon from '@mui/icons-material/CloseSharp';


export const CustomClose = () => {
  return (
    <>
    <BasicListItem text={'Close'} onClick={() => {}} icon={<CloseSharpIcon />}/>
    </>
  )
}