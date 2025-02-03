import "./App.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import routes from "./routes";
import Header from "./components/Header";
import "./firebase/saveProductData";


function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Routes>
        {routes.map((route) => (
          <Route key={route.id} path={route.path} element={route.element}>
            {route.children &&
              route.children.map((child) => (
                <Route key={child.id} path={child.path} element={child.element} />
              ))}
          </Route>
        ))}
      </Routes>

 
    </ThemeProvider>
  );
}

export default App;
