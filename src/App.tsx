import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Problem from './pages/Problem'
import Data from './pages/Data'
import FindingsK12 from './pages/FindingsK12'
import FindingsUniversities from './pages/FindingsUniversities'
import FindingsLimits from './pages/FindingsLimits'
import Solutions from './pages/Solutions'
import About from './pages/About'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problem" element={<Problem />} />
        <Route path="/data" element={<Data />} />
        <Route path="/findings" element={<Navigate to="/findings/k12" replace />} />
        <Route path="/findings/k12" element={<FindingsK12 />} />
        <Route path="/findings/universities" element={<FindingsUniversities />} />
        <Route path="/findings/limits" element={<FindingsLimits />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}
