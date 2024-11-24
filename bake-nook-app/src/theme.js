import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Noto Sans, sans-serif",
    htmlFontSize: 10,
    h1: {
      fontSize: "3.6rem",
      lineHeight: 1.2,
      fontWeight: "bold",
      color: "#222",
    },
    h2: {
      fontSize: "3rem",
      lineHeight: 1.3,
      fontWeight: "bold",
      color: "#222",
    },
    h3: {
      fontSize: "2.4rem",
      lineHeight: 1.4,
      fontWeight: "bold",
      color: "#222",
    },
    body1: {
      fontSize: "1.6rem",
      lineHeight: 1.7,
      color: "#555",
      textAlign: "justify",
    },
  },
  palette: {
    primary: {
      main: "#FFC8DD ",
    },
    secondary: {
      main: "#876952 ",
    },
    text: {
      primary: "#666666",
      secondary: "#808080",
    },
    background: {
      default: "#fff",
      paper: "#A2D2FF ",
    },
    customColors: {
      primaryLight: "#ffd3e4",
      primaryDark: "#e6b4c7",
      secondaryLight: "#ba9c85",
      secondaryDark: "#6f5644",
      headerColor: "#e6f3ff",
      paperLight:'#b3daff',
      textLight:'#d9d9d9'
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
  },
});

export default theme;
