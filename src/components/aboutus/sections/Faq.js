import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from '@mui/material';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import React, { useState } from 'react';
import SectionTitle from '../SectionTitle';

const faqList = [
  {
    question: 'Question 1',
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
  eget.`,
  },
  {
    question: 'Question 2',
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
  eget.`,
  },
  {
    question: 'Question 3',
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
  eget.`,
  },
  {
    question: 'Question 4',
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
  eget.`,
  },
  {
    question: 'Question 5',
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
  eget.`,
  },
  {
    question: 'Question 6',
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
  eget.`,
  },
];

const Faq = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  let panel = 0;
  return (
    <Grid
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <SectionTitle text="Frequently Asked Questions" dark={true} />
      <Box p={2} m={1}>
        {faqList.map((faq) => {
          panel++;
          const currentPanel = 'panel' + panel;
          return (
            <Accordion
              expanded={expanded === currentPanel}
              onChange={handleChange(currentPanel)}
            >
              <AccordionSummary
                expandIcon={
                  <ArrowForwardIosSharpIcon
                    sx={{ transform: 'rotate(90deg)' }}
                  />
                }
                aria-controls={currentPanel + 'd-content'}
                id={currentPanel + 'd-header'}
                sx={{
                  backgroundColor: '#F5F5F5',
                }}
              >
                <Typography fontWeight="bold">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </Grid>
  );
};

export default Faq;
