import './footer.css'

const Footer = () => {

    return <footer className='footer'>
        <div className='footer__iconos'> 
        <a href='https://github.com/rod662' target='blank'><i className="bi bi-github"></i></a>
        <a href='https://www.linkedin.com/in/rodrigo-gomez-59a1a5291/' target='blank'><i className="bi bi-linkedin"></i></a>
        <i className="bi bi-instagram"></i>
        </div>
        <div className='footer__logo'>
        <img src="/img/lb.png" alt='logo'/>
        </div>
        <div className='footer__texto'>
            <h3>Desarrollado por Rodrigo Gómez</h3>
        </div>

    </footer>
}

export default Footer;