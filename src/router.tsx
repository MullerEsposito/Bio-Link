import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/index'
import { Achadinhos } from './pages/Achadinhos'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/achadinhos" element={<Achadinhos />} />
    </Routes>
 )
}