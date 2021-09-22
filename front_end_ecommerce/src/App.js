import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import NavMenu from './components/NavMenu';
import Contact from './components/Contact';
import Deconnexion from './components/Deconnexion';
import Connexion from './components/Connexion';
import Myaccount from './components/Myaccount';
import Inscription from './components/Inscription';
import DetailsProduct from './components/DetailsProduct';
import Cart from './components/Cart';
import CategoryProduct from './components/CategoryProduct';
import Categories from './components/Categories';


function App() {
      
  return (
      <Router>
          <NavMenu />
          <Switch>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/connexion">
              <Connexion />
            </Route>
            <Route path="/inscription">
              <Inscription />
            </Route>
            <Route path="/myaccount">
              <Myaccount />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/categories">
              <Categories />
            </Route>
            <Route path="/details_product/:id">
              <DetailsProduct />
            </Route>
            <Route path="/product_category/:id">
              <CategoryProduct />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/deconnexion">
              <Deconnexion />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
      </Router>
  );
}

export default App;