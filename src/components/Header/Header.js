import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink, withRouter } from "react-router-dom";
import { HomeRounded, FacebookIcon,TwitterIcon,LinkedInIcon, Telegram } from '@mui/icons-material';
import resumeData from '../utils/resumeData';
import CustomButton from '../Button/Button';
import './Header.css';


const Header = (props) => {
  const pathName = props?.location?.pathname;
  return (
    <Navbar expand="lg" sticky='top' className='header'>
      {/*Home link */}
      <Nav.Link as={NavLink} to='/' className='header_navlink'>
        <Navbar.Brand className='header_home'>
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className='header_left'>

          {/* Experience Link */}
          <Nav.Link as={NavLink} to='/experience' className={pathName == '/Experience' ? 'header_link_active' : 'header_link'}>
            Experience
          </Nav.Link>

          {/* Skills Link */}
          <Nav.Link as={NavLink} to='/skills' className={pathName == '/Skills' ? 'header_link_active' : 'header_link'}>
            Skills
          </Nav.Link>

          {/* Education Link */}
          <Nav.Link as={NavLink} to='/education' className={pathName == '/Education' ? 'header_link_active' : 'header_link'}>
          Education
          </Nav.Link>

          {/* Project Link */}
          <Nav.Link as={NavLink} to='/project' className={pathName == '/Project' ? 'header_link_active' : 'header_link'}>
          Projects
          </Nav.Link>

          {/* Contact Link */}
          <Nav.Link as={NavLink} to='/contact' className={pathName == '/Contact' ? 'header_link_active' : 'header_link'}>
            Contact
          </Nav.Link>
        </Nav>

        <div className='header_right'>
          {Object.keys(resumeData.socials).map(key => (
            <a href={resumeData.socials[key].link} target='_blank'>
              {resumeData.socials[key].icon}
            </a>
          ))}
          
        </div>
      </Navbar.Collapse>

    </Navbar>
  );
};

export default Header;

/*import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useState } from "react";
import Link from '@mui/material/Link';
import CustomButton from '../Button/Button';
import resumeData from '../utils/resumeData';
import { Telegram } from '@mui/icons-material';
import './Header.css';

import { Link as RouterLink } from "react-router-dom";

const pages = ['Resume', 'Portfolio'];


const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

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
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                       Home
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            textDecoration='none'
                            
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
                            {pages.map((page) => {
                                let toPath = page ;
                                if (page ==='Resume'){ toPath='/resume'}
                                if (page ==='portfolio'){toPath='/portfolio'}
                           
                                console.log(toPath);
                                return (
                                    <Link component={RouterLink} to={toPath} key={page}>
                                        <MenuItem onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center" color='white'>{page}</Typography>
                                        </MenuItem>
                                    </Link>
                                );
                            })}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Home
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => {
                          let toPath = page ;
                          if (page ==='Resume'){ toPath='/resume'}
                          if (page ==='portfolio'){toPath='/portfolio'}

                            return (
                                <Link component={RouterLink} to={toPath} key={page}>
                                   <MenuItem onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center" color='white'>{page}</Typography>
                                        </MenuItem> 
                                </Link>
                            );
                        })}
                    </Box>

                    <div className='header'>
          {Object.keys(resumeData.socials).map(key => (
            <a href={resumeData.socials[key].link} target='_blank'>
              {resumeData.socials[key].icon}
            </a>
          ))}
          <CustomButton text={'Hire Me'} icon={<Telegram />} />
        </div>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;
*/