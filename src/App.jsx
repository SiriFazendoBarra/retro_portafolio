
import { Route, Routes } from 'react-router-dom'
import '../src/assets/styles/css/index.css'
import Home from './views/Home'
import About from './views/About'
import NavBar from './components/NavBar'


function App() {


  return (
    <div className="App bg-secondary d-flex flex-column gap-3 text-white">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
