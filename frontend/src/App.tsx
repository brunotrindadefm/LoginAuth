import { ProtectedRoute } from './auth/ProtectedRoute'
import { AuthProvider } from './contexts/AuthContext'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import './styles/global.scss'
import { Route, Routes, Navigate } from 'react-router-dom'

function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
      </Routes>
    </AuthProvider>
  )
}

export default App
