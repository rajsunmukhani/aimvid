import React, { useState } from 'react';
import Nav from './Components/Partials/Nav'
import { Route, Routes } from 'react-router-dom';
import AddModule from './Components/AddModule';
import UpdateModule from './Components/UpdateModule';
import Card from './Components/Partials/Card';
import LoginPage from './Components/Login';

const LandingPage = () => {

  return (
    <div>
      <Nav />
      
      <Routes>
        <Route path='/' element={<Card />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/addmodule' element={<AddModule/>} />
        <Route path='/updatemodule' element={<UpdateModule/>} />
      </Routes>
    </div>
  );
};

export default LandingPage;
