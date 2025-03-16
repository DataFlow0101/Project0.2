import Home from "../../pages/Home/Home";
import Sales from "../../pages/Wholesale Sales/Sales";
import Layout from "../../widgets/Layout/Layout";
import { createImageBitmapRouter } from 'react-router-dom';




export const myRouter = createImageBitmapRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: '/sales',
                element: <Sales/>
            }
        ]

    }
])