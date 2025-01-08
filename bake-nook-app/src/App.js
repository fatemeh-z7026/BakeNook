import "./App.css";  // این باید در ابتدای فایل باشد
import { ThemeProvider, CssBaseline, Button } from "@mui/material";  // این هم باید در ابتدای فایل باشد
import theme from "./theme";  // در ابتدای فایل
import { Routes, Route } from "react-router-dom";  // در ابتدای فایل
import routes from "./routes";  // در ابتدای فایل
import Header from "./components/Header";  // در ابتدای فایل

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
