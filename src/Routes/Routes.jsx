import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Item from "../pages/Item/Item/Item";
import Order from "../pages/Order/Order/Order";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path:'item',
          element: <Item></Item>
        },
        {
          path:'order',
          element: <Order></Order>
        }
      ]
    },
  ]);
  