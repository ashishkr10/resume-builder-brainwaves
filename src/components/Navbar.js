import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Switch } from "@mui/material";

const label = { inputProps: { "area-label": "switch-demo" } };

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Resume Builder
          </Typography>
          <Typography variant="Subtitle">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </Typography>
          <Switch
            {...label}
            defaultChecked
            color="default"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
