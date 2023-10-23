import "./style.css";
import Button from "../button";
import Select from "../select";

import React, { useState } from 'react';

const Principal = () => {

    const options = [
        { id: 1, name: 'Reparo de Motores' },
        { id: 2, name: 'Sistemas de Refrigeração'},
        { id: 3, name: 'Reparo de Transmissão' },
        { id: 4, name: 'Sistemas de Freios'},
        { id: 5, name: 'Sistemas de Suspensão'},
        { id: 6, name: 'Eletrônica e Diagnóstico'},

    ];

    const [selectedOption, setSelectedOption] = useState(0);

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            
            <div className="container_principal">

                <img className="personagem_principal" src="/assets/Personagem_Topo.svg" alt="Personagem_Principal" />

                <div className="container_textos_principais">

                    <h2>Bastos Mecânica: O Seu Parceiro de Confiabilidade Automotiva!</h2>

                    <p>Somos a escolha confiável para todas as suas necessidades de manutenção e reparo de veículos empresariais em São José dos Campos. Com anos de experiência no setor automobilístico e um compromisso inabalável com a excelência, a Bastos é a sua parceira deconfiança quando se trata de manter sua frota empresarial funcionando perfeitamente.</p>

                    <div className="container_botao_principal">

                        <Button>Agende sua visita</Button>
                    </div>

                </div>
                
            </div>
            
            <div className="container_servico">
                
                <h1>
                    Conheça Nossos Serviços
                </h1>
                
                <img className="caminhao_servico" 
                src="/assets/caminhao.svg" 
                alt="Personagem_Servico" 
                />

                <div className="container_interativo_servico">

                    <div className="container_textos_servico">

                        <h4>Manutenção Preventiva</h4>

                        <p className="paragrafo_servico">Realização de verificações regulares, como troca de óleo, substituição de filtros, inspeção de   freios e verificação de sistemas elétricos para evitar problemas futuros.</p>

                    </div>
                    
                    <div className="container_select">
                        <Select options={options} value={selectedOption} onChange={handleSelectChange}>Manutenção Preventiva</Select>
                    </div>

                </div>
                
            </div>


        </div>
    );
};

export default Principal;