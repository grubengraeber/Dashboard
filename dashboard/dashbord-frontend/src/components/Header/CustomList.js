import React from 'react'
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';
import StarPurple500SharpIcon from '@mui/icons-material/StarPurple500Sharp';
import { CustomLogin } from './ListItems/CustomLogin';
import { CustomRegister } from './ListItems/CustomRegister';
import { CustomShoppingList } from './ListItems/CustomShoppingList';
import { CustomBudgetTracker } from './ListItems/CustomBudgetTracker';
import { CustomClose } from './ListItems/CustomClose';
import { CustomLogout } from './ListItems/CustomLogout';
import { CustomHousehold } from './ListItems/CustomHousehold';
import PersonIcon from '@mui/icons-material/Person';
import useAuth from '../../hooks/useAuth';


export const CustomList = () => {
  const { auth } = useAuth();

  return (
    <>
    <List>
        <ListSubheader component="div" id="nested-list-subheader" style={{ "alignItems": "center", "justifyContent": "center", "display": "flex"}}>
          <PersonIcon />
          User
        </ListSubheader>

        {auth.user 
        ? <>
            <CustomLogout />
          </>
        : <>
            <CustomLogin />
            <CustomRegister />
          </>
          }
        
      </List>
      <Divider sx={{border: "solid"}}/>
      <List>
      <ListSubheader component="div" id="nested-list-subheader" style={{ "alignItems": "center", "justifyContent": "center", "display": "flex"}}>
        <StarPurple500SharpIcon />
          Favorites
        </ListSubheader>
        <CustomShoppingList />
        <CustomBudgetTracker />
      </List>
      <Divider sx={{border: "solid"}}/>
      <CustomHousehold />
      <Divider sx={{border: "solid"}}/>
      <List>
        <CustomClose />
      </List>
      </>
  )
}
