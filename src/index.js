import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css';
//import App from './App';
import Header from './components/Header'
import Footer from './components/Footer';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Clubs from './Pages/Clubs';
import FicheChampionnat from './Pages/FicheChampionnat';
import FicheEurope from './Pages/FicheEurope';
import FicheMatch from './Pages/FicheMatch';


ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/FicheChampionnat/:id' element={<FicheChampionnat />} />
            <Route path='/FicheEurope/:id' element={<FicheEurope />} />
            <Route path='/FicheMatch/:id' element={<FicheMatch />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Clubs' element={<Clubs />} />
          </Routes>
          <Footer />
      </Router>
  </React.StrictMode>,
document.getElementById('root')
)



