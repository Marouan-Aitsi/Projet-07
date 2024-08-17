import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Home from './pages/Home/Home';
import Apropos from './pages/Apropos/Apropos'
import Footer from './components/Footer/Footer';
import Error from './pages/Error/Error'
import Logement from './pages/Logement/Logement';

const App = () => {
      return (
            <>
                  <div className="body-wrapper">
                        <Header />
                        <Routes>
                              <Route path='/' element={<Home />} />
                              <Route path='/Apropos/Apropos' element={<Apropos />} />
                              <Route path='/Logement/:id' element={<Logement />} />
                              <Route path='*' element={<Error />} />
                        </Routes>
                  </div>
                  <Footer />
            </>
      );
};

export default App;