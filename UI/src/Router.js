import React from "react";
import {createBrowserRouter} from "react-router-dom"
import HomePage from "./pages/homepage/HomePage";
import LoginPage from "./pages/loginpage/LoginPage";
import RegisterPage from "./pages/registerpage/RegisterPage";
import ForgotPasswordPage from "./pages/forgotpasswordpage/ForgotPasswordPage";
import ProductsPage from "./pages/productspage/ProductsPage";
import appsettings from "./appsettings.json"
import AddProductPage from "./pages/addproductpage/AddProductPage";

function Router(props) {

  const jsonFile = appsettings.categories;

  var pairs = []

  function dfs(file) {
    if (typeof file !== 'object') {
      return
    }
    file.map((item) => {
      pairs.push(item.title)
      dfs(item.children)
    })
    return pairs
  }

  function AddRoutes() {
    var routes = [];
    var menuList = dfs(jsonFile)
    menuList.map(item => {
      item = item.split(',').join('')
      item = item.split(' ').join('-')
      var route = 
      {
        path: '/' + item,
        element: 
        <div>
          <ProductsPage productFamily={item}/>
        </div>,
      }
      return routes.push(route)
    })
    routes.push(
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
      {
        path:"/editor/add-product/",
        element: 
        <div>
          <AddProductPage/>
        </div>,
      },
    )
    return routes;
  }

  var router = createBrowserRouter(
    AddRoutes()
  );
  
  return router;
}

export default Router