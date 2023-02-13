import logo from '../../assets/imagens/logo.png';
import './Topo.css';


function Topo () {
    return (
        <header>
            <img src={logo} alt='logo_otica'></img>
            <nav>
                <a href='#produtos'>Produtos</a>
                <a href='#sobre'>Sobre</a>
                <a href='#contato'>Contato</a>
            </nav>
        </header>
    );
};

export default Topo;