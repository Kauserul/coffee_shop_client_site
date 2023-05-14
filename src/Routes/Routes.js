import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import AllCoffeeList from "../AllCoffeeLists/AllCoffeeList";

export const router = createBrowserRouter([
    {
        path : '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allCoffeeLists',
                element: <AllCoffeeList></AllCoffeeList>
            }
        ]
    }
])