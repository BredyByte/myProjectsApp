import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { TbMushroom } from 'react-icons/tb';
import { Link } from 'react-router-dom';

import './NavigationBar.css';

const settings = ['About'];

const NavigationBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: "4" }}>
      <Container maxWidth="xl">
        <Toolbar style={{ justifyContent: "space-between" }} disableGutters>
          <Link to="/" >
            <Typography
              variant="h6"
              noWrap
              component="p"
              sx={{
                mr: 2,
                display: 'flex',
                alignItems: 'center',
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >

              Se<TbMushroom/>aApp
            </Typography>
          </Link>
          <Box className="AuthorIcon" sx={{ flexGrow: 0, padding: "5px", borderRadius: "50%" }}>
            <Tooltip>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Davyd Bredykhin" src="https://png.vector.me/files/images/8/3/831744/super_mario_mushroom.jpg" />
              </IconButton>
            </Tooltip>
            {/*<Menu*/}
            {/*  sx={{ mt: '45px' }}*/}
            {/*  id="menu-appbar"*/}
            {/*  anchorEl={anchorElUser}*/}
            {/*  anchorOrigin={{*/}
            {/*    vertical: 'top',*/}
            {/*    horizontal: 'right',*/}
            {/*  }}*/}
            {/*  keepMounted*/}
            {/*  transformOrigin={{*/}
            {/*    border: "1px red solid",*/}
            {/*    vertical: 'top',*/}
            {/*    horizontal: 'right',*/}
            {/*  }}*/}
            {/*  open={Boolean(anchorElUser)}*/}
            {/*  onClose={handleCloseUserMenu}*/}
            {/*>*/}
            {/*  {settings.map((setting) => (*/}
            {/*    <MenuItem key={setting} onClick={handleCloseUserMenu}>*/}
            {/*      <Link to="/about" >*/}
            {/*        <Typography textAlign="center">{setting}</Typography>*/}
            {/*      </Link>*/}
            {/*    </MenuItem>*/}
            {/*  ))}*/}
            {/*</Menu>*/}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavigationBar;