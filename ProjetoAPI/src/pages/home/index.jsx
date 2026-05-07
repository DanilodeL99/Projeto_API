import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="container">
            <h1>Bem-vindo ao buscador de Animes</h1>
            <p>Clique no botão abaixo para começar a procurar</p>
        
            <Link to="/Moe">
                <button>Ir Buscar</button>
            </Link>
        </div>
    );
}

export default Home;