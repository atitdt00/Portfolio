import { Route, Routes } from 'react-router-dom'
import Website from './pages/Website'

function App() {
  return (
    <Routes>
        <Route path='/' element={<Website/>}/>
    </Routes>
  )
}

export default App
