import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.jpg'
const Navbar = () => {
  return (
    <div className='flex flex-row  justify-between items-center bg-blue-500  '>
        <NavLink to="/">
          <div className=''>
              <img src={logo} alt='' height={31} width={41}/>
          </div>
        </NavLink>  
        
        <div className='flex justify-evenly items-center'>
          <NavLink to='/'><p>Home</p></NavLink>
          <NavLink to='/cart'>
            <div>
            <FaShoppingCart/>
            </div>
          </NavLink>
        </div>
    </div>
  )
}

export default Navbar