import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { v4 as uuidv4 } from 'uuid';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function NestedModal({ open, setOpen, results }) {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => {
  //   setOpen(true);
  // };
  const handleClose = () => {
    setOpen(false);
  };
  console.log('restul', results);
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={(event, reason) => {
          if (reason !== 'backdropClick') {
            handleClose();
          }
        }}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <button onClick={handleClose}>X</button>
          {typeof results[0] === 'string' && (
            <div>
              <h4>{results[0]}</h4>
            </div>
          )}
          {typeof results[0] !== 'string' &&
            results.map((item) => {
              console.log(item);
              return (
                // { typeof item === 'string' ? <div> <h4>{item}</h4></div>: <div></div>}
                <div key={uuidv4()}>
                  <h4>
                    {item.minConcept[0].name} + {item.minConcept[1].name}
                  </h4>
                  {item.interactionPair[0].description}
                </div>
              );
            })}
        </Box>
      </Modal>
    </div>
  );
}
