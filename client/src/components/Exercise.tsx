import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Exercise } from '../utils/types'
import { Button } from '@mui/material';
import React from 'react';
import { updateExercise } from '../utils/calls';

const colours = {
  "start": "#5886e8",
  "progress": "#bdbd39",
  "done": "#0e9920"
}

function statusColour(status: string): string { 
  return colours[status as "start" || "progress" || "done"]
}

export default function ExerciseAccordion({ exercise }: { exercise: Exercise })  {
  const [status, setStatus] = useState(exercise.status)

  let statusButton = (status: string) => {
    const handleStatusPress = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      switch (status) {
        case "finish":
          updateExercise(exercise)
          setStatus("done")          
        break
        case "start":

        break
      }

    }


    switch (status) {
      case "done":
        return (
          <Button variant="text" disabled className="exercise-status">
            Complete
          </Button>
        )
      case "progress":
        return (
          <Button variant="contained" onClick={handleStatusPress} className="exercise-status">
            Finish
          </Button>
        )
      case "start":
        return (
          <Button variant="contained" onClick={handleStatusPress} className="exercise-status">
            Start
          </Button>
        )
      default:
      break;
    }
  }

  return (
    <div className="exercise-gap">
      <Accordion sx={{backgroundColor: statusColour(status)}} className="exercise-start">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="exercise-accordion">
          <Typography variant='h3' sx={{ width: '100%', flexShrink: 0, textAlign: 'center' }}>
            {exercise.name}
          </Typography>
          </div>
          {statusButton(status)}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {exercise.description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}


