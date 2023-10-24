import "./Header.css"

const Header = () =>{
    return(
        <nav className = "container_header">

            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>

                <img className="container_logo" src="/assets/icon.svg" alt='logo' />

            </a>

            <div className="container_itens">

                <a className='anchor_header' href="https://www.youtube.com/watch?v=ULQhvIGG27Q&ab_channel=LofiGirl" alt='Página Principal'>Página Inicial</a>
                
                <a className='anchor_header' href="https://www.youtube.com/watch?v=ULQhvIGG27Q&ab_channel=LofiGirl" alt='Localização'>Localização</a>
                
                <a className='anchor_header' href="https://www.youtube.com/watch?v=ULQhvIGG27Q&ab_channel=LofiGirl" alt='Vagas'>Vagas</a>
            
            </div>


        </nav>
    )
}

export default Header