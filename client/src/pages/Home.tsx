import { Box, Grid, Paper, styled } from '@mui/material'
import { useState, useEffect } from 'react'
import Login from './Login'
import Signup from './Signup'

export default function Home() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Item>
          <h1>Workout App</h1>
        </Item>
      </Grid>
      <Grid item xs={12}>
        <Item>
          App
        </Item>
      </Grid>



    </Grid>
  )
}