import App from "@/App";
import { Login } from "@/pages/Login";
import Register from "@/pages/register";
import Todos from "@/pages/todos";
import {createBrowserRouter,} from "react-router-dom";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/todos",
        element: <Todos/>,
    },
    {
        path: "/register",
        element: <Register/>,
    },
    {
        path: "/login",
        element:<Login/>,
    },
]);
export default routes;