import "./Service.css"
import Select from "../../common/select"
import { useState } from "react"

const Service = () => {
    const options = [
        { id: 1, name: 'Reparo de Motores' },
        { id: 2, name: 'Sistemas de Refrigeração'},
        { id: 3, name: 'Reparo de Transmissão' },
        { id: 4, name: 'Sistemas de Freios'},
        { id: 5, name: 'Sistemas de Suspensão'},
        { id: 6, name: 'Eletrônica e Diagnóstico'},

    ];

    const subtitulo = {
        0 : 'Manutenção Preventiva',
        1 : 'Reparo de Motores',
        2 : 'Sistemas de Refrigeração',
        3 : 'Reparo de Transmissão',
        4 : 'Sistemas de Freios',
        5 : 'Sistemas de Suspensão',
        6 : 'Eletrônica e Diagnóstico',
    }

    const paragrafo = {
        0 : 'Realização de verificações regulares, como troca de óleo, substituição de filtros, inspeção de freios e verificação de sistemas elétricos para evitar problemas futuros.',
        1 : 'Diagnóstico e reparo de problemas do motor, incluindo reparo de componentes do motor, substituição de juntas e vedantes, e ajustes de desempenho.',
        2 : 'Reparo e manutenção dos sistemas de resfriamento, incluindo radiadores, bombas dágua e termostatos.',
        3 : 'Reparo e substituição de componentes da transmissão, como embreagens, caixas de câmbio e diferenciais.',
        4 : 'Manutenção e reparo dos sistemas de freios, incluindo substituição de pastilhas de freio, tambores, discos e verificação do sistema hidráulico.',
        5 : 'Reparo e manutenção dos sistemas de suspensão, incluindo molas, amortecedores, barras estabilizadoras e sistemas de direção.',
        6 : 'Diagnóstico e reparo de sistemas eletrônicos, como sistemas de injeção de combustível, diagnóstico de falhas, sensores e sistemas de controle de emissões.', 
    }

    const [selectedOption, setSelectedOption] = useState(0);
    const [imageSrc, setImageSrc] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
        
        const selectedValue = parseInt(event.target.value, 10);
        setSelectedOption(selectedValue);

        if (selectedValue === 0) {
            setImageSrc('/assets/caminhao.svg');
        }else if (selectedValue === 1) {
            setImageSrc('/assets/Motor.svg');
        }else if (selectedValue === 2) {
            setImageSrc('/assets/Refrigeracao.svg');
        }else if (selectedValue === 3) {
            setImageSrc('/assets/Transmissão.svg');
        }else if (selectedValue === 4) {
            setImageSrc('/assets/Freio.svg');
        }else if (selectedValue === 5) {
            setImageSrc('/assets/Suspenção.svg');
        }else if (selectedValue === 6) {
            setImageSrc('/assets/Eletrico.svg');
        }else {
            setImageSrc('/assets/caminhao.svg'); 
        }

    };

    return (
        <div className="container_servico">
                
        <h1 className="title_service">Conheça Nossos Serviços</h1>
        
        {imageSrc && <img className="imagem_servico" src={process.env.PUBLIC_URL + imageSrc} alt="Simbolo_de" />}

        <div className="container_interativo_servico">

            <div className="container_textos_servico">

                <h4>{subtitulo[selectedOption]}</h4>

                <p className="Subtitulo_servico">{paragrafo[selectedOption]}</p>

            </div>
            
            <div className="container_select">
                <Select options={options} value={selectedOption} onChange={handleSelectChange}>Manutenção Preventiva</Select>
            </div>

        </div>
        
    </div>
    )
}

export default Service;