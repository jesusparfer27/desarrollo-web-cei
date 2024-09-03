import { Outlet, Link, NavLink } from 'react-router-dom';
import { createContext } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import ListaPosts from './pages/ListaPost'

const Layout = () => {
    return ( <>
    <Header/>
    <ListaPosts/>
    <Footer/>
    {/* <header>
        <nav>
            <ul>
                <li></li>
                <li><NavLink to="/posts">Posts</NavLink></li>
                <li><NavLink to="/posts/1">Ej: Post 1</NavLink></li>
                <li></li>
            </ul>
        </nav>
    </header> */}
    </> );
}
 
export default Layout