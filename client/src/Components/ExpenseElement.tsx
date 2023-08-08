import React from "react";
import { Card, CardContent, Box, Avatar, Grid, Typography, Divider } from "@mui/material";
import { red } from '@mui/material/colors';
import { ExpenseElementProps } from "../types/types";
import { currency } from "../types/types";
import { iconSwitch } from "./categoryIcons";
const ExpenseElement: React.FC<ExpenseElementProps> = ({expense}) => {
    return(
        <center>
        <Box>
            <Card sx={{ minHeight: 30, maxWidth: 800, display: 'flex', p: 1.2, borderRadius: '15px', bgcolor: "#FFFAEC", my: '1rem'}}>
                <Grid container spacing={1}>
                    <Grid item xs={2} sx={{width: '50%', margin: 'auto'}}>
                        {iconSwitch(expense.category)}
                    </Grid>
                    <Grid item xs={3}>
                        <Typography gutterBottom variant='h5' component='div' align='left' color={'textPrimary'}>
                            {expense.category}
                        </Typography>
                        <Typography gutterBottom variant='subtitle2' component='div' align='left' color={'textPrimary'}>
                            {expense.date}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography gutterBottom variant='h6' component='div' align='left' color={'textPrimary'}>
                            Notes
                        </Typography>
                        <Typography gutterBottom variant='subtitle2' component='div' align='left' color={'textPrimary'}>
                            {expense.notes}
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Divider orientation="vertical" variant="middle" flexItem textAlign="left"/>
                        <Typography gutterBottom variant='h4' component='div' align='right' color={'textPrimary'}>
                            {currency}{expense.amount}
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