import "./App.css";
import Navbar from "./components/Navbar";
import { StepperForm } from "./components/StepperForm";
import { Container, Toolbar } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Toolbar />
        <main>
          <Container>
            <StepperForm />
          </Container>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
