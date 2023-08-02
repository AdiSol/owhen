import React, { useState } from 'react';
import { Grid, Box, Card, CardContent, Typography, Button, CardActions, Avatar } from '@mui/material';
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
    return(
        <Box sx={{mt: 5}}>  
            {/* <h1>Homepage</h1> */}
            <Box sx={{ flexGrow: 1, display: 'flex', px: '5rem', justifyContent: 'center', color: 'white', mt: 15}}>
                <Grid container spacing={2}>
                    <Grid item md={1}></Grid>
                    <Grid item xs={12} md={5}>
                        <Card sx={{ minWidth: 430, mx: 10, borderRadius: '15px', p: 1.3, background: 'linear-gradient(180deg, rgba(255,171,97,1) 30%, rgba(238,149,149,1) 100%)'}}>
                            <CardContent>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography gutterBottom variant='h6' component='div' align='left' color={'white'}>
                                            Balance
                                        </Typography>
                                        <Typography gutterBottom variant='h4' component='div' align='left' sx={{pb: 9}} color={'white'}>
                                            {currency}{balance}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Avatar variant="rounded" sx={{ bgcolor: 'white', marginLeft: 'auto', width: 56, height: 56}}>
                                            <AccountBalanceWalletIcon sx={{width: 45, height: 45, color: 'rgba(255,171,97,1)'}} />
                                        </Avatar>
                                    </Grid>
                                </Grid>
                                
                            </CardContent>
                            <CardActions disableSpacing>
                                <Button variant="text" startIcon={<MilitaryTechIcon />} sx={{color: 'white', pointerEvents: 'none'}}>
                                    Super Saver
                                </Button>
                                <Button variant='outlined' sx={{ borderRadius: '20px', marginLeft: 'auto', color: 'white', border: '1px solid white'}}>Settings</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Card sx={{ minWidth: 430, mx: 10, borderRadius: '15px' , p: 1, background: 'linear-gradient(180deg, rgba(255,157,157,1) 15%, rgba(211,80,159,1) 100%)'}}>
                            <CardContent>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography gutterBottom variant='h6' component='div' align='left' color={'textSecondary'}>
                                            Budget left
                                        </Typography>
                                        <Typography gutterBottom variant='h4' component='div' align='left' color={'textSecondary'}>
                                            {currency}{budgetLeft}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Avatar variant="rounded" sx={{ bgcolor: 'white', marginLeft: 'auto', width: 56, height: 56}}>
                                            <PaymentsIcon sx={{width: 45, height: 45, color: 'rgba(255,157,157,1)'}} />
                                        </Avatar>
                                    </Grid>
                                </Grid>
                                
                                <Box sx={{py: 1, mt: 1}}>
                                    <Typography gutterBottom variant='subtitle2' component='div' align='left'  sx={{fontFamily: 'fredoka',}} color={'textSecondary'}>
                                        Total Budget: {currency}{totalBudget}
                                    </Typography>
                                    <Typography gutterBottom variant='subtitle2' component='div' align='left'  sx={{fontFamily: 'fredoka',}} color={'textSecondary'}>
                                        Valid Until: {budgetValid}
                                    </Typography>
                                </Box>
                                
                            </CardContent>
                            <CardActions disableSpacing>
                                <Button variant="text" sx={{color: 'white', pointerEvents: 'none'}} startIcon={<MilitaryTechIcon />}>
                                    Budget Stickler
                                </Button>
                                <Button variant='outlined' sx={{ borderRadius: '20px', marginLeft: 'auto', color: 'white', border: '1px solid white' }} >Settings</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item md={1}></Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default HomePage;