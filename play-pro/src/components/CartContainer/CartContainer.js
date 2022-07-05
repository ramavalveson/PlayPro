import './CartContainer.css';
import { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';
import CartItems from '../CartItems/CartItems'
import Modal from '../Modal/Modal';
import db from '../../utils/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import AlertMessage from '../Alert/Alert';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const CartContainer = () => {
    const { cartListItems, clearCart, totalCartPrice } = useContext(CartContext)

    const [showModal, setShowModal] = useState(false)

    const [success, setSuccess] = useState()

    const [formComplete, setFormComplete] = useState(true)

    const navigate = useNavigate()

    const finishOrder = () => {
        navigate('/')
    }

    const [formValue, setFormValue] = useState({
        name: '',
        phone: '',
        email: ''
    })

    const [order, setOrder] = useState({
        buyer: {},
        items: cartListItems.map( item => {
            return {
                id: item.id,
                title: item.title,
                price: item.price,
                quantity: item.quantity
            }
        } ),
        total: totalCartPrice()
    })

    const handleSubmit = (e) => {
        if(formValue.name !== '' && formValue.phone !== '' && formValue.email !== '') {
            e.preventDefault()
            setOrder({...order, buyer: formValue})
            saveData({...order, buyer: formValue})
            setFormComplete(true)
        }else {
            e.preventDefault()
            setFormComplete(false)
        }
    }

    const handleChange = (e) => {
        setFormValue({...formValue, [e.target.name]: e.target.value})
    }

    const saveData = async (newOrder) => {
        const orderFirebase = collection(db, 'orders')
        const orderDoc = await addDoc(orderFirebase, newOrder)
        setSuccess(orderDoc.id)
        clearCart()
    }

    const openForm = () => {
        setShowModal(true)
        setFormComplete(true)
    }

    return (
        <div>
            <h2 className="cart-title">Carrito de Compras</h2>
            <div className="cart-content">
                {cartListItems.length === 0 &&
                    <div className="cart-empty">
                        <LocalMallIcon fontSize="large" />
                        <p>Tu Carrito Está Vacío!</p>
                    </div>
                }
                <CartItems />
            </div>
            {cartListItems.length !== 0 && (
                <div>
                    <div className="cart-accions-button-container">
                        <Button
                            variant="contained"
                            onClick={() => openForm()}
                        >
                            Comprar Ahora
                        </Button>
                        <Button
                            onClick={() => clearCart()}
                            variant="contained"
                            color="error"
                        >
                            Vaciar Carrito
                        </Button>
                    </div>
                    <p className="total-cart-price">Total: ${totalCartPrice()}</p>
                </div>
            )}
            <div className="continue-shopping-button-container">
                <Button
                    variant="contained"
                    color="success"
                >
                    <Link to="/" className="continue-shopping-link">Continuar Comprando</Link>
                </Button>
            </div>
            <Modal 
                title={success ? 'Compra exitosa' : 'Formulario de contacto'} 
                open={showModal} 
                handleClose={() => setShowModal(false)}
            >
                {success ? (
                    <div className="order-success">
                        <p>La orden se genero con exito!</p>
                        <p>Numero de orden: <span className="order-number">{success}</span></p>
                        <Button onClick={finishOrder} variant="contained">Aceptar</Button>
                    </div>
                ) : (
                    <form className="form-contact" onSubmit={handleSubmit}>
                        <TextField
                            id="outlined-basic"
                            name="name"
                            label="Nombre y Apellido"
                            variant="outlined"
                            value={formValue.name}
                            onChange={handleChange}
                            margin="dense"
                        />
                        <TextField
                            id="outlined-basic"
                            name="phone"
                            label="Telefono"
                            variant="outlined"
                            value={formValue.phone}
                            onChange={handleChange}
                            margin="dense"
                            type='text'
                        />
                        <TextField
                            id="outlined-basic"
                            name="email"
                            label="Mail"
                            value={formValue.email}
                            variant="outlined"
                            onChange={handleChange}
                            margin="dense"
                        />
                        <Button variant="contained" type="submit" sx={{marginTop: 2}}>Enviar</Button>
                        {formComplete === false && (
                            <div className="alert-form-error">
                                <AlertMessage 
                                    type={'error'} 
                                    message={'Completa el Formulario para Finalizar la Compra.'} 
                                />
                            </div>
                        )}
                    </form>
                )}
            </Modal>
        </div>
    )
}

export default CartContainer