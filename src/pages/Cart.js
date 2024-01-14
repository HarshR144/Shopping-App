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
    <div>
      {
        cart.length  ?
         (<div>
              <div>
                    {
                      cart.map((item,index)=>(<CardItem key={item.id} item = {item} itemIndex={index}/>))
                    }
              </div>
              <div>
                    <div>
                      <p>Your Cart</p>
                      <p>Summary</p>
                      <p>
                        Total Items: <span>{cart.length}</span>
                      </p>
                    </div>
                    <div>
                      <p>Total Amount: <span>{totalAmount}</span></p>
                      <button>Checkout Now</button>  
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