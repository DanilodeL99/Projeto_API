import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import AnimeSearch from './pages/Moe'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon" element={<AnimeSearch />} />
    </Routes>
  )
}

export default App