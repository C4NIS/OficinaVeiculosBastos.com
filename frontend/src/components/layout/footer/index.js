import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <h2 className="footer__title">Links úteis</h2>
                <ul className="footer__links">
                    <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">Home</a></li>
                    <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">Serviços</a></li>
                    <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">Contato</a></li>
                </ul>
            </div>
            <div className="footer__container">
                <h2 className="footer__title">Contato</h2>
                <ul className="footer__contact">
                    <li><i className="fas fa-phone"></i> (11) 1234-5678</li>
                    <li><i className="fas fa-envelope"></i> contato@oficinaveiculosbastos.com</li>
                    <li><i className="fas fa-map-marker-alt"></i> Rua dos Carros, 123 - São Paulo/SP</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;