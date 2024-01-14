import React, { useState } from 'react'

const Product = ({post}) => {
    const [selected,setSelected] = useState(false);
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
        <button>
            {
                selected ? (<p>Remove Item</p>):(<p>Add to Cart</p>)
            }
        </button>
    </div>
  )
}

export default Product