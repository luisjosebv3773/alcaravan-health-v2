import { Routes, Route, Navigate } from 'react-router-dom'
import { LoginView } from './features/auth/Login/LoginView'
import { DashboardView } from './features/dashboard/DashboardView'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginView />} />
      <Route path="/dashboard" element={<DashboardView />} />
      {/* Redirección para rutas no encontradas */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}

export default App
