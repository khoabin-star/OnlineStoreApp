import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Badge from 'react-bootstrap/Badge';
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import { useContext } from 'react';
import { Store } from './Store';
import CartScreen from './View/CartScreen';
import LoginManager from './View/LoginManager';

function App() {
  const { state } = useContext(Store);
   const { cart } = state;
  return (
    <BrowserRouter>
      <div className='d-flex flex-column site-container'>
      <header>
        <Navbar bg = "dark" variant = "dark">
          <Container>
            <LinkContainer to = "/">
            <Navbar.Brand>Online Store App</Navbar.Brand>
            </LinkContainer>
            <Nav className="justify-content-end">
              <Link to = "/signin" className="nav-link">SIGN IN</Link>
                 <Link to="/cart" className="nav-link">
                   <img alt = "" src = "/images/logo.jpg" width = "50" height = "50"/>
                   CART
                   {cart.cartItems.length > 0 && (
                     <Badge pill bg="danger">
                       {cart.cartItems.reduce((x, y) => x + y.quantity, 0)}
                     </Badge>
                   )}
                 </Link>
               </Nav>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container>
        <Routes>
          <Route path = "/product/:slug" element = {<ProductScreen />} />
          <Route path = "/" element = {<HomeScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/signin" element={<LoginManager />} />
        </Routes>
        </Container>
      </main>
      <footer>
        <div className='text-center'>Group 11 Project CSCE361</div>
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
