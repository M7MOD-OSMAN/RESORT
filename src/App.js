import './App.css'
import Home from './pages/Home'
import Error from './pages/Error'
import Rooms from './pages/Rooms'
import Navbar from './components/Navbar'
import SingleRoom from './pages/SingleRoom'
import { Route, Routes } from 'react-router-dom'

function App(props) {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/rooms/' element={<Rooms />} />
        <Route exact path='/rooms/:slug' element={<SingleRoom />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App
