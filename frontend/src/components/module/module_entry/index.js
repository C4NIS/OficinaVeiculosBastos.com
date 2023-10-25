import "./Entry.css"
import Button from "../../common/button"

const Entry = () => {
    return (
    <div className="container_entry">

        <img className="img_entry_main" src="/assets/Personagem_Topo.svg" alt="Personagem_Principal" />
        
        <div className="container_text_entry">

            <h2 className="title_entry">Bastos Mecânica: O Seu Parceiro de Confiabilidade Automotiva!</h2>

            <p className="paragraph_entry">Somos a escolha confiável para todas as suas necessidades de manutenção e reparo de veículos empresariais em São José dos Campos. Com anos de experiência no setor automobilístico e um compromisso inabalável com a excelência, a Bastos é a sua parceira deconfiança quando se trata de manter sua frota empresarial funcionando perfeitamente.</p>

            <div className="container_button_entry">

                <Button>Agendar visita</Button>

            </div>

        </div>
    </div>
    )
}

export default Entry