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
import Profile from './pages/Profile';
import Footer from './components/Footer';

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
            <Route exact path='/productdetails' element={<Productdetails />}></Route>
            <Route exact path='/checkout' element={<Checkout />}></Route>
            <Route exact path='/profile' element={<Profile />}></Route>
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
