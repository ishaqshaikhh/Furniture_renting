import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Register from './components/Register';
import Login from './components/Login';
import Productdetails from './pages/Productdetails';
import Checkout from './pages/Checkout';
import ProductPage from './pages/ProductPage';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Router>
        <Toaster
        position='top-right'
        />
        <Navbar />
        <main>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/Register' element={<Register />}></Route>
            <Route exact path='/Login' element={<Login />}></Route>
            <Route exact path='/products' element={<ProductPage />}></Route>
            <Route exact path='/Productdetails' element={<Productdetails />}></Route>
            <Route exact path='/Checkout' element={<Checkout />}></Route>

          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
