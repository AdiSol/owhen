import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: true;
    mobile: false; // adds the `mobile` breakpoint
    tablet: false;
    laptop: false;
    desktop: false;
  }
}
  
const theme = createTheme({
    palette: {
        text: {
            primary: '#07124B',
            secondary: '#ffffff'
        },
        background: {
            // default: '#C4E9E1', 
        },
        // button: {
        //     main: '#ffffff', // Set the default button text color (white)
        //     background: '#007bff', // Set the default button background color
        //     border: '1px solid white'
        // },
        
    },

    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 1070,
        lg: 1200,
        xl: 1536,
      },
    },
    
    typography: {
        fontFamily: 'Fredoka'
    }
});

export default theme;