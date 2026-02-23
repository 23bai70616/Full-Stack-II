import React, { useContext, useMemo } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Container, Typography, Button } from "@mui/material";

function Dashboard() {
  const { state, dispatch } = useContext(GlobalContext);

  const computedValue = useMemo(() => {
    return state.count * 1000;
  }, [state.count]);

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Typography variant="h6">
        Global Count: {state.count}
      </Typography>

      <Typography>
        Computed Value: {computedValue}
      </Typography>

      <Button
        variant="contained"
        sx={{ mt: 2, mr: 2 }}
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increment
      </Button>

      <Button
        variant="outlined"
        sx={{ mt: 2 }}
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Decrement
      </Button>
    </Container>
  );
}

export default Dashboard;