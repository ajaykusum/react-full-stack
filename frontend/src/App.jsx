import React from 'react'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import News from './pages/News/News'
import Courses from './pages/Courses/Courses'
import Campaign from './pages/Campaign/Campaign'
import Media from './pages/Media/Media'
import Promotion from './pages/Promotion/Promotion'
import ContactPage from './pages/CantactPage/CantactPage'

const App = () => {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/news' element={<News />}></Route>
          <Route path='/courses' element={<Courses/>}></Route>
          <Route path='/campaign' element={<Campaign/>}></Route>
          <Route path='/media' element={<Media/>}></Route>
          <Route path='/promotion' element={<Promotion/>}></Route>
          <Route path='/contact' element={<ContactPage/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
  )
}

export default App