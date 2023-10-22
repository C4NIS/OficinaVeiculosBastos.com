import "./Header.css"

const Header = () =>{
    return(
        <nav className = "container">
            
            <a href="https://www.youtube.com/watch?v=ULQhvIGG27Q&ab_channel=LofiGirl" alt='Para pagina principal'>
                <img  src = "/assets/icon.svg" alt='logo' />
            </a>
            

            <div className="container_itens">
                <a href="https://www.youtube.com/watch?v=ULQhvIGG27Q&ab_channel=LofiGirl" alt='Página Principal'>Página Principal</a>
                <a href="https://www.youtube.com/watch?v=ULQhvIGG27Q&ab_channel=LofiGirl" alt='Localização'>Localização</a>
                <a href="https://www.youtube.com/watch?v=ULQhvIGG27Q&ab_channel=LofiGirl" alt='Vagas'>Vagas</a>
            </div>

        </nav>
    )
}

export default Header