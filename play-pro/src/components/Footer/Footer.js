import './Footer.css';

const Footer = () => {
    return(
        <div className="footer">
            <h3 className="footer-title">Seguinos en Nuestras Redes</h3>
            <div className="footer-container">
                <div>
                    <img src="../icono-instagram.png" alt="imagen instagram" />
                    <p>PlayPro.deportes</p>
                </div>
                <div>
                    <img src="../icono-facebook.png" alt="imagen facebook" />
                    <p>PlayPro.deportes</p>
                </div>
                <div>
                    <img src="../icono-twitter.png" alt="imagen twitter" />
                    <p>PlayPro.deportes</p>
                </div>
            </div>
        </div>
    )
}

export default Footer