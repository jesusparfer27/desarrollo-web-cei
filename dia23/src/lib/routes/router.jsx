import { createBrowserRouter } from "react-router-dom";

// Mis Paginas
import Layout from "../../Layout";
import ErrorPage from '../../pages/error-page';
import ListaPost from "../../pages/ListaPost";
import PostPage from "../../pages/PostPage";
import Home from "../../pages/Home"

const router = createBrowserRouter([{
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage/>,
    children: [
        {
            index: true,
            path: '/',
            element: <Home />
        },
        {
            path: '/publicaciones',
            element: <ListaPost/>
        },
        {
            path: '/publicaciones/:id/comments',
            element: <PostPage/>
        },
        {
            path: '*',
            element: <ErrorPage/>
        }
    ]
}])

export default router
