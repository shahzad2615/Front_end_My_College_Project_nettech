import React from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Courses from './Pages/Courses'
import Faculty from './Pages/Faculty'

import Contact from './Pages/Contact'
import Admission from './Pages/Admission'

import { Route,Routes } from 'react-router-dom'


const App = () => {
  return (
    <div>
      {/* routing  */}\
      <Navbar/>

      <Routes>

        

      <Route path='/' element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/courses" element={<Courses/>}/>
      <Route path="/faculty" element={<Faculty/>}/>
      <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Admission/>
      <Footer/>
     

    </div>
  )
}

export default App
