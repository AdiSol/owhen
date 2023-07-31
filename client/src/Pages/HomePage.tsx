import React from 'react';
import { Grid, Box, Card, CardContent, Typography, Button, CardActions, CardHeader, Avatar } from '@mui/material';
import { deepOrange, green } from '@mui/material/colors';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PaymentsIcon from '@mui/icons-material/Payments';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
const HomePage = () => {

    return(
        <div>  
            <h1>Homepage</h1>
            <Box sx={{ flexGrow: 1, display: 'flex', px: 1, justifyContent: 'center', color: 'white'}}>
                <Card sx={{ minWidth: 430, mx: 10, borderRadius: '15px', p: 1, background: 'linear-gradient(180deg, rgba(255,171,97,1) 30%, rgba(238,149,149,1) 100%)'}}>
                    <CardContent>
                        <Grid container>
                            <Grid item xs={6}>
                                <Typography gutterBottom variant='h6' component='div' align='left' color={'white'}>
                                    Balance
                                </Typography>
                                <Typography gutterBottom variant='h4' component='div' align='left' sx={{pb: 9}} color={'white'}>
                                    NTD102,357
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Avatar variant="rounded" sx={{ bgcolor: green[500], marginLeft: 'auto'}}>
                                    <AccountBalanceWalletIcon />
                                </Avatar>
                            </Grid>
                        </Grid>
                        
                    </CardContent>
                    <CardActions disableSpacing>
                        <Button variant="text" disabled startIcon={<MilitaryTechIcon />} sx={{color: 'white'}}>
                            Super Saver
                        </Button>
                        <Button variant='outlined' sx={{ borderRadius: '20px', marginLeft: 'auto', color: 'white', border: '1px solid white'}}>Settings</Button>
                    </CardActions>
                </Card>

                <Card sx={{ minWidth: 430, mx: 10, borderRadius: '15px' , p: 1, background: 'linear-gradient(180deg, rgba(255,157,157,1) 15%, rgba(211,80,159,1) 100%)'}}>
                    <CardContent>
                        <Grid container>
                            <Grid item xs={6}>
                                <Typography gutterBottom variant='h6' component='div' align='left' color={'textSecondary'}>
                                    Budget left
                                </Typography>
                                <Typography gutterBottom variant='h4' component='div' align='left' color={'textSecondary'}>
                                    NTD10,483
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Avatar variant="rounded" sx={{ bgcolor: deepOrange[500], marginLeft: 'auto'}}>
                                    <PaymentsIcon />
                                </Avatar>
                            </Grid>
                        </Grid>
                        
                        <Box sx={{py: 1, mt: 1}}>
                            <Typography gutterBottom variant='subtitle2' component='div' align='left'  sx={{fontFamily: 'fredoka',}} color={'textSecondary'}>
                                Total Budget:
                            </Typography>
                            <Typography gutterBottom variant='subtitle2' component='div' align='left'  sx={{fontFamily: 'fredoka',}} color={'textSecondary'}>
                                Valid Until:
                            </Typography>
                        </Box>
                        
                    </CardContent>
                    <CardActions disableSpacing>
                        <Button variant="text" disabled startIcon={<MilitaryTechIcon />}>
                            Budget Stickler
                        </Button>
                        <Button variant='outlined' sx={{ borderRadius: '20px', marginLeft: 'auto', color: 'white', border: '1px solid white' }} >Settings</Button>
                    </CardActions>
                </Card>
            </Box>
        </div>
    )
}

export default HomePage;