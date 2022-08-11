import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { v4 as uuidv4 } from 'uuid';
import Box from '@mui/material/Box';

import { useAuth0 } from '@auth0/auth0-react';
import {
  RiEmotionNormalLine,
  RiEmotionUnhappyLine,
  RiEmotionSadLine,
  RiEmotionLine,
  RiEmotionHappyLine,
} from 'react-icons/ri';
// const style = {
//   display: 'flex',
//   flexDirection: 'column',
//   objectFit: 'contain',
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: '90%',
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

const marks = [
  {
    value: 0,
    label: <RiEmotionSadLine className="icon" />,
  },
  {
    value: 25,
    label: <RiEmotionUnhappyLine className="icon" />,
  },
  {
    value: 50,
    label: <RiEmotionNormalLine className="icon" />,
  },
  {
    value: 75,
    label: <RiEmotionHappyLine className="icon" />,
  },
  {
    value: 100,
    label: <RiEmotionLine className="icon" />,
  },
];
export function DiaryPopup({ setAnchorEl }) {
  //temporary hard coded patient email until auth0 is done
  const { user, isAuthenticated, isLoading } = useAuth0();
  const pEmail = user.email;
  const [open, setOpen] = useState(false);
  const [overCounter, setOverCounter] = useState([]);

  const handleOpen = () => setOpen(true);

  function handleClose() {
    setOpen(false);
    setAnchorEl(null);
  }

  // const id = 1;
  useEffect(() => {
    async function getOTC() {
      let res = await fetch(
        `https://fiveguysproject.herokuapp.com/otc?email=${pEmail}`
      );
      let json = await res.json();
      console.log('OTC ionfo:', json);
      setOverCounter(json.data);
    }
    if (isAuthenticated && pEmail) {
      getOTC();
    }
  }, [pEmail, isAuthenticated]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Button onClick={handleOpen}>View Diary</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {overCounter.length === 0 ? (
          <></>
        ) : (
          overCounter.map((item) => {
            console.log(item);
            return (
              <Box key={uuidv4()}>
                <Typography>{item.date}</Typography>
                <div>{marks[item.mood].label}</div>
                <Typography>{item.details}</Typography>
              </Box>
            );
          })
        )}
      </Modal>
    </div>
  );
}
