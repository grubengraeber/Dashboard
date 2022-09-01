import { createTheme } from "@mui/material";

const Theme = createTheme(
    {
        palette: {
            mode: 'light',
            primary: {
                main: '#5cce3b',
                light: '#64dd17',
                dark: '#76ff03',
            },
            secondary: {
                main: '#8c8a8a',
                light: '#757575',
                dark: '#bdbdbd',
            },
            },
    }
)

export default Theme