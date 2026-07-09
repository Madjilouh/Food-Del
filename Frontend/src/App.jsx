import React from 'react'
import Verify from './pages/Verify/Verify'
import Navbar from './components/Navbar/Navbar'
import MyOrders from './pages/MyOrders/MyOrders'
import { Routes, Route } from 'react-router-dom'  // plus besoin de BrowserRouter ici
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import LoginPopup from './components/LoginPopup/LoginPopup'

const App = () => {

  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify/>} />
          <Route path='/myorders' element={<MyOrders/>} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App

