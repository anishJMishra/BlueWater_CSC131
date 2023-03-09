import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

const data = [
  { id: 1, name: 'John', insuranceNum: 30, dob: '11/21/1985' },
  { id: 2, name: 'Jane', insuranceNum: 25, dob: '05/17/2000' },
  { id: 3, name: 'Bob', insuranceNum: 35, dob: '02/03/1993' },
];

const GridView = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {data.map((item) => (
        <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">{item.name}</Typography>
            <Typography variant="body1">{item.description}</Typography>
            <Typography variant="body2" color="text.secondary">
              {item.date}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default GridView;