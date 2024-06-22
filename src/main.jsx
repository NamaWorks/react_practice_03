import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

import Home from './components/pages/Home/Home.jsx'
import About from './components/pages/About/About.jsx'
import Contact from './components/pages/Contact/Contact.jsx'
import NotFound from './components/pages/NotFound/NotFound.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/"> 
      <App />
      <Routes>
        <Route path='/' element={<App />} />
          <Route index element={<Home />} />
          <Route path='about' element={<About/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>    
  </React.StrictMode>,
)
