import { NavLink } from 'react-router-dom';
import Header from '../components/Header'

const Home = () => {
    return (<>
        <main>
            <h1 className='homeTittle'>Welcome to posts API</h1>
            <h3 className='pHome'>This is an API made with backend and frontend</h3>
            <li><NavLink to="/publicaciones">Click here!</NavLink></li>
        </main>
    </>);
}

export default Home;