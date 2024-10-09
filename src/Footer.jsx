import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './footer.css';

export default function Footer() {
    const navigate = useNavigate();

    const handleContact = () => {
        navigate('/Contact')
    }

    const handleAbout = () => {
        navigate('/About')
    }

    return (
            <footer className="myFooter">
                <Button onClick={handleContact}>contact me</Button>
                <br />
                <Button onClick={handleAbout}>about</Button>
                <p>Powered by REACT</p>
            </footer>
    )
}