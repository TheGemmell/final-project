import { Button, Backdrop, Box, TextField, Grid, Link } from '@mui/material';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { createWorkout } from '../utils/calls';

export default function CreateWorkoutForm({user, submitWork}: {user: any, submitWork: Function}): JSX.Element {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleClose()
    const data = new FormData(event.currentTarget);
    const workoutData = {
      workout: {
        title: data.get('name'),
        description: data.get('description'),
        date: new Date(),
      }
    };
    const workout = createWorkout(user.token, workoutData)
    toast.promise(workout, {
      loading: 'Saving...',
      success: (data) => {
        console.log(data)
        submitWork(data)
        return 'Workout Successfully Created!'
      },
      error: (err) => err.statusText
    })
  }

  const WorkoutForm = () => {
    return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, boxShadow: 'black 0 0 12px 2px', padding: '20px', backgroundColor: 'white' }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        label="Workout Name"
        name="name"
        autoFocus
      />
      <TextField
        margin="normal"
        fullWidth
        name="description"
        label="Workout Description"
        type="description"
        id="description"
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Create
      </Button>
      <Grid container>
        <Grid item>
          <Button onClick={handleClose}>
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
  }

  return (
    <div>
      <Button onClick={handleToggle}>Create</Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <WorkoutForm />
      </Backdrop>
    </div>
  );
}