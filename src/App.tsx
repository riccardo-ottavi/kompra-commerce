import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home'
import DefaultLayout from './layouts/DefaultLayout'
import ProductDetail from './pages/ProductDetail'
import Login from './pages/Login'
import ProtectedRoute from './router/ProtectedRoute'
import Cart from './pages/Cart'
import Whishlist from './pages/Whishlist'
import NotFound from './pages/NotFound'
import { AuthProvider } from './contexts/AuthContext'

function App() {


  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/login" element={<Login />} />


              <Route element={<ProtectedRoute />}>
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Whishlist />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
