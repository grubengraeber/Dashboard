import React from 'react'
import { ListItem, ListItemIcon, ListItemButton, ListItemText } from '@mui/material'


export const BasicListItem = (props) => {
  return (
    <>
      <ListItem key={props.text} disablePadding onClick={props.onClick}>
        <ListItemButton>
          <ListItemIcon>
            {props.icon}
          </ListItemIcon>
          <ListItemText primary={props.text} />
        </ListItemButton>
      </ListItem>
    </>
  )
}