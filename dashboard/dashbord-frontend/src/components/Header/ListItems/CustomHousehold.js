import React from 'react'
import { BasicListItem } from './BasicListItem'
import GiteIcon from '@mui/icons-material/Gite';
import { useNavigate } from 'react-router-dom'


export const CustomHousehold = () => {
    const navigate = useNavigate();

    const navigateToMyHousehold = () => {
        // 👇️ navigate to /
        navigate('/myHousehold');
    };
  return (
    <BasicListItem text={"My Household"} onClick={navigateToMyHousehold} icon={<GiteIcon />} />
  )
}
