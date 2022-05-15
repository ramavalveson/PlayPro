import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CartWidget from './CartWidget/CartWidget';

const NavBar = () => {
    return (
        <AppBar className="nav-bar" position="static">
            <Toolbar className="nav-toolbar">
                <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <p className="play-pro">Play<span>Pro.</span></p>
                </Typography>
                <CartWidget />
            </Toolbar>
            <div className="links-container">
                <ul className="links">
                    <li>
                        <Button variant="text" sx={{ fontSize: 15 }}>Inicio</Button>
                    </li>
                    <li>
                        <span>|</span>
                    </li>
                    <li>
                        <Button variant="text" sx={{ fontSize: 15 }}>Productos</Button>
                    </li>
                    <li>
                        <span>|</span>
                    </li>
                    <li>
                        <Button variant="text" sx={{ fontSize: 15 }}>Contacto</Button>
                    </li>
                    <li>
                        <span>|</span>
                    </li>
                    <li>
                        <Button variant="text" sx={{ fontSize: 15 }}>Preguntas Frecuentes</Button>
                    </li>
                </ul>
            </div>
        </AppBar>
    )
}

export default NavBar

