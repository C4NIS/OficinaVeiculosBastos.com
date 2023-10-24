import "./style.css";



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
        <div>
            <Header />
            
            <ContainerEntrada />
            
            <div className="container_servico">
                
                <h1>Conheça Nossos Serviços</h1>
                
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

            <div className="container_localicacao">

                <h3>Localização</h3>

                <div className="container_mapa">

                    <iframe title="Mapa" className="imagem_localicacao" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.564483449333!2d-45.9114226850216!3d-23.19363398486915!2m3!1f0!2f39.99999857731442!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xad6b2d6a5f7b0d7%3A0x9c6a1d5c8b3d6a8f!2sR.%20dos%20Pinheiros%2C%20123%20-%20Jardim%20S%C3%A3o%20Dimas%2C%20S%C3%A3o%20Jos%C3%A9%20dos%20Campos%20-%20SP%2C%2012210-130!5e0!3m2!1spt-BR!2sbr!4v1623346369491!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy"></iframe>

                    <div className="container_textos_localicacao">
                        
                        <p>A Bastos Mecânica é uma oficina mecânica especializada em manutenção e reparo de veículos empresariais. Nossa equipe de profissionais altamente qualificados e experientes está sempre pronta para ajudar a manter sua frota em perfeitas condições. A Bastos Mecânica é a sua parceira de confiança quando se trata de manter sua frota empresarial funcionando perfeitamente.</p>
                        
                        <p>Estamos localizados na Rua dos Pinheiros, 123, São José dos Campos - SP.</p>
                        
                        <div className="container_botao_localicacao">
                            <Button>Agendar sua visita</Button>
                        </div>

                    </div>

                </div>

            </div>

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

            <Footer />

        </div>
    );
};

export default Principal;