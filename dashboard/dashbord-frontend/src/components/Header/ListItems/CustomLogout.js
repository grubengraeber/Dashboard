import React, { useContext } from 'react';
import { BasicListItem } from './BasicListItem'
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
// import {useNavigate} from 'react-router-dom'
import useAuth from '../../../hooks/useAuth';

export const CustomLogout = () => {
  const { setAuth } = useAuth();
  // const navigate = useNavigate();
  // const { logOut } = useAuth()
  
  const logOut = () => {
    setAuth({});
    // 👇️ navigate to /
    //navigate('/logout');
    }
    
  return (
    <>
    <BasicListItem text={'Logout'} onClick={logOut} icon={<LogoutSharpIcon />}/>
    </>
  )
}