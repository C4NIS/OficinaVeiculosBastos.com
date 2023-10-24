import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">

                <div className="footer__row">

                    <div className="footer__col">
                        <h3 className="footer__title">Contato</h3>
                        <ul className="footer__list">
                            <li className="footer__item"><a href="tel:+5511999999999" className="footer__link">+55 (11) 99999-9999</a></li>
                            <li className="footer__item"><a href="mailto:contato@oficinaveiculosbastos.com" className="footer__link">contato@oficinaveiculosbastos.com</a></li>
                            <li className="footer__item"><a href="https://goo.gl/maps/xxxxxxxxxxxx" className="footer__link" target="_blank" rel="noopener noreferrer">Rua dos Bobos, nº 0 - São Paulo/SP</a></li>
                        </ul>
                    </div>

                    <div className="footer__col">
                        <h3 className="footer__title">Redes sociais</h3>
                        <ul className="footer__list">
                            <li className="footer__item"><a href="https://www.facebook.com/oficinaveiculosbastos" className="footer__link" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            <li className="footer__item"><a href="https://www.instagram.com/oficinaveiculosbastos" className="footer__link" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li className="footer__item"><a href="https://www.linkedin.com/company/oficinaveiculosbastos" className="footer__link" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="footer__bottom">
                <p className="footer__copy">&copy; 2021 Oficina Veículos Bastos. Todos os direitos reservados. Página de Demonstração</p>
            </div>

        </footer>
    );

}

export default Footer;