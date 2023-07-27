import React, {useState} from 'react';
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
import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';

const pages: string[] = ['Overview', 'Expenses', 'IOU', 'UOI'];
const settings: string[] = ['Account', 'Settings', 'Logout'];
const NavLink = styled(Link)`
    color: #07124B; 
    font-size: 16px;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 3rem;
    height: 100%;
    cursor: pointer;
    display: 'block';
    margin: 0.25rem 0.25rem; 
    &.active {
        color: #07124B;
        font-weight: bold;
        text-decoration: underline;
    }
    &:hover {
        color: #07124B;
        text-decoration: underline;
    }
`;
const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    }

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    }

    return(
        <>
            <AppBar position='sticky' sx={{background: '#C4E9E1', pb: 3}} elevation={0}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/* <Container  sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}> <img style={{height: '4rem'}} src='./owhen-logo.svg'/></Container> */}
                        <Box sx={{
                                position: 'relative',
                                '&::before': {
                                content: '""',
                                position: 'absolute',
                                width: '12rem',
                                height: '12rem',
                                borderRadius: '50%',
                                background: '#AEDED2',
                                top: '-7.50rem',
                                left: '-5rem',
                                zIndex: -1,
                                display: { xs: 'none', md: 'flex' },
                                },
                            }}>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'fredoka',
                                fontWeight: 500,
                                color: '#07124B',
                                textDecoration: 'none',
                                }}
                            >
                                Owhen
                            </Typography>
                        </Box>
                        

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md : 'none'}}}>
                            <IconButton
                                size='large'
                                aria-label='account of current user'
                                aria-controls='menu-appbar'
                                aria-haspopup='true'
                                onClick={handleOpenNavMenu}
                            >
                                <MenuIcon/>
                            </IconButton>

                             <Menu
                                id='menu-appbar'
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left'
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left'
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none'}
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign={'center'}>{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                flexGrow: 1,
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                fontFamily: 'fredoka',
                                fontWeight: 500,
                                color: '#07124B',
                                textDecoration: 'none',
                            }}
                        >
                            Owhen
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'}, justifyContent: 'center', textAlign: 'center'}}>
                            <NavLink to='/'>Overview</NavLink>
                            <NavLink to='/expenses'>Expenses</NavLink>
                            <NavLink to='/ious'>IOUs</NavLink>
                            <NavLink to='/uois'>UOIs</NavLink>
                            {/* {pages.map(page => (
                                <Button 
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ mx: 4, my: 2, color: '#07124B', display: 'block'}}
                                >
                                    {page}
                                </Button>
                            ))} */}
                        </Box>
                        
                        <Box sx={{ flexGrow: 0}}>
                            <Tooltip title='more settings'>
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                    <Typography
                                        variant="subtitle1"
                                        noWrap
                                        component="a"
                                        href="/"
                                        sx={{
                                        ml: 1,
                                        mr: 2,
                                        display: { xs: 'none', md: 'flex' },
                                        fontFamily: 'fredoka',
                                        fontWeight: 500,
                                        color: '#07124B',
                                        textDecoration: 'none',
                                        }}
                                    >
                                        Welcome, Renee
                                    </Typography>
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id='menu-appbar'
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right'
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right'
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign={'center'}>{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu> 

                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default Navbar;