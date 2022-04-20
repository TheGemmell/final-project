import { useState, useEffect } from 'react';
import { Grid, Box, Accordion } from '@mui/material/';
import Typography from '@mui/material/Typography';
import Item from './Item';
import { Stack } from '@mui/material';
import { getExercises } from '../utils/calls';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Params, useNavigate, useParams } from 'react-router-dom';
import Loader from './Spinner';
import Exercise from './Exercise';

type Exercise = {
  created_at: string,
  updated_at: string,
  id: number,
  name: string,
  description: string,
  sets: number,
  status: string,
  weight: number,
  workout_id: number,
}

type WorkoutParams = {
  workoutId: string
}

export default function DetailedWorkout() {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const navigate = useNavigate()
  const userState = useSelector((globalState: RootState) => globalState.user);
  let { workoutId } = useParams<WorkoutParams>();


  function makeSetBoxes(exercise: Exercise) {
    for (let i = 0; i < exercise.sets; i++) {

    }
    // return (

    // )
  }

  useEffect(() => {
    if (userState.token && workoutId) {
      const exercises = getExercises(userState.token, workoutId)
      toast.promise(exercises, {
        loading: 'Loading',
        success: (data) => {
          console.log(data)
          setExercises(data.exercises)
          return 'Done!'
        },
        error: (err) => `Error: ${err.statusText}`,
      });
    } else {
      navigate('/login')
    }

  }, [userState, workoutId])


  return (
    <>
    {exercises ? 
    <Accordion>
    {exercises.map((exercise) => <Exercise exercise={exercise} />)}
    </Accordion>
    :
      <Loader show />
    }
    
    </>
  )

}
