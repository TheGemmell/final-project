import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Exercise } from '../utils/types'

const colours = {
  "start": "#5886e8",
  "progress": "#bdbd39",
  "done": "#0e9920"
}

function statusColour(status: string): string { 
  return colours[status as "start" || "progress" || "done"]
}

export default function ExerciseAccordion({ exercise }: { exercise: Exercise }) {
  return (
    <div className="exercise-gap">
      <Accordion sx={{backgroundColor: statusColour(exercise.status)}} className="exercise-start">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="exercise-accordion">
          <Typography variant='h3' sx={{ width: '100%', flexShrink: 0, textAlign: 'center' }}>
            {exercise.name}
          </Typography>
          {/* Don't ask. */}
          </div>
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


