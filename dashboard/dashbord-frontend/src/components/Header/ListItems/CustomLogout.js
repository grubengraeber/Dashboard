import React from 'react';
import { BasicListItem } from './BasicListItem'
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import useAuth from '../../../hooks/useAuth';


export const CustomLogout = () => {
  const { logOut } = useAuth()

  const navigateToLogout = () => {
    // 👇️ navigate to /
    logOut();
  };

  return (
    <>
      <BasicListItem text={'Logout'} onClick={navigateToLogout} icon={<LogoutSharpIcon />} />
    </>
  )
}