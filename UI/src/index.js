import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom"
import Router from './Router';
import "./pages/homepage/HomePage.css";
import "./pages/registerpage/RegisterPage.css";
import "./pages/loginpage/LoginPage.css";
import "./pages/forgotpasswordpage/ForgotPasswordPage.css";
import "./pages/productspage/ProductsPage.css";
import "./pages/addproductpage/AddProductPage.css"

const appRouter = Router()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals