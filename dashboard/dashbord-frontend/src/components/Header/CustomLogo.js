import React from 'react'
import {useNavigate} from 'react-router-dom'


export const CustomLogo = (props) => {
    const navigate = useNavigate();

  const navigateToHome = () => {
    // 👇️ navigate to /
    navigate('/');
  };
  return (
    <>
        <h1 onClick={navigateToHome}>DASHBOARD</h1>
    </>
  )
}
