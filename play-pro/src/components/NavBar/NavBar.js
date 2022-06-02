import './NavBar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
import CartWidget from '../CartWidget/CartWidget';
import linksMenuProducts from '../../utils/categoriesMock';

const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <AppBar className="nav-bar" position="static">
            <Toolbar className="nav-toolbar">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Button>
                        <Link className="brand" to="/"><p>Play<span>Pro.</span></p></Link>
                    </Button>
                </Typography>
                <CartWidget />
            </Toolbar>
            <div className="links-container">
                <ul className="links">
                    <li>
                        <Button
                            disableRipple variant="text"
                            sx={{ fontSize: 15 }}
                        >
                            <Link className="button-link" to="/">Inicio</Link>
                        </Button>
                    </li>
                    <li>
                        <span>|</span>
                    </li>
                    <li>
                        <Button
                            disableRipple 
                            variant="text" 
                            sx={{ fontSize: 15, color: 'black'}}
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            Productos
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            {linksMenuProducts.map( (cat) => {
                                return(
                                    <MenuItem 
                                        className="category-buttons-container"
                                        onClick={handleClose}
                                        disableRipple 
                                        variant="text" 
                                        sx={{ fontSize: 15}}
                                    >
                                        <Link 
                                            className="category-buttons" 
                                            to={`/category/${cat}`}>{cat}
                                        </Link>
                                    </MenuItem>
                                )    
                            })}
                        </Menu>
                        {/* <Button className="button-products" disableRipple variant="text" sx={{ fontSize: 15, color: "black" }}>Productos
                            <ul className="sub-menu-products">
                                <li>
                                    <Button 
                                        disableRipple 
                                        variant="text" 
                                        sx={{ fontSize: 15 }}
                                    >
                                        <Link className="button-link" to="/category/Padel">Padel</Link>
                                    </Button>
                                </li>
                                <li>
                                    <Button 
                                        disableRipple 
                                        variant="text" 
                                        sx={{ fontSize: 15 }}
                                    >
                                        <Link className="button-link" to="/category/Futbol">Futbol</Link>
                                    </Button>
                                </li>
                                <li>
                                    <Button 
                                        disableRipple 
                                        variant="text" 
                                        sx={{ fontSize: 15 }}
                                    >
                                        <Link className="button-link" to="/category/Tenis">Tenis</Link>
                                    </Button>
                                </li>
                                <li>
                                    <Button 
                                        disableRipple 
                                        variant="text" 
                                        sx={{ fontSize: 15 }}
                                    >
                                        <Link className="button-link" to="/category/Basquet">Basquet</Link>
                                    </Button>
                                </li>
                                <li>
                                    <Button 
                                        disableRipple 
                                        variant="text" 
                                        sx={{ fontSize: 15 }}
                                    >
                                        <Link className="button-link" to="/category/Voley">Voley</Link>
                                    </Button>
                                </li>
                            </ul>
                        </Button> */}
                    </li>
                    <li>
                        <span>|</span>
                    </li>
                    <li>
                        <Button
                            disableRipple variant="text"
                            sx={{ fontSize: 15 }}
                        >
                            <Link className="button-link" to="/contact">Contacto</Link>
                        </Button>
                    </li>
                    <li>
                        <span>|</span>
                    </li>
                    <li>
                        <Button
                            disableRipple variant="text"
                            sx={{ fontSize: 15 }}
                        >
                            <Link className="button-link" to="/frequentlyAskedQuestions">Preguntas Frecuentes</Link>
                        </Button>
                    </li>
                </ul>
            </div>
        </AppBar>
    )
}

export default NavBar

