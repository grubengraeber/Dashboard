import {IconButton, Toolbar, Typography, Menu} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

export const Header = props => {
    return (
        <>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{mr: 2}}>
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" color="inherit" component="div">
                    Home
                </Typography>
            </Toolbar>
        </>
    );
};