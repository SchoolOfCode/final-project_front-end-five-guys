import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { ImBook } from 'react-icons/im/';
import { DiaryModal } from '../Diary';
import { useAuth0 } from '@auth0/auth0-react';
import { DiaryPopup } from './dialog';

export default function DiaryMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [submitted, setSubmitted] = React.useState(false);

  const [diary, setDiary] = React.useState([]);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  React.useEffect(() => {
    async function getPatientDiary() {
      let res = await fetch(
        `https://fiveguysproject.herokuapp.com/diary?email=${user.email}`
      );
      let json = await res.json();
      // console.log('patients diary, needs to be saved in state', json);
      setDiary(json.data);
    }
    if (user.email && isAuthenticated) {
      getPatientDiary();
    }
  }, [user.email, isAuthenticated, submitted]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div id="account-menu">
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <ImBook
          style={{
            width: '4em',
            height: '4em',
          }}
        />
      </Button>
      <Menu
        id="basic-menu"
        sx={{ display: 'flex', textAlign: 'center' }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <DiaryPopup setAnchorEl={setAnchorEl} diary={diary}></DiaryPopup>
        <DiaryModal
          setAnchorEl={setAnchorEl}
          setSubmitted={setSubmitted}
          submitted={submitted}
        />
      </Menu>
    </div>
  );
}
