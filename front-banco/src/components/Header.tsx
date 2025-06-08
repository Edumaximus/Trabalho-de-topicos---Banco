import {Link} from 'react-router-dom';
import './Header.css';

function Header() {

    return (
        <header>
            <nav className="navbar">
                <div className="logo">banco</div>
                    <ul className="nav-links">
                        <li>
                            <Link to="/pages/CadastarContas">
                                cadastro de Contas
                            </Link>
                        </li>
                        <li>
                            <Link to="/pages/ListarContas">
                                Lista de Contas
                            </Link>
                        </li>
                        <li>
                            <Link to="/pages/CadastrarTipos">
                                Cadastro de tipos
                            </Link>
                        </li>
                        <li>
                            <Link to="/pages/ListarTipos">
                                lista de Tipos 
                            </Link>
                        </li>
                        <li>
                            <Link to="/pages/Transacoes">
                                Transacoes
                            </Link>
                        </li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header;