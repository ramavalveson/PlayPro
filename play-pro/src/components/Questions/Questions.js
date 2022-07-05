import './Questions.css';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const Questions = () => {
    const [expanded, setExpanded] = useState();

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <h2 className="questions-title">Preguntas Frecuentes</h2>
            <div className="questions-container">
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>¿Cómo hago para cancelar mi pedido?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Para cancelar tu pedido deberás ponerte en contacto con nosotros enviándonos un mail a info@playpro.com.ar
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>¿Cuáles son los medios de pago disponibles?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Podrás abonar tus pedidos con Tarjeta de Crédito o por Mercado Pago a través de Cupones de Pago.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>¿Es seguro pagar con mi tarjeta de crédito en playpro.com.ar?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Sí, es seguro. Entendemos que la seguridad de tu información personal es de suma importancia para vos. Cumplimos con el estándar internacional de protección de datos, para que tu información personal y de tarjeta de crédito, esté protegida de accesos no autorizados.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                        <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>¿Cuánto tiempo tengo para pagar mi pedido a través de cupones de pago?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Tenés hasta 5 días hábiles para realizar el pago de tu pedido. No olvides enviar el comprobante del mismo vía e-mail a info@playpro.com.ar
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                        <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>¿Cómo sé que mi pago fue acreditado?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Una vez que tu pago haya sido acreditado correctamente por administración, recibirás un correo electrónico informándote el número de acreditación y el número de factura correspondiente.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                    <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                        <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>¿Cuáles son las formas de envío?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Envíos a domicilio: Envíos a cualquier punto del país a excepción de la provincia de Tierra del Fuego.

                            Envío Express EN EL DÍA, CIUDAD AUTÓNOMA DE BUENOS AIRES: válido para días hábiles. Es un servicio premium destinado para residentes de CABA. Válido para compras realizadas con tarjeta de crédito. Si el pedido se realiza antes de las 12 hs, llegará ese mismo día. Horario de entrega hasta las 00 hs. Si no al siguiente día hábil. Límite de peso 690 g (equivalente a un calzado).

                            Envío Express EN EL DÍA, 1ER Y 2DO CORDÓN GBA: válido para días hábiles. Es un servicio premium destinado para residentes de 1er y 2do cordón de GBA. Válido para compras realizadas con tarjeta de crédito. Si el pedido se realiza antes de las 12 hs, llegará ese mismo día. Horario de entrega hasta las 00 hs. Si no al siguiente día hábil. Límite de peso 690 g (equivalente a un calzado).

                            Envío Express CÓRDOBA CAPITAL y ROSARIO: válido para días hábiles. Es un servicio premium destinado para residentes de CÓRDOBA CAPITAL. Válido para compras realizadas con tarjeta de crédito. Si el pedido se realiza antes de las 13 hs, llegará al día siguiente. Si no en 48hs. Límite de peso 690 g (equivalente a un calzado).

                            Eco Envío CABA. Tus compras te llega en bici y envueltas en bolsas compostables. Conocé más haciendo click en Sustentabilidad

                            Retiro en sucursal: podés elegir retirar tu pedido en cualquiera de las sucursales Dexter disponibles al momento de realizar tu compra. Buscá la más cercana a tu domicilio en www.dexter.com.ar/sucursales
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                    <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
                        <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>¿Cuál es el costo del envío?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Normal AMBA $519

                            Normal PBA $529

                            Normal CENTRO $529

                            Normal CUYO $529

                            Normal NEA $639

                            Normal NOA $639

                            Normal PATAGONIA $599

                            Express CABA $609

                            Express 1ER CORDÓN GBA $699

                            Express 2DO CORDÓN GBA $799

                            Express CÓRDOBA CAPITAL $699

                            Express ROSARIO $659

                            Eco Envío CABA $539

                            Entrega en sucursal $220
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                    <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
                        <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>¿Cómo se realizan las entregas?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Los pedidos salen de nuestro depósito con bolsas inviolables, al recibir tu compra verificá que el envoltorio no esté adulterado. En el caso que percibas algún problema no aceptes la recepción del mismo.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                    <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
                        <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>¿Puede recibir mi pedido otra persona?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Puede recibirlo cualquier persona, mayor de 18 años, que se encuentre en el domicilio acordado, presentando documento de identidad.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                    <AccordionSummary aria-controls="panel10d-content" id="panel10d-header">
                        <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>¿En qué días y horarios entregan los pedidos?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Las entregas de pedidos se realizan de lunes a viernes de 8 hs a 00 hs. No se entregan pedidos los fines de semana ni los feriados.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className="contact-link-container">
                <p>Ante cualquier otra consulta podés contactarte con nosotros <span><Link to="/contact">Aquí</Link></span> .</p>
            </div>
        </div>
    );
}

export default Questions