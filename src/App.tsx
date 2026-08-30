import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ExistingHome from './ExistingHome'
import { ArtificialConsciousnessPage } from './components/ArtificialConsciousnessPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ArtificialConsciousnessPage />} />
        <Route path="/artificial-consciousness" element={<ArtificialConsciousnessPage />} />
        <Route path="/legacy-home" element={<ExistingHome />} />
      </Routes>
    </BrowserRouter>
  )
}
