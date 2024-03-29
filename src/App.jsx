import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Beneficios } from './components/Beneficios'
import { Productos } from './components/Productos'
import { Distribucion } from './components/Distribucion'
import { Contacto } from './components/Contacto'

function App () {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/beneficios' element={<Beneficios />} />
        <Route exact path='/productos' element={<Productos />} />
        <Route exact path='/lugares-distribucion' element={<Distribucion />} />
        <Route exact path='/contacto' element={<Contacto />} />
      </Routes>
      <Footer />

    </Router>
  )
}

export default App
