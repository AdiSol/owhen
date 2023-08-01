import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        text: {
            primary: '#07124B',
            secondary: '#ffffff'
        },
        background: {
            // default: '#C4E9E1', 
        },
        button: {
            main: '#ffffff', // Set the default button text color (white)
            background: '#007bff', // Set the default button background color
            border: '1px solid white'
        },
    },
    
    typography: {
        fontFamily: 'Fredoka'
    }
});

export default theme;