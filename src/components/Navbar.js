import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const count  = useSelector((state)=> state.cart.length);
  return (
    <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto text-white '>
        <NavLink to={"/"}>
          <div className='flex justify-center items-center ml-5'>
              <img src={logo} className='h-10 ' alt='' />
          </div>
        </NavLink>  
        
        <div className='flex justify-evenly items-center font-medium  text-slate-100 mr-5 space-x-6'>
          <NavLink to={'/'}><p>Home</p></NavLink>
          <NavLink to={'/cart'}>
            <div className='relative'>
            <FaShoppingCart className='text-2xl'/>
            { count > 0  &&
              <div className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center
                items-center animate-bounce rounded-full text-white 
              '>
               {count} 
              </div>
            }
            </div>
            
          </NavLink>
        </div>
    </nav>
  )
}

export default Navbar