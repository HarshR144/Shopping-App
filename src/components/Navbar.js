import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const count  = useSelector((state)=> state.cart.length);
  return (
    <div className='flex flex-row  justify-between items-center  '>
        <NavLink to={"/"}>
          <div className=''>
              <img src={logo} className='h-14' alt='' />
          </div>
        </NavLink>  
        
        <div className='flex justify-evenly items-center'>
          <NavLink to={'/'}><p>Home</p></NavLink>
          <NavLink to={'/cart'}>
            <div>
            <FaShoppingCart/>
            <div>
              {count > 0  && count }
              </div>
            </div>
          </NavLink>
        </div>
    </div>
  )
}

export default Navbar