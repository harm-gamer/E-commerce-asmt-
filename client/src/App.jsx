
import { Routes, Route } from 'react-router-dom'
import Home from './customers/pages/Home.jsx'
import Login from './admin/pages/Login.jsx'
import Dashboard from './admin/pages/Dashboard.jsx'
import AdminRoute from './admin/components/AdminRoute.jsx'
import Cart from './customers/pages/Cart.jsx'

function App() {
 

  return (
    <>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/cart" element={<Cart />} />

  <Route
    path="/admin/dashboard"
    element={
      <AdminRoute>
        <Dashboard />
      </AdminRoute>
    }
  />
</Routes>

    </>
  )
}

export default App
