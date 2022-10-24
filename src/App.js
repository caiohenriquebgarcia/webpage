import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cardapio from './pages/Cardapio';
import Equipe from './pages/Equipe';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/cardapio" component={Cardapio} />
        <Route path="/equipe" component={Equipe} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default Routes;