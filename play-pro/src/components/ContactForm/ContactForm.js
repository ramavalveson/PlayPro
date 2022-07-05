import './ContactForm.css';
import { TextField, TextareaAutosize, Button } from '@mui/material';
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import db from '../../utils/firebaseConfig';
import AlertMessage from '../Alert/Alert';

const ContactForm = () => {
    const [success, setSuccess] = useState()

    const [formComplete, setFormComplete] = useState(true)

    const handleSubmit = (e) => {
        if (formValue.name !== '' && formValue.phone !== '' && formValue.email !== '' && formValue.question !== '') {
            e.preventDefault();
            saveData({ formValue })
            setFormComplete(true)
        } else {
            e.preventDefault()
            setSuccess()
            setFormComplete(false)
        }
    }

    const [formValue, setFormValue] = useState({
        name: '',
        phone: '',
        email: '',
        question: ''
    })

    const handleChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }

    const saveData = async (newQuestion) => {
        const questionFirebase = collection(db, 'questions')
        const questionDoc = await addDoc(questionFirebase, newQuestion)
        setSuccess(questionDoc.id)
    }

    return (
        <div className="contact-form-container">
            <h2 className="contact-form-title">Realizá Tu Consulta Aquí</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <TextField
                    className="input-form-contact"
                    id="outlined-basic"
                    name="name"
                    label="Nombre y Apellido"
                    variant="outlined"
                    value={formValue.name}
                    onChange={handleChange}
                    margin="dense"
                />
                <TextField
                    className="input-form-contact"
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
                    className="input-form-contact"
                    id="outlined-basic"
                    name="email"
                    label="Mail"
                    value={formValue.email}
                    variant="outlined"
                    onChange={handleChange}
                    margin="dense"
                    sx={{ marginBottom: 2 }}
                />
                <TextareaAutosize
                    className="input-form-contact"
                    minRows={6}
                    aria-label="minimum height"
                    placeholder="Escribe tu consulta aquí:"
                    name="question"
                    value={formValue.question}
                    onChange={handleChange}
                />
                <Button variant="contained" type="submit" sx={{ marginTop: 2 }}>Enviar</Button>
                {success ? (
                    <div className="question-success-container">
                        <p className="question-success">Tu consulta se ha enviado con éxito!</p>
                        <p className="question-success-number">Código de Consulta: <span>{success}</span></p>
                    </div>

                ) : (
                    ''
                )
                }
                {formComplete === false && (
                    <div className="alert-form-error">
                        <AlertMessage
                            type={'error'}
                            message={'Completa el formulario poder enviar tu consulta.'}
                        />
                    </div>
                )}
            </form>
        </div>
    )
}

export default ContactForm