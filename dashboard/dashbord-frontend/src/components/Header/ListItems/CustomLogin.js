import React from 'react';
import {BasicListItem} from './BasicListItem'
import LoginSharpIcon from '@mui/icons-material/LoginSharp';
import {useNavigate} from 'react-router-dom'


export const CustomLogin = (props) => {

  const navigate = useNavigate();

  const navigateToLogin = () => {
    // 👇️ navigate to /
    navigate('/login');
  };

  return (
    <>
    <BasicListItem text={'Login'} onClick={navigateToLogin} icon={<LoginSharpIcon />}/>
    </>
  )
}
