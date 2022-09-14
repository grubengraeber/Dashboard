import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { CustomList } from './Header/CustomList';
import { CustomLogo } from './Header/CustomLogo';
import { Grid } from '@mui/material';
import ThemeSwitch from '../UI/Themes/ThemeSwitch';


export const Header = ({ darkMode, setDarkMode }) => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <CustomList/>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <Button onClick={toggleDrawer(anchor, true)}><MenuIcon /></Button>
            </Grid>
            <Grid item xs={5}>
              <CustomLogo title={"Dashboard"}/>
            </Grid>
            <Grid item xs={1}> 
              <ThemeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
            </Grid>
          </Grid>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
          
        </React.Fragment>
      ))}

    </div>
  );
}