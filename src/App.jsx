import { Route, Routes } from 'react-router-dom'
import './App.css'
// import ViewAgentes from './components/ViewAgentes'
import CardAgente from './components/card/CardAgente'
import ViewAgentes from './components/ViewAgentes'

function App () {
  return (
    <Routes>
      <Route path='/lector' element={<ViewAgentes/>} />
      <Route path='/agentes/:id' element={<CardAgente/>} />
    </Routes>
    // <CardAgente/>
  )
}

export default App
