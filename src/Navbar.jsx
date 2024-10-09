import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import { useNavigate } from 'react-router-dom'
import './navBar.css';

export default function Navbar() {
    const navigate = useNavigate();

    const handleContact = () => {
        navigate('/Contact');
    }

    const handleHome = () => {
        navigate('/');
    }

    const handleAbout = () => {
        navigate('/About')
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: '#16423C' }}>
                <Toolbar>
                    <FaceRetouchingNaturalIcon sx={{ mr: 2, ml: '-10px' }} />
                    <Typography sx={{ flexGrow: 1 }}>
                        <a href="./App.jsx">
                            <Button color='white' className='navBtn' onClick={handleHome}>
                                <p>Todo List</p>
                            </Button>
                        </a>
                    </Typography>
                        <Button color="white" onClick={handleContact}>Contact</Button>
                    <a href="">
                        <Button color="white" onClick={handleAbout}>About</Button>
                    </a>
                    {/* <Brightness3Icon />
                    <BrightnessHighIcon /> */}
                </Toolbar>
            </AppBar>
        </Box>
    )
}