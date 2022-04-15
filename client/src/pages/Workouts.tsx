import { Box, Grid, Typography, Button } from '@mui/material'
import { useState, useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { getWorkouts } from '../utils/calls'
import Loader from '../components/Spinner'
import toast from 'react-hot-toast'
import Item from '../components/Item'

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
  const [ workouts, setWorkouts ] = useState([])
  const userState = useSelector((globalState:RootState) => globalState.user);
  console.log('Auth: ', userState)
  
  useEffect(() => {
    if (userState.token) {
      const workouts = getWorkouts(userState.token)
      toast.promise(workouts, {
        loading: 'Loading',
        success: (data) => {
          console.log(data)
          setWorkouts(data)
          return 'Done!'
        },
        error: (err) => `Error: ${err.statusText}`,
      });
    } else {
      navigate('/login')
    }

  },[navigate, userState])

  return (
    <>
    <Grid container maxWidth='100%' sm={12} lg={12} alignItems='center' justifyContent='center'>
      {workouts ?
      workouts.map(workout => <WorkoutTile workout={workout}/>)
      : <Loader show />
    }
    </Grid>
    <Outlet />
    </>
  )
}

function WorkoutTile({workout}: {workout: Workout}) {
  const dateMade = new Date(workout.created_at).toDateString()

  return (
    <Grid item xs={12} sm='auto' padding={2} minWidth='20%'>
      <Item>
          <Grid item xs paddingRight={0}>
            <Link to={`/workouts/${workout.id}`}>
              <Typography gutterBottom variant="h4">
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
          <Button>
            Remove
          </Button>
        </Grid>
      </Item>
    </Grid>
);
}
