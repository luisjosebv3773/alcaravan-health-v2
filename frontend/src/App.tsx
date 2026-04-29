import { Routes, Route, Navigate } from 'react-router-dom'
import { LoginView } from './features/auth/Login/LoginView'
import './App.css'

function App() {
  return (
    <Routes>
      {/* Redirigir por defecto al login por ahora */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginView />} />
      {/* Aquí puedes agregar más rutas en el futuro */}
    </Routes>
  )
}

export default App
