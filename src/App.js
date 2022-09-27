import React from 'react';
import './App.css';
import { Container, Grid } from '@mui/material';
import Profile from './components/Profile/Profile'
import AppRouter from './Router';

function App() {
  return (
    <Container className={'top_60'}>
      <Grid container spacing={2}>
        <Grid item xs={10} sm={12} md={4} lg={3} >
          <Profile />
        </Grid>
        <Grid item xs >
          <AppRouter />
          
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
