import "./Service.css"
import Select from "../../common/select"
import { useState } from "react"

const Service = () => {

    const [selectedOption, setSelectedOption] = useState(0);
    const [imageSrc, setImageSrc] = useState('');

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
        0 : 'A manutenção preventiva é um conjunto de ações que visam evitar falhas e problemas em equipamentos e sistemas antes que eles ocorram. Essas ações incluem inspeções regulares, troca de peças e lubrificação, entre outras atividades. A manutenção preventiva é importante para garantir a segurança, prolongar a vida útil dos equipamentos e reduzir custos com reparos e substituições. Além disso, ela ajuda a evitar paradas não programadas e a manter a eficiência e produtividade dos equipamentos e sistemas.',
        1 : 'O reparo de motores é um processo essencial na manutenção de veículos e máquinas. Envolve a restauração de componentes internos e externos do motor para garantir seu funcionamento eficiente e confiável. Isso inclui a substituição de peças desgastadas, reparo de vazamentos, ajustes de válvulas e muito mais. O reparo de motores é realizado por profissionais qualificados, utilizando ferramentas e equipamentos específicos, visando prolongar a vida útil do motor e garantir um desempenho otimizado. É uma prática fundamental para a segurança e a eficiência dos veículos e equipamentos que dependem desses motores.',
        2 : "O reparo em um sistema de refrigeração de um carro é uma intervenção crucial para manter o motor funcionando de forma eficiente e evitar o superaquecimento. Este sistema é composto por radiadores, bomba d'água, termostato e mangueiras, que trabalham em conjunto para dissipar o calor gerado pelo motor. Quando ocorrem vazamentos, obstruções ou falhas nos componentes, o sistema de resfriamento pode deixar de funcionar adequadamente, o que pode resultar em danos significativos ao motor.",
        3 : "O reparo de transmissão é uma parte fundamental da manutenção de um veículo. A transmissão é responsável por transmitir a potência gerada pelo motor para as rodas do veículo, permitindo que ele se mova. Quando problemas surgem na transmissão, como ruídos estranhos, dificuldades nas trocas de marcha ou vazamentos de fluido, é crucial abordá-los prontamente. Os reparos podem variar desde ajustes menores até a substituição completa da transmissão, e a realização dessas intervenções por profissionais qualificados é essencial para garantir a segurança e o desempenho do veículo.",
        4 : "Os sistemas de freios são essenciais para a segurança de um veículo. Eles permitem a desaceleração e parada do veículo quando necessário. Quando os freios apresentam problemas, como desgaste das pastilhas, vazamentos de fluido ou perda de eficiência, é imperativo realizar reparos imediatos. Isso pode incluir a substituição de pastilhas, discos, tambores ou reparos em componentes hidráulicos. A manutenção regular dos sistemas de freios é crítica para garantir paradas seguras e evitar acidentes.",
        5 : "O sistema de suspensão de um veículo desempenha um papel crucial na capacidade de manobra, conforto e estabilidade. Reparos em sistemas de suspensão podem envolver a substituição de amortecedores, molas, buchas e outros componentes desgastados. Uma suspensão em bom estado proporciona uma condução suave, evita desgaste irregular dos pneus e contribui para a segurança do veículo, mantendo as rodas em contato adequado com o solo.",
        6 : 'A eletrônica automotiva desempenha um papel cada vez mais importante nos veículos modernos. Os sistemas eletrônicos controlam uma ampla gama de funções, incluindo ignição, injeção de combustível, sistemas de entretenimento e muito mais. Reparos na eletrônica automotiva exigem diagnóstico preciso e conhecimento especializado para solucionar problemas, muitas vezes relacionados a falhas nos sensores, módulos de controle ou fiação. A manutenção adequada da eletrônica do veículo é fundamental para garantir seu desempenho e eficiência.', 
    }

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
    <div className="container_service">
                
        <h1 className="title_service">Conheça Nossos Serviços</h1>
        
        {imageSrc && <img className="imagem_servico" src={process.env.PUBLIC_URL + imageSrc} alt="Simbolo_de" />}

        <div className="container_service_interaction">

            <div className="container_textos_servico">

                <h4 className="title_text_service">{subtitulo[selectedOption]}</h4>

                <p className="paragraph_service">{paragrafo[selectedOption]}</p>

            </div>
            
            <div className="container_select">
                <Select options={options} value={selectedOption} onChange={handleSelectChange}>Manutenção Preventiva</Select>
            </div>

        </div>
        
    </div>
    )
}

export default Service;