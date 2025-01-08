import "./App.css";  
import { ThemeProvider, CssBaseline, Button } from "@mui/material"; 
import theme from "./theme";  
import { Routes, Route } from "react-router-dom"; 
import routes from "./routes";  
import Header from "./components/Header"; 


function App() {


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />

      <Routes>
        {routes.map(({ id, path, element }) => (
          <Route key={id} path={path} element={element} />
        ))}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
