import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/home/HomeIndex'
import Footer from'./components/layouts/FooterLayout'
import './App.css'
import Scolarite from './components/scolarite/ScolariteIndex'
import Actualité from './components/actualite/ActualiteIndex'
import About from './components/about/AboutIndex'
import Admin from './components/administration/AdminIndex'
import Contact from './components/contact/ContactIndex'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Scolarite' element={<Scolarite />}/>
        <Route path='/Actualité' element={<Actualité />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Admin' element={<Admin />}/>
        <Route path='/Contact' element={<Contact />}/>
      </Routes>
    </Router>
    <Footer />
      
    </>
  )
}

export default App
