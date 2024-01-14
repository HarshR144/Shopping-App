import React from 'react'
import {MdDelete} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/slices/CartSlice'
import toast from 'react-hot-toast';
const CardItem = ({item,itemIndex}) => {

  const dispatch = useDispatch();

  function removeFromCart(){
    dispatch(remove(item.id))
    toast.error("Item Removed")
  }
  return (
    <div className='flex justify-between items-center last:border-b-0 gap-5 border-b-[3px] border-slate-500 p-7  mb-2 mx-5'>
        
          <div className='w-[30%] object-cover'>
            <img src={item.image} alt='' className='object-cover'/> 
          </div>
          <div className='w-[70%] self-start space-y-5 ml-5'>
            <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1>
            <h1 className="text-base text-slate-700 font-medium">{item.description.split(" ").slice(0,10).join(" ")}</h1>
            <div className='flex justify-between items-center'>
                <p className="text-green-600 font-bold text-lg ">{item.price}</p>
                <div className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3" onClick={removeFromCart}><MdDelete/></div>
            </div>
          </div>
        

                
    </div>
  )
}

export default CardItem