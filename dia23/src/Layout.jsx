import { Outlet } from 'react-router-dom';
import { createContext } from 'react';

const Layout = () => {
    return (<>
    <main className='allMainContent'>
            <Outlet/>
        </main>
    </>
    );
}

export default Layout 