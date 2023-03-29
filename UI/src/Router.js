import React from "react";
import {createBrowserRouter} from "react-router-dom"
import HomePage from "./pages/homepage/HomePage";
import LoginPage from "./pages/loginpage/LoginPage";
import RegisterPage from "./pages/registerpage/RegisterPage";
import ForgotPasswordPage from "./pages/forgotpasswordpage/ForgotPasswordPage";
import ProductsPage from "./pages/productspage/ProductsPage";
import appsettings from "./appsettings.json"

function Router(props) {

  const jsonFileSN = appsettings.categories["SPORTS NUTRITION"];
  const jsonFileHF = appsettings.categories["HEALTHY FOODS"];
  const jsonFileC = appsettings.categories["CLOTHING"];
  const jsonFileWA = appsettings.categories["WORKOUT ACCESSORIES"];

  function dfs(file, level) {
    if (typeof file === 'string') {
      this.pairs.push([file, level/2])
      return
    }
    var data = Object.keys(file)
    for (var i = 0; i < data.length; i++) {
      if (data[i].length > 1)
        this.pairs.push([data[i], level/2])
      this.dfs(file[data[i]], level + 1)
    }
    return this.pairs
  }

  var router = createBrowserRouter([
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
      path:"/products",
      element: 
      <div>
        <ProductsPage/>
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
      path:"/customer/account/forgotpassword/",
      element: 
      <div>
        <ForgotPasswordPage/>
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