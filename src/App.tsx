import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ExistingHome from './ExistingHome'
import { ArtificialConsciousnessPage } from './components/ArtificialConsciousnessPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ExistingHome />} />
        <Route path="/artificial-consciousness" element={<ArtificialConsciousnessPage />} />
      </Routes>
    </BrowserRouter>
  )
}
