import React from 'react'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ThemeSwitch = (props) => {

    function handleClick(clickEvent) {
        props.setDarkMode(!props.darkMode)
    }

  return (
    <>
        {props.darkMode ? <LightModeIcon onClick={handleClick} /> : <DarkModeIcon onClick={handleClick} /> }
    </>
  )
}

export default ThemeSwitch