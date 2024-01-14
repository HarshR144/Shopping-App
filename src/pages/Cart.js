import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import CardItem from '../components/CardItem'



const Cart = () => {
  const cart = useSelector((state)=>state.cart);
  const [totalAmount,setTotalAmount] = useState(0);
  
  useEffect (()=>{
     setTotalAmount(cart.reduce(((acc,curr)=> acc + curr.price),0));
  },[cart])
  return (
    <div className='mb-10'>
      {
        cart.length  ?
         (<div className='flex justify-center max-w-[1300px] mx-auto gap-x-5 '>
              <div className='w-[60%] flex flex-col p-2'>
                    {
                      cart.map((item,index)=>(<CardItem key={item.id} item = {item} itemIndex={index}/>))
                    }
              </div>
              <div className='w-[40%] mt-5 flex flex-col  my-14 '>
                    <div className='flex flex-col my-14 h-[100%] p-5'>
                      <p className="font-semibold text-xl text-green-800 uppercase">Your Cart</p>
                      <p className="font-semibold text-5xl text-green-700  -mt-1 uppercase">Summary</p>
                      <p className="text-xl text-gray-700 font-semibold mt-5">
                        Total Items: <span>{cart.length}</span>
                      </p>
                    </div>
                    <div>
                      <p className="text-xl text-gray-700 font-semibold">Total Amount: <span>${totalAmount}</span></p>
                      <button className="bg-green-700 hover:bg-purple-50 w-full rounded-lg text-white transition duration-300
                       ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl mr-10">Checkout Now</button>  
                    </div>
              </div>
         
        </div>):
         (<div>
            <h1>Cart Empty</h1>
            <Link  to="/"><button>Shop Now</button></Link>
         </div>)    
      }
    </div>
  )
}

export default Cart