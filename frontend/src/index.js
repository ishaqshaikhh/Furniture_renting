import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import State from './context/state/State';
import Fetch from './context/Fetch/Fetch';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <State>
    <Fetch>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Fetch>
  </State>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
