import './Localization.css'
import Button from '../../common/button'

const Localization = () => {
    return (
        <div className="container_map">

            <iframe title="Mapa" className="img_localization" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.564483449333!2d-45.9114226850216!3d-23.19363398486915!2m3!1f0!2f39.99999857731442!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xad6b2d6a5f7b0d7%3A0x9c6a1d5c8b3d6a8f!2sR.%20dos%20Pinheiros%2C%20123%20-%20Jardim%20S%C3%A3o%20Dimas%2C%20S%C3%A3o%20Jos%C3%A9%20dos%20Campos%20-%20SP%2C%2012210-130!5e0!3m2!1spt-BR!2sbr!4v1623346369491!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy"></iframe>

            <div className="container_texts_localization">

                <h3 className="title_localization" >Localização</h3>

                <p className="paragrafh_txt_localization" >A Bastos Mecânica é uma oficina mecânica especializada em manutenção e reparo de veículos empresariais. Nossa equipe de profissionais altamente qualificados e experientes está sempre pronta para ajudar a manter sua frota em perfeitas condições. A Bastos Mecânica é a sua parceira de confiança quando se trata de manter sua frota empresarial funcionando perfeitamente.</p>

                <p className="sub_paragrafh_localization" >Estamos localizados na Rua dos Pinheiros, 123, São José dos Campos - SP.</p>

                <div className="container_button_localization">
                    <Button>Agendar sua visita</Button>
                </div>

            </div>
        </div>

    )
}

export default Localization;