import React from 'react';
import {BasicListItem} from './BasicListItem'
import HowToRegSharpIcon from '@mui/icons-material/HowToRegSharp';
import {useNavigate} from 'react-router-dom'


export const CustomRegister = () => {

  const navigate = useNavigate();

  const navigateToRegister = () => {
    // 👇️ navigate to /
    navigate('/register');
  };

  return (
    <>
    <BasicListItem text={'Register'} onClick={navigateToRegister} icon={<HowToRegSharpIcon />}/>
    </>
  )
}