import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main";
import Home from "../Components/Home";
import DetailPage from "../Components/DetailPage";
import Login from "../Components/Login";
import Register from "../Components/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
    {
        path: "/details",
        element : <PrivateRoute><DetailPage/></PrivateRoute>
    },
    {
        path: "/login",
        element : <Login/>
    },
    {
        path: "/register",
        element : <Register/>
    },
])

export default router;