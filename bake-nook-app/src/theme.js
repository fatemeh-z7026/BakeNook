import { createTheme } from "@mui/material/styles";
import { light } from "@mui/material/styles/createPalette";

const theme = createTheme({
  typography: {
    fontFamily: "Noto Sans, sans-serif",
    htmlFontSize: 10, 
    h1: {
      fontSize: '3.6rem',
      lineHeight: 1.2,
      fontWeight: 'bold',
      color: '#222',
    },
    h2: {
      fontSize: '3rem',
      lineHeight: 1.3,
      fontWeight: 'bold',
      color: '#222',
    },
    h3: {
      fontSize: '2.4rem',
      lineHeight: 1.4,
      fontWeight: 'bold',
      color: '#222',
    },
    body1: {
      fontSize: '1.6rem',
      lineHeight: 1.7,
      color: '#555',
      textAlign: 'justify',
    },
  },
  palette: {
    primary: {
      
      main: '#FFC8DD ',
      mainLightPrimary:'#ffd3e4',
      mainDarkPrimary:'#e6b4c7'
    },
    secondary: {
      main: '#A98467 ',
      mainLightSecondary:'#ba9c85',
      mainDarkSecondary:'#876952',
    },
    text: {
      primary: "#333333",
      secondary: "#555555",
    },
    background: {
      default: "#BDE0FE",
      paper: "#A2D2FF ",
    },
  },
});

export default theme;
