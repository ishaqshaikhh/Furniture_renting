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
import Address from './pages/Address';
import YourBookings from './pages/YourBookings';
import Account from './pages/Account';

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
            <Route exact path='/productdetails/:id' element={<Productdetails />}></Route>
            <Route exact path='/checkout' element={<Checkout />}></Route>
            <Route exact path='/account' element={<Account />}>
              <Route exact path='/account/profile' element={<Profile />} />
              <Route exact path='/account/address' element={<Address />} />
              <Route exact path='/account/yourBooking' element={<YourBookings />} />
            </Route>
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
