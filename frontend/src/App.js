import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Register from './components/Register';
import Login from './components/Login';
import Productdetails from './pages/Productdetails';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/Register' element={<Register />}></Route>
            <Route exact path='/Login' element={<Login />}></Route>
            <Route exact path='/Productdetails' element={<Productdetails />}></Route>
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
