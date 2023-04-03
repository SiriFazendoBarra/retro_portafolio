
import { Route, Routes } from 'react-router-dom'
import '../src/assets/styles/css/index.css'
import Home from './views/Home'
import About from './views/About'
import NavBar from './components/NavBar'
import Footer from './components/Footer'


function App() {


  return (
    <div className="App bg-dark d-flex flex-column text-white">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
