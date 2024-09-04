import { NavLink } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';

const Header = () => {
    return (
            <header>
                <nav>
                    <li><NavLink to="/publicaciones">publicaciones</NavLink></li>
                </nav>
            </header>
    );
}

export default Header;