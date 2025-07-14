import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.jhead.png} alt="" />
      <img className='profile' src={assets.womenprofile.png} alt="" />
    </div>
  )
}

export default Navbar
