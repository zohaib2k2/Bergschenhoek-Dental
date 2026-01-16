// App.jsx
// import React, { useState } from 'react';
//import { Menu, X, Phone, MapPin, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
//import NavBar from './components/NavBar';

import { 
   HashRouter,
   Routes,
   Route 
  } from 'react-router-dom'


import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout';


const App = () => {
    return (
      <HashRouter>
        <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route index element={<HomePage/>}/>
          </Route>
        </Routes>
      </HashRouter>
    );

};

export default App;