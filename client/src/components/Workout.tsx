import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Item from './Item';
import { Stack } from '@mui/material';
import { getExercises } from '../utils/calls';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from './Spinner';

type Exercise = {
    created_at: string,
    updated_at: string
    id: number,
    name: string,
    description: string,
    sets: number,
    status: string,
    weight: number,
    workout_id: number,
}


export default function DetailedWorkout(){
    const [exercises, setExercises] = useState<Exercise[]>([]);
    const navigate = useNavigate()
    const userState = useSelector((globalState:RootState) => globalState.user);
    let { workoutId } = useParams();
    let workId: number
        
    if (workoutId) {
        workId = parseInt(workoutId)
    }

    function makeSetBoxes(exercise:Exercise) {
        for (let i = 0; i < exercise.sets; i++) {

        }
        // return (
    
        // )
    }
    
    useEffect(() => {
      if (userState.token) {
        const exercises = getExercises(userState.token, workId)
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
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[navigate, userState])


    return (
        <Stack margin={1.5} spacing={1.8}>
            {exercises ? exercises.map((exercise) => {
                return (
                    <Item>
                        <h1>{exercise.name}</h1>
                        <h3>{exercise.description}</h3>
                        <h4>{exercise.weight}kg</h4>
                        <h5>{exercise.status}</h5>
                    </Item>
                )
            })
            :
            <Loader show />}
        </Stack>
    )

}
