import { Box, Grid, Paper, styled } from '@mui/material'
import Item from '../components/Item'
import { useState, useEffect } from 'react'

export default function Home() {

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