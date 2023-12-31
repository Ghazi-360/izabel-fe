import { createBrowserRouter, RouterProvider} from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Plan from "./pages/Plan";
import Login from "./pages/Login";
import Form from "./pages/Form";
import Proceed from "./pages/Proceed";
import Account from "./pages/Account";

const Router = createBrowserRouter ([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/plan",
        element: <Plan />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/form",
        element: <Form />
    },
    {
        path: "/proceed",
        element: <Proceed />
    },
    {
        path: "/account",
        element: <Account />
    },
])

const RootComponent = () => {
    return (
        <RouterProvider router={Router} />
    )
}

export default RootComponent;