import React, {useState} from 'react';
import { Box, Grid, Typography } from '@mui/material';
import ExpenseElement from '../Components/ExpenseElement';
import { expenses } from '../data/expenses';

const Expenses = () => {
    const [currency, setCurrency] = useState<string>('NT$');
    const [totalExp, setTotalExp] = useState<number>(15251.36);
    const [avgExp, setAvgExp] = useState<number>(10251.41);
    return(
        <Box sx={{mt: 5}} >  
            <Typography gutterBottom variant='h4' component='div' align='center' color={'textPrimary'}>
                Expense Tracker
            </Typography>
            <Grid container spacing={1} sx={{pl: '2rem', pt:3, pr: '2rem'}}>
                <Grid item md={4}>
                    <Typography gutterBottom variant='h6' component='div' align='left' color={'textPrimary'}>
                        Total Expense (monthly)
                    </Typography>
                    <Typography gutterBottom variant='h4' component='div' align='left' sx={{pb: 9}} color={'textPrimary'}>
                        {currency}{totalExp}
                    </Typography>
                </Grid>
                <Grid item md={4} textAlign={'center'}>
                    <Typography gutterBottom variant='h6' component='div' align='left' color={'textPrimary'}>
                        Average Expenses (per month)
                    </Typography>
                    <Typography gutterBottom variant='h4' component='div' align='left' sx={{pb: 9}} color={'textPrimary'}>
                        {currency}{avgExp}
                    </Typography>
                </Grid>
                <Grid item md={4}>
                    <Typography gutterBottom variant='h6' component='div' align='left' color={'textPrimary'}>
                        Average Expenses (per month)
                    </Typography>
                    <Typography gutterBottom variant='h4' component='div' align='left' sx={{pb: 9}} color={'textPrimary'}>
                        {currency}{avgExp}
                    </Typography>
                </Grid>
                <Grid item md={12} textAlign={'center'} color={'textPrimary'}>
                    <Typography gutterBottom variant='h5' component='div' align='center' color={'textPrimary'}>
                        Breakdown
                    </Typography>
                    {
                        expenses.map(expense => (
                            <ExpenseElement expense={expense}/>
                        ))
                    }
                    
                </Grid>
            </Grid>
        </Box>
    )
}

export default Expenses;