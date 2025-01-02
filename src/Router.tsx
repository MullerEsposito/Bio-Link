import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/pagehome/indexhome'
import { PageAcha } from './pages/pageacha'


export function Router() {
    return (
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pageacha" element={<PageAcha />} />
        </Routes>
    )
}