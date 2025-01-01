import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css'
//import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';




const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  // <BrowserRouter>
  <App />
  // </BrowserRouter>
);


//reportWebVitals();
