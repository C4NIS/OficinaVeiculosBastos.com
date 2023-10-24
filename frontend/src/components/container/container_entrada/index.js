import './style.css'
import Button from '../../common/button'

const ContainerEntrada = () => {
    return (
    <div className="container_principal">

        <img className="personagem_principal" src="/assets/Personagem_Topo.svg" alt="Personagem_Principal" />

        <div className="container_textos_principais">

            <h2>Bastos Mecânica: O Seu Parceiro de Confiabilidade Automotiva!</h2>

            <p>Somos a escolha confiável para todas as suas necessidades de manutenção e reparo de veículos empresariais em São José dos Campos. Com anos de experiência no setor automobilístico e um compromisso inabalável com a excelência, a Bastos é a sua parceira deconfiança quando se trata de manter sua frota empresarial funcionando perfeitamente.</p>

            <div className="container_botao_principal">

                <Button>Agendar sua visita</Button>

            </div>

        </div>

    </div>
    )
}

export default ContainerEntrada()