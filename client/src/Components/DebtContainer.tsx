import React from 'react';
import { Card, Box, Grid, Button } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { ious } from '../data/IOUs';
import InfoIcon from '@mui/icons-material/Info';
const columns: GridColDef[] = [
    // { field: 'id', headerName: 'ID', width: 70 },
    { field: 'creditor', headerName: 'Creditor', width: 130 },
    { field: 'amount', headerName: 'Debt', width: 130, type: 'number' },
    {
        field: 'actions',
        headerName: 'Actions',
        width: 100,
    },
    ];

const DebtContainer = () => {

    return(
        <>
            <Card sx={{bgcolor: "#FFFAEC", maxWidth: '130vh', p: 2}}>
                <Grid container spacing={1} sx={{mb: 2}}>
                    <Grid item xs={3}>Name</Grid>
                    <Grid item xs={4}>Total Debt</Grid>
                    <Grid item xs={3}>actions</Grid>
                    <Grid item xs={1}>info</Grid>
                </Grid>
                <Grid container spacing={1}>
                    {ious.map(iou => (
                        <>
                        <Grid item xs={3}>{iou.creditor}</Grid>
                        <Grid item xs={4}>
                            NT${iou.amount}<br/>{iou.deadline}
                        </Grid>
                        <Grid item xs={3}><Button>Paid</Button><Button>Forgiven</Button></Grid>
                        <Grid item xs={1}><InfoIcon/></Grid>
                        </>
                    ))
                    
                    }
                </Grid>
            </Card>
            {/* <Box sx={{height: 400, width: '100%'}}>
                <DataGrid
                    rows={ious}
                    columns={columns} 
                />
            </Box> */}
        </>
    )
}

export default DebtContainer;