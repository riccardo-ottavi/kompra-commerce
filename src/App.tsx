import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home'
import DefaultLayout from './layouts/DefaultLayout'
import ProductDetail from './pages/ProductDetail'
import Login from './pages/Login'
import ProtectedRoute from './router/ProtectedRoute'
import Cart from './pages/Cart'

import NotFound from './pages/NotFound'
import { AuthProvider } from './contexts/AuthContext'
import { CartProvider } from './contexts/CartContext'
import { WishlistProvider } from './contexts/WishlistContext'
import Wishlist from './pages/Wishlist'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {


  return (
    <>
      <ThemeProvider>
        <AuthProvider>
          <CartProvider>
            <WishlistProvider>
              <BrowserRouter>
                <Routes>
                  <Route element={<DefaultLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/login" element={<Login />} />

                    <Route element={<ProtectedRoute />}>
                      <Route path="/cart" element={<Cart />} />
                      <Route path="/wishlist" element={<Wishlist />} />
                    </Route>

                    <Route path="*" element={<NotFound />} />
                  </Route>
                </Routes>
              </BrowserRouter>
            </WishlistProvider>
          </CartProvider>
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}

export default App
