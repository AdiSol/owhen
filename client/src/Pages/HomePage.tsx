import React, { useState } from 'react';
import { Grid, Box, Card, CardContent, Typography, Button, CardActions, Avatar, Theme, useTheme, useMediaQuery } from '@mui/material';
import { deepOrange, green } from '@mui/material/colors';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PaymentsIcon from '@mui/icons-material/Payments';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
const HomePage = () => {
    const [currency, setCurrency] = useState<string>('NT$');
    const [balance, setBalance] = useState<number>(102357.00);
    const [budgetLeft, setBudgetLeft] = useState<number>(10452.00);
    const [totalBudget, setTotalBudget] = useState<number>(15000.00);
    const [budgetValid, setBudgetValid] = useState<string>('6/21/2023');

    const theme = useTheme();
    const isMobileSize = useMediaQuery(theme.breakpoints.down('sm'));

    const cardLabel = isMobileSize ? 'subtitle2' :'h6';
    const cardAmount = isMobileSize ? 'h5' :'h4';
    const iconSize = isMobileSize ? 38 : 45;
    const subDetailsStyle = isMobileSize ? 'caption' : 'subtitle2';
    const balanceCardStyle = {
        width: isMobileSize ? '20.5rem' : '27rem',
        mx: isMobileSize ? 2 : 10,
        borderRadius: '15px', 
        p: isMobileSize ? 0.4 :  1.3, 
        background: 'linear-gradient(180deg, rgba(255,171,97,1) 30%, rgba(238,149,149,1) 100%)',
        mb: isMobileSize ? 2 : 0
    }

    const budgetCardStyle = {
        width: isMobileSize ? '20.6rem' : '27rem',
        mx: isMobileSize ? 2 : 10,
        borderRadius: '15px', 
        p: isMobileSize ? 0.3  : 1,
        background: 'linear-gradient(180deg, rgba(255,157,157,1) 15%, rgba(211,80,159,1) 100%)'
    }

    const avatarStyle = {
        bgcolor: 'white', 
        marginLeft: 'auto', 
        width: isMobileSize? 43 : 56, 
        height: isMobileSize? 43 : 56
    }

    const achievementStyle = {
        color: 'white', 
        pointerEvents: 'none', 
        fontSize: isMobileSize ? '7pt' : '11pt'
    }

    const settingsStyle = {
        borderRadius: '20px', 
        marginLeft: 'auto', 
        color: 'white', 
        border: '1px solid white', 
        fontSize: isMobileSize ? '7pt' : '10pt'
    }
    
    return(
        <Box sx={{mt: 5}}>  
            {/* <h1>Homepage</h1> */}
            <Box sx={{ flexGrow: 1, display: 'flex',  justifyContent: 'center', color: 'white', mt: isMobileSize ? 5 : 15}}>
                <Grid container spacing={2}>
                    <Grid item md={1} sm={0}></Grid>
                    <Grid item xs={12} sm={12} md={5} alignContent={'center'}>
                        <Card sx={balanceCardStyle} /*sx={{ width: '27rem', mx: 10, borderRadius: '15px', p: 1.3, background: 'linear-gradient(180deg, rgba(255,171,97,1) 30%, rgba(238,149,149,1) 100%)'}}*/>
                            <CardContent>
                                <Grid container>
                                    <Grid item xs={6} sx={{pb: isMobileSize ? 8 : 9}}>
                                        <Typography gutterBottom variant={cardLabel} component='div' align='left' color={'white'}>
                                            Balance
                                        </Typography>
                                        <Typography gutterBottom variant={cardAmount} component='div' align='left' color={'white'}>
                                            {currency}{balance}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Avatar variant="rounded" sx={avatarStyle}>
                                            <AccountBalanceWalletIcon sx={{width: iconSize, height: iconSize, color: 'rgba(255,171,97,1)'}} />
                                        </Avatar>
                                    </Grid>
                                </Grid>
                                
                            </CardContent>
                            <CardActions disableSpacing>
                                <Button variant="text" startIcon={<MilitaryTechIcon />} sx={achievementStyle}>
                                    Super Saver
                                </Button>
                                <Button variant='outlined' sx={settingsStyle}>Settings</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={5}>
                        <Card sx={budgetCardStyle}>
                            <CardContent>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography gutterBottom variant={cardLabel} component='div' align='left' color={'textSecondary'}>
                                            Budget left
                                        </Typography>
                                        <Typography gutterBottom variant={cardAmount} component='div' align='left' color={'textSecondary'}>
                                            {currency}{budgetLeft}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Avatar variant="rounded" sx={avatarStyle}>
                                            <PaymentsIcon sx={{width: iconSize, height: iconSize, color: 'rgba(255,157,157,1)'}} />
                                        </Avatar>
                                    </Grid>
                                </Grid>
                                
                                <Box sx={{py: 1, mt: isMobileSize? 0 : 1}}>
                                    <Typography gutterBottom variant={subDetailsStyle} component='div' align='left'  sx={{fontFamily: 'fredoka',}} color={'textSecondary'}>
                                        Total Budget: {currency}{totalBudget}
                                    </Typography>
                                    <Typography gutterBottom variant={subDetailsStyle} component='div' align='left'  sx={{fontFamily: 'fredoka',}} color={'textSecondary'}>
                                        Valid Until: {budgetValid}
                                    </Typography>
                                </Box>
                                
                            </CardContent>
                            <CardActions disableSpacing>
                                <Button variant="text" sx={achievementStyle} startIcon={<MilitaryTechIcon />}>
                                    Budget Stickler
                                </Button>
                                <Button variant='outlined' sx={settingsStyle} >Settings</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item md={1} sm={0}></Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default HomePage;