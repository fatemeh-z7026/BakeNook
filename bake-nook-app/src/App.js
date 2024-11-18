import "./App.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
       
      </div>
    </ThemeProvider>
  );
}

export default App;
