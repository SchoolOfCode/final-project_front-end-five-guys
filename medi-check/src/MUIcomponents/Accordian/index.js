//
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { v4 as uuidv4 } from 'uuid';
import './accordian.css';
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions({ drugArray }) {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  // console.log('ac', drugArray);

  function sortByStatus(strOne, strTwo) {
    const nameOne = strOne.toLowerCase();
    const nameTwo = strTwo.toLowerCase();

    if (nameOne > nameTwo) {
      return 1;
    }
    if (nameOne < nameTwo) {
      return -1;
    }
    return 0;
  }
  return (
    <section className='accordian-container' key={uuidv4()}>
      {drugArray
        .sort((a, b) => {
          return b.interactionInfo.length - a.interactionInfo.length;
        })
        .sort((a, b) => {
          return sortByStatus(a.status, b.status);
        })
        .map((item, index) => {
          return (
            <Accordion
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              key={uuidv4()}
              id={item.status}
            >
              <AccordionSummary
                aria-controls={`panel${index}d-content`}
                id={`panel${index}d-header`}
                key={uuidv4()}
              >
                {/* Here we need to append the doctor prescription info in */}
                {item.interactionInfo.length === 0 ? (
                  <div className='noInteraction'></div>
                ) : (
                  <div className='interaction'>A</div>
                )}
                <Typography>
                  {item.drug} {item.drugInfo} {item.status}
                </Typography>
              </AccordionSummary>
              <AccordionDetails key={uuidv4()}>
                <div className='msg' key={uuidv4()}>
                  <div style={{ fontWeight: 'bold' }}>
                    Doctor's note: {item.message ? item.message : 'None'}
                  </div>
                  {item.interactionInfo.map((item) => {
                    return (
                      <div key={uuidv4()}>
                        <div key={uuidv4()}>
                          {' '}
                          Interaction between:{' '}
                          {item.drugs.reduce(
                            (prevDrug, currDrug) =>
                              prevDrug.name + '+' + currDrug.name
                          )}
                        </div>
                        <div>{item.description}</div>
                      </div>
                    );
                  })}
                </div>
              </AccordionDetails>
            </Accordion>
          );
        })}
    </section>
  );
}
