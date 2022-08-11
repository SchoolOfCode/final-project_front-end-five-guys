import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { ImBook } from 'react-icons/im/';
import { DiaryModal } from '../Diary';
import DiaryDialog from '../../../MUIcomponents/DiaryDialog';
import { useAuth0 } from '@auth0/auth0-react';

export default function DiaryMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [diary, setDiary] = React.useState([]);
  const [open2, setOpen2] = React.useState(false);
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
  }, [user.email, isAuthenticated]);
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
        <DiaryDialog
          open={open}
          setOpen={setOpen2}
          setAnchorEl={setAnchorEl}
          diary={diary.sort((a, b) => {
            return a.diary_id > b.diary_id;
          })}
        ></DiaryDialog>
        <DiaryModal setAnchorEl={setAnchorEl} />
      </Menu>
    </div>
  );
}
