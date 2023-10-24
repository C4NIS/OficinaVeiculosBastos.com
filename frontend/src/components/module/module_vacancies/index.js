import './Vacancies.css'
import Button from '../../common/button'

const Vacancies = () => {
    return (
    <div className="container_vagas">

        <img className="personagem_baixo" src="/assets/Personagem_Baixo.svg" alt="Personagem_Vagas" />

        <div className="container_textos_vagas">

            <h3>Quer trabalhar em nossa empresa?</h3>

            <p>A Bastos Mecânica está em busca de novos talentos para se juntarem à nossa equipe! Se você é apaixonado por carros e deseja trabalhar em uma empresa que valoriza seus funcionários e oferece oportunidades de crescimento, essa é a sua chance. Temos vagas abertas para mecânicos, eletricistas e outros profissionais da área automotiva. Não perca essa oportunidade de fazer parte de uma equipe comprometida com a excelência e a satisfação do cliente. Veja as vagas disponiveis no Linkedin!</p>

            <div className="container_botao_vagas">
                <a href="https://www.linkedin.com/in/isaac4c/"><Button>Ver Vagas</Button></a>
            </div>
        </div>

    </div>
    )
}

export default Vacancies;