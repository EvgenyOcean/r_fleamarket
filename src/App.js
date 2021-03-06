import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Item from './pages/Item';
import Cart from './pages/Cart';
import ErrorPage from './pages/ErrorPage';
import Header from './components/Header';
import Search from './pages/Search';
import Category from './pages/Category';


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/about" component={AboutUs}/>
        <Route exact path="/item/:path" component={Item}/>
        <Route exact path="/search/:search" component={Search}/>
        <Route exact path="/category/:category" component={Category}/>
        <Route component={ErrorPage}/>
      </Switch>
    </>
  );
}

export default App;
