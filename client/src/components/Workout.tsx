import { useState, useEffect } from 'react';
import { getExercises } from '../utils/calls';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from './Spinner';
import ExerciseAccordion from './Exercise';
import { Exercise } from '../utils/types'

type WorkoutParams = {
  workoutId: string
}

export default function DetailedWorkout() {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const navigate = useNavigate()
  const userState = useSelector((globalState: RootState) => globalState.user);
  let { workoutId } = useParams<WorkoutParams>();

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
    <div className="exercise-stack">
    {exercises.map((exercise) => <ExerciseAccordion exercise={exercise} key={exercise.id} />)}
    </div>
    :
      <Loader show />
    }
    
    </>
  )

}
