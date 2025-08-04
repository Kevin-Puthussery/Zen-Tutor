import { Route, Routes } from 'react-router-dom'
import './App.css'

import LandingPage from './pages/LandingPage'
import Courses from './pages/Courses'
import Header from './components/Header'
import Footer from './components/Footer'
import Join from './pages/Join'
import Placements from './pages/Placements'
import Contacts from './pages/Contacts'




function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/courses' element={<Courses />} />
       <Route path='/placements' element={<Placements />} />
       <Route path='/contacts' element={<Contacts />} />
        <Route path='/join' element={<Join />} />
      </Routes>
      <Footer/>
     



    </>
  )
}

export default App