import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css';
//import App from './App';
import Header from './components/Header'
import Home from './Pages/Home';
import FicheChampionnat from './Pages/FicheChampionnat';


ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/FicheChampionnat/:id' element={<FicheChampionnat />} />
          </Routes>
      </Router>
  </React.StrictMode>,
document.getElementById('root')
)



