import React from 'react';
import { createRoot } from 'react-dom/client'
import {BrowserRouter as Router} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';


import App from './App.jsx'

const root = createRoot(document.getElementById('root'));
root.render(
    <Router>
      <App />
    </Router>
    
);