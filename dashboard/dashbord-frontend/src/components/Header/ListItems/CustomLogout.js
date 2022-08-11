import React from 'react';
import {BasicListItem} from './BasicListItem'
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import {useNavigate} from 'react-router-dom'


export const CustomLogout = (props) => {

  const navigate = useNavigate();

  const navigateToLogout = () => {
    // 👇️ navigate to /
    navigate('/logout');
  };

  return (
    <>
    <BasicListItem text={'Logout'} onClick={navigateToLogout} icon={<LogoutSharpIcon />}/>
    </>
  )
}