import "./Header.css"

const Header = () =>{
    return(
        <header className = "container">

            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
                <img className="container_logo" src="/assets/icon.svg" alt='logo' />
            </a>

            <div className="container_itens">

                <a href="https://www.youtube.com/watch?v=ULQhvIGG27Q&ab_channel=LofiGirl" alt='Página Principal'>Página Inicial</a>
                
                <a href="https://www.youtube.com/watch?v=ULQhvIGG27Q&ab_channel=LofiGirl" alt='Localização'>Localização</a>
                
                <a href="https://www.youtube.com/watch?v=ULQhvIGG27Q&ab_channel=LofiGirl" alt='Vagas'>Vagas</a>
            
            </div>

        </header>
    )
}

export default Header