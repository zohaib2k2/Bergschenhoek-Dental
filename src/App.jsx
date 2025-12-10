// App.jsx
// import React, { useState } from 'react';
//import { Menu, X, Phone, MapPin, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
//import NavBar from './components/NavBar';

import { 
   createBrowserRouter,
   createRoutesFromElements,
   RouterProvider,
   Route 
  } from 'react-router-dom'


import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
     <Route index element={<HomePage/>}/>
     {/* <Route path='/jobs' element={<JobsPage/>}/>
     <Route path='/jobs/:id' element={<JobPage/>} loader={jobLoader}/>
     <Route path='*' element={<NotFound/>}/> */}
    </Route>
  ));

const App = () => {
    return <RouterProvider router={router}/>;

};

export default App;