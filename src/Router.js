import { createBrowserRouter, RouterProvider} from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Plan from "./pages/Plan";
import Login from "./pages/Login";
import Form from "./pages/Form";
import Payment from "./pages/Payment";

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
        path: "/payment",
        element: <Payment />
    },
])

const RootComponent = () => {
    return (
        <RouterProvider router={Router} />
    )
}

export default RootComponent;