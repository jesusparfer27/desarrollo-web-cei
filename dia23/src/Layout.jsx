import { Outlet, Link, NavLink } from 'react-router-dom';

const Layout = () => {
    return ( <>
    <header>
        <nav>
            <ul>
                <li></li>
                <li><NavLink to="/posts">Posts</NavLink></li>
                <li><NavLink to="/posts/1">Ej: Post 1</NavLink></li>
                <li></li>
            </ul>
        </nav>
    </header>
    </> );
}
 
export default Layout