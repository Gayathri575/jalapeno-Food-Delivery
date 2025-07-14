import React, { useState } from 'react'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import LoginPopup from './components/LoginPopup/LoginPopup'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import MyOrders from './pages/MyOrders/MyOrders'
import RecipeBook from './components/RecipeBook/RecipeBook'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify/Verify'
import ShareRecipes from './components/ShareRecipes/ShareRecipes'
import FoodRedistribution from './components/FoodRedistribution/FoodRedistribution'
import NGOView from './components/NGOView/NGOView'

const App = () => {

  const [showLogin,setShowLogin] = useState(false);

  return (
    <>
    <ToastContainer/>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/recipe-book" element={<RecipeBook />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path= '/Home' element={<Home />}/>
          <Route path='/order' element={<PlaceOrder />}/>
          <Route path='/myorders' element={<MyOrders />}/>
          <Route path='/recipes' element={<RecipeBook />}/>
          <Route path='/verify' element={<Verify />}/>
          <Route path='/food-redistribution' element={<FoodRedistribution/>}/>
          <Route path='/share-recipes' element={<ShareRecipes/>}/>
          <Route path='/ngo-view' element={<NGOView/>}/>
          
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
