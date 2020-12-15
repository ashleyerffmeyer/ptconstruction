import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Residential from './pages/Residential/Residential';
import ContactUs from './pages/ContactUs/ContactUs';
import AboutUs from './pages/AboutUs/AboutUs';
import Commercial from './pages/Commercial/Commercial';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path='/home' exact name='home'> <Home /></Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path='/residential' exact name='residential'><Residential /></Route>
          <Route path='/commercial' exact name='commercial'><Commercial /></Route>
          <Route path='/about-us' exact name='about-us'><AboutUs /></Route>
          <Route path='/contact-us' exact name='contact-us'><ContactUs /></Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
