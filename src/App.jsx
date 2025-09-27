import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Game from './pages/Game';
import CookiePolicy from './pages/CookiePolicy';




function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' index={true} element={<Home />}></Route>
        <Route path='/sign-up' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/games' element={<Game />}></Route>
        <Route path='/privacy-policy'  element={<CookiePolicy />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
