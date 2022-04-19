import { Box, Grid, Typography, Button } from '@mui/material'
import { useState, useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { getWorkouts, delWorkout } from '../utils/calls'
import Loader from '../components/Spinner'
import toast from 'react-hot-toast'
import Item from '../components/Item'
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import { actions } from '../store'

interface Workout {
  id: number,
  created_at: string,
  date: string,
  description: string,
  title: string,
  updated_at: string,
  user_id: number
}

export default function WorkoutPage() {
  const navigate = useNavigate()
  const userState = useSelector((globalState:RootState) => globalState.user);
  const workouts = useSelector((state:RootState) => state.workouts.data)
  const dispatch = useDispatch();
  const AllActions = bindActionCreators(actions, dispatch);
  const { fetchWorkouts, delWorkout, createWorkout } = AllActions;
  console.log('Auth: ', userState)

  useEffect(() => {
    if (userState.token) {
      const workouts = getWorkouts(userState.token)
      toast.promise(workouts, {
        loading: 'Loading',
        success: (data) => {
          console.log(data)
          fetchWorkouts(data)
          return 'Done!'
        },
        error: (err) => `Error: ${err.statusText}`,
      });
    } else {
      navigate('/login')
    }

  },[navigate, userState])
  
  function WorkoutTile({workout}: {workout: Workout}) {
    const dateMade = new Date(workout.created_at).toDateString()
  
    return (
      <Grid item xs={12} sm='auto' padding={2} minWidth='20%' key={workout.id}>
        <Item>
            <Grid item xs paddingRight={0}>
              <Link to={`/workouts/${workout.id}`}>
                <Typography variant="h4">
                  {workout.title}
                </Typography>
                <Typography variant="h5" gutterBottom>
                  {workout.description}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Created: {dateMade}
                </Typography>
              </Link>
            </Grid>
          <Grid item>
            <Button>
              Edit
            </Button>
            <Button onClick={(e) => {
              delWorkout(userState.token, workout.id)
              }}>
              Remove
            </Button>
          </Grid>
        </Item>
      </Grid>
  );
  }
  


  return (
    <>
    <Grid container maxWidth='100%' alignItems='center' justifyContent='center'>
      {workouts ?
      workouts.map(workout => <WorkoutTile workout={workout} key={workout.id}/> )
      : <Loader show />
    }
    </Grid>
    <Outlet />
    </>
  )
}

