import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
