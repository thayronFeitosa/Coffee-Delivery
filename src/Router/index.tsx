import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/home'
import { Checkout } from '../pages/Checkout'

export function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Checkout />} />
    </Routes>
  )
}