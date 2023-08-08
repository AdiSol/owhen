import FastfoodIcon from '@mui/icons-material/Fastfood';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Avatar } from '@mui/material';
import { red, pink, purple, blue, teal, yellow, orange, amber, green, lightBlue, cyan } from '@mui/material/colors';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import CommuteIcon from '@mui/icons-material/Commute';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import PaidIcon from '@mui/icons-material/Paid';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
export const iconSwitch = (category: string) => {
    switch(category) {
        case 'Shopping':  
            return <Avatar sx={{ bgcolor: red[500], width: 55, height: 55 }} aria-label="recipe">
                        <LocalMallIcon sx={{width: 35, height: 35}}/>
                    </Avatar>; 
        case 'Food & Drinks': 
            return <Avatar sx={{ bgcolor: amber[500], width: 55, height: 55 }} aria-label="recipe">
                        <FastfoodIcon sx={{width: 35, height: 35}}/>
                    </Avatar>;
        case 'Housing & Utilities':
            return <Avatar sx={{ bgcolor: lightBlue[500], width: 55, height: 55 }} aria-label="recipe">
                        <MapsHomeWorkIcon sx={{width: 35, height: 35}}/>
                    </Avatar>;
        case 'Transporation':
            return<Avatar sx={{ bgcolor: orange[500], width: 55, height: 55 }} aria-label="recipe">
                    <CommuteIcon sx={{width: 35, height: 35}}/>
                </Avatar>;
        case 'Vehicle':
            return<Avatar sx={{ bgcolor: yellow[500], width: 55, height: 55 }} aria-label="recipe">
                    <CarRepairIcon sx={{width: 35, height: 35}}/>
                </Avatar>;
        case 'Leisure & Entertainment':
            return<Avatar sx={{ bgcolor: purple[500], width: 55, height: 55 }} aria-label="recipe">
                    <LocalMoviesIcon sx={{width: 35, height: 35}}/>
                </Avatar>;
        case 'Investments':
            return<Avatar sx={{ bgcolor: green[500], width: 55, height: 55 }} aria-label="recipe">
                    <ShowChartIcon sx={{width: 35, height: 35}}/>
                </Avatar>;
        case 'Income':
            return<Avatar sx={{ bgcolor: teal[500], width: 55, height: 55 }} aria-label="recipe">
                    <PaidIcon sx={{width: 35, height: 35}}/>
                </Avatar>;
        case 'Travel':
            return<Avatar sx={{ bgcolor: cyan[500], width: 55, height: 55 }} aria-label="recipe">
                    <AirplanemodeActiveIcon sx={{width: 35, height: 35}}/>
                </Avatar>;
        case 'Medical & Dental':
            return<Avatar sx={{ bgcolor: blue[500], width: 55, height: 55 }} aria-label="recipe">
                    <MedicalServicesIcon sx={{width: 35, height: 35}}/>
                </Avatar>;
        default:
            return <Avatar sx={{ bgcolor: pink[500], width: 55, height: 55 }} aria-label="recipe">
                        <QuestionMarkIcon sx={{width: 35, height: 35}}/>
                    </Avatar>;
    }
}