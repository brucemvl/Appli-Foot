import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css';
//import App from './App';
import Header from './components/Header'
import Home from './Pages/Home';


ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
      </Router>
  </React.StrictMode>,
document.getElementById('root')
)



