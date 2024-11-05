import React from 'react'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import News from './pages/News/News'
import Courses from './pages/Courses/Courses'

const App = () => {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/news' element={<News />}></Route>
          <Route path='/courses' element={<Courses/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
  )
}

export default App