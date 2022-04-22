import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Exercise } from '../utils/types'

export default function ExerciseAccordion({ exercise }: { exercise: Exercise }) {
  return (
    <div className="exercise-gap">
      <Accordion sx={{}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="exercise-accordion">
          <Typography sx={{ width: '100%', flexShrink: 0, textAlign: 'center' }}>
            {exercise.name}
          </Typography>
          <br/>
          <Typography sx={{ color: 'text.secondary' }}>
            {exercise.description}
          </Typography>
            </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
