import { createBrowserRouter } from "react-router-dom";

// Mis Paginas
import Layout from "../../Layout";
import ErrorPage from '../../pages/error-page';

const router = createBrowserRouter([{
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage/>,
    children: [
        {
            index: true,
            path: '/',
            element: <Layout />
        },
        {
            path: '/',
            element: <></>
        },
        {
            path: '*',
            element: <></>
        },
    ]
}])

export default router
