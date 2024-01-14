import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add,remove } from '../redux/slices/CartSlice';
import toast  from 'react-hot-toast';

const Product = ({post}) => {
   
    const cart= useSelector((state)=>state.cart);
    const dispatch = useDispatch();

    function addToCart(){
        dispatch(add(post));
        toast.success("Item added to Cart");

    }

    function removeFromCart(){
        dispatch(remove(post.id));
        toast.error("Item removed from Cart");
    }
    return (
    <div>
        <p>{post.title}</p>
        <p>
            {post.description}
        </p>
        <div>
            <img src={post.image} alt=''/>
        </div>
        <p>{post.price}</p>
        {
            cart.some((p)=> p.id === post.id) ?
            (<button
                onClick={removeFromCart}
            >
                Remove Item
            </button>):
            (<button
                onClick={addToCart}
            >
                Add to Cart
            </button>)
        }
    </div>
  )
}

export default Product