import { Box, Grid, Paper, styled } from '@mui/material'
import { useState, useEffect } from 'react'
import Login from './Login'
import Signup from './Signup'

export default function Home() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#f3e5f5',
    ...theme.typography.body2,
    padding: theme.spacing(0.2),
    textAlign: 'center',
    color: theme.palette.text.primary,
  }));

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Item>
          <h1>Dashboard</h1>
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