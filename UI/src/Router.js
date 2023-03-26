import React from "react";
import {createBrowserRouter} from "react-router-dom"
import HomePage from "./pages/homepage/HomePage";
import LoginPage from "./pages/loginpage/LoginPage";
import RegisterPage from "./pages/registerpage/RegisterPage";

function Router(props) {
  const router = createBrowserRouter([
    {
      path: "",
      element: 
      <div>
        <HomePage/>
      </div>,
    },
    {
      path: "/",
      element: 
      <div>
        <HomePage/>
      </div>,
    },
    {
      path: "/home",
      element: 
      <div>
        <HomePage/>
      </div>,
    },
    {
      path: "/sportsnutrition",
      element: 
      <div>
        <HomePage/>
      </div>,
    },
    {
      path:"/healthyfoods",
      element: 
      <div>
        <HomePage/>
      </div>,
    },
    {
      path:"/clothing",
      element: 
      <div>
        <HomePage/>
      </div>,
    },
    {
      path:"/workoutaccessories",
      element: 
      <div>
        <HomePage/>
      </div>,
    },
    {
      path:"/auth",
      element: 
      <div>
        <HomePage/>
      </div>,
    },
    {
      path:"/customer/account/login/",
      element: 
      <div>
        <LoginPage/>
      </div>,
    },
    {
      path:"/customer/account/register/",
      element: 
      <div>
        <RegisterPage/>
      </div>,
    },
    {
      path:"/customer/account/",
      element: 
      <div>
        <HomePage/>
      </div>,
    },
    {
      path:"/sales/order/history/",
      element: 
      <div>
        <HomePage/>
      </div>,
    },
    {
      path:"/checkout/cart/",
      element: 
      <div>
        <HomePage/>
      </div>,
    },
  ]);

  return router;
}

export default Router