import React from "react";
import { Card, CardContent, Box, CardHeader, Avatar, Grid, Typography, Divider } from "@mui/material";
import { red } from '@mui/material/colors';
import LocalMallIcon from '@mui/icons-material/LocalMall';
const ExpenseElement = () => {

    return(
        <center>
        <Box sx={{}}>
            <Card sx={{ minHeight: 30, maxWidth: 800, display: 'flex', p: 1.2, borderRadius: '15px', bgcolor: "#FFFAEC"}}>
                <Grid container spacing={1}>
                    <Grid item xs={2} sx={{width: '50%', margin: 'auto'}}>
                        <Avatar sx={{ bgcolor: red[500], width: 55, height: 55 }} aria-label="recipe">
                            <LocalMallIcon sx={{width: 35, height: 35}}/>
                        </Avatar>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography gutterBottom variant='h5' component='div' align='left' color={'textPrimary'}>
                            Shopping
                        </Typography>
                        <Typography gutterBottom variant='subtitle2' component='div' align='left' color={'textPrimary'}>
                            June 10, 2023
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography gutterBottom variant='h6' component='div' align='left' color={'textPrimary'}>
                            Notes
                        </Typography>
                        <Typography gutterBottom variant='subtitle2' component='div' align='left' color={'textPrimary'}>
                            cute bag with a cat
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Divider orientation="vertical" variant="middle" flexItem textAlign="left"/>
                        <Typography gutterBottom variant='h4' component='div' align='right' color={'textPrimary'}>
                            NT$1245
                        </Typography>
                    </Grid>
                </Grid>
                
                <CardContent></CardContent>
            </Card>
        </Box>
        
        </center>
    )
}

export default ExpenseElement;