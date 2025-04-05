import { createBrowserRouter } from "react-router";
import Layout from "../../widgets/Layout/Layout";
import Home from "../../pages/Home/Home";
import ProofofStake from "../../pages/ProofofStake/ProofofStake";





export const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'proofofStake',
                element: <ProofofStake/>
            },
        ]
    }
])