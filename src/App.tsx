import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/home/HomeIndex'
import Footer from'./components/layouts/FooterLayout'
import './App.css'
import Scolarite from './components/scolarite/ScolariteIndex'
import Actualite from './components/actualite/ActualiteIndex'
import About from './components/about/AboutIndex'
import Admin from './components/administration/AdminIndex'
import Contact from './components/contact/ContactIndex'
import Galerie from './components/galerie/galerieIndex'
import ScrollToTop from'./components/scroll/ScrollIndex'

function App() {

  return (
    <>
    <Router>
    <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Scolarite' element={<Scolarite />}/>
        <Route path='/Actualite' element={<Actualite />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Admin' element={<Admin />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/Galerie' element={<Galerie />}/>
      </Routes>
    </Router>
    <Footer />
      
    </>
  )
}

export default App
