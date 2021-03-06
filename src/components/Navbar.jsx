

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { motion } from 'framer-motion';
import { useState } from 'react';


const pages = ['About', 'Gallery', 'Services'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar elevation={0} className='navbar' sx={{maxWidth:'70vw',color:'rgba(255,255,255,0.8)', background:'transparent'}}position="static">
      <Container maxWidth="xl">
      <motion.div
    initial={{opacity:0}}
    animate={{opacity: 1}}
    transition={{delay: 0.5, duration: 1.5 }}>
        <Toolbar sx={{justifyContent:'center'}}disableGutters>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
            <IconButton
              className='burger-icon'
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography>{page}</Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={handleCloseNavMenu}>
              <Typography>Schedule Meeting</Typography>
              </MenuItem>
            </Menu>
           
          </Box>
        
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
             
            ))}
            <Button className='meeting-button' variant='contained' sx={{fontSize:'small', borderRadius: '20px', position:'fixed', top:'0', right:'0'}}>Schedule Meeting</Button>
          </Box>

          
        </Toolbar>
        </motion.div>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;