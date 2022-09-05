import React from 'react'
import { ListItem, ListItemIcon, ListItemButton, ListItemText } from '@mui/material'


export const BasicListItem = ({ text, onClick, icon }) => {
  return (
    <>
      <ListItem key={text} disablePadding onClick={onClick}>
        <ListItemButton>
          <ListItemIcon>
            {icon}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    </>
  )
}