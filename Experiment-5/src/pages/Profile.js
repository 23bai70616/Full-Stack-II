import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Container, Typography, Button } from "@mui/material";

function Profile() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4">Profile Page</Typography>

      <Typography>
        Current Theme: {theme}
      </Typography>

      <Button
        variant="contained"
        sx={{ mt: 2 }}
        onClick={toggleTheme}
      >
        Toggle Theme
      </Button>
    </Container>
  );
}

export default Profile;