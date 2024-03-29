import SignUp from "./pages/signUp";
import SignIn from "./pages/signin";
import header from "./pages/header";
import Product from "./pages/product";
import productpage from "./pages/productPage";
import aboutPage from "./pages/about";
import React from "react";
/* eslint-disable */
import { BrowserRouter, Link, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <div style={{ width: "100vw", height: "100vh" }}>
        <main>
          <Route path="/" component={SignUp} exact />
          <Route path="/SignIn" component={SignIn} exact />
          <Route path="/home" component={header} exact />
          <Route path="/products" component={Product} exact />
          <Route path="/aboutUs" component={aboutPage} exact />
          <Route path="/product" component={productpage} exact />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;

//background-image: url(https://opconventioncenter.com/wp-content/uploads/2018/02/EXPO-Inc.-tools.jpeg);
//how about test
