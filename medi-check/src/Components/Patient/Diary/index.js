//
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Slider from '@mui/material/Slider';
import {
    RiEmotionNormalLine,
    RiEmotionUnhappyLine,
    RiEmotionSadLine,
    RiEmotionLine,
    RiEmotionHappyLine,
} from 'react-icons/ri';
import './diary.css';
import { ImBook } from 'react-icons/im/';

//temporary hard coded patient email until auth0 is done
const pEmail = 'rsmith123@email.com';

const style = {
    display: 'flex',
    flexDirection: 'column',
    objectFit: 'contain',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const marks = [
    {
        value: 0,
        label: <RiEmotionSadLine className='icon' />,
    },
    {
        value: 25,
        label: <RiEmotionUnhappyLine className='icon' />,
    },
    {
        value: 50,
        label: <RiEmotionNormalLine className='icon' />,
    },
    {
        value: 75,
        label: <RiEmotionHappyLine className='icon' />,
    },
    {
        value: 100,
        label: <RiEmotionLine className='icon' />,
    },
];

export function DiaryModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const date = new Date();
    const today = date.toLocaleDateString();
    const [entry, SetEntry] = useState({
        mood: 50,
        details: '',
        date: today,
    });

    function handleText(e) {
        SetEntry({ ...entry, details: e.target.value });
    }

    function handleSlider(e) {
        SetEntry({ ...entry, mood: e.target.value });
    }

    function handleSubmit() {
        postDiaryEntry();
        handleClose();
    }
    // const id = 1;

    async function postDiaryEntry() {
        const db_url = `https://fiveguysproject.herokuapp.com/diary/${pEmail}`;
        const value = entry.mood / 25;
        const newPost = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...entry, mood: value }),
        };
        const res = await fetch(db_url, newPost);
        console.log(res);
    }

    return (
        <div>
            <Button onClick={handleOpen}>
                <ImBook
                    style={{
                        width: '4em',
                        height: '4em',
                        color: '#1976d2',
                    }}
                />
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box sx={style}>
                    <button id='close' onClick={handleClose}>
                        x
                    </button>
                    <Typography
                        style={{}}
                        id='modal-modal-title'
                        variant='h2'
                        component='h2'
                    >
                        Diary
                    </Typography>
                    <Typography>{today}</Typography>
                    <Typography
                        id='modal-modal-title'
                        variant='h6'
                        component='h2'
                    >
                        How are you feeling today?
                    </Typography>
                    <Box sx={{ width: '100%' }}>
                        <Slider
                            aria-label='Restricted values'
                            defaultValue={50}
                            step={null}
                            marks={marks}
                            getAriaValueText={marks.label}
                            onChange={handleSlider}
                        />
                    </Box>
                    <Typography
                        id='side-effects-title'
                        variant='h6'
                        component='h2'
                    >
                        Side Effects/Mood/Symptoms
                    </Typography>
                    <textarea
                        style={{
                            resize: 'none',
                            height: '10vh',
                            width: '100%',
                        }}
                        onChange={handleText}
                    ></textarea>

                    <button
                        style={{ alignSelf: 'center' }}
                        onClick={handleSubmit}
                    >
                        Submit entry
                    </button>
                </Box>
            </Modal>
        </div>
    );
}
