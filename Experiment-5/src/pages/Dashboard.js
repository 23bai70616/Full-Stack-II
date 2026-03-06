import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/counterSlice";
import { Container, Typography, Button } from "@mui/material";

function Dashboard() {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const expensiveValue = useMemo(() => {
    return count * 1000;
  }, [count]);

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4">Dashboard</Typography>

      <Typography variant="h6">
        Counter: {count}
      </Typography>

      <Typography>
        Computed Value: {expensiveValue}
      </Typography>

      <Button
        variant="contained"
        sx={{ mr: 2, mt: 2 }}
        onClick={() => dispatch(increment())}
      >
        Increment
      </Button>

      <Button
        variant="outlined"
        sx={{ mt: 2 }}
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </Button>
    </Container>
  );
}

export default Dashboard;