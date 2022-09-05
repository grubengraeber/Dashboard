import React from 'react'
import {useNavigate} from 'react-router-dom'


export const CustomLogo = ({ title }) => {
    const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };
  return (
    <>
        <h1 onClick={navigateToHome}>{title}</h1>
    </>
  )
}
