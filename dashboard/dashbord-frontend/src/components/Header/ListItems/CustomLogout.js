import React, { useContext } from 'react';
import { BasicListItem } from './BasicListItem'
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import { useNavigate } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth';


export const CustomLogout = () => {
  const { logOut } = useAuth()
  const navigate = useNavigate();

  const navigateToLogout = () => {
    // 👇️ navigate to /
    navigate('/logout');
    logOut();
  };

  return (
    <>
      <BasicListItem text={'Logout'} onClick={navigateToLogout} icon={<LogoutSharpIcon />} />
    </>
  )
}