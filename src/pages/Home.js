import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';
const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";
    const [posts,setPosts] =useState([]);
    const [loading,setLoading] = useState(false);
    async function fetchData(){
      setLoading(true);
      try{
          const result = await fetch(API_URL);
          const data = await result.json();
          setPosts(data);
      }catch(e){
        console.log("Error");
        setPosts([]);
      }
      setLoading(false);
    }

    useEffect(()=>{
      fetchData();
    },[])
  return (
    <div>{
      loading ? (<Spinner/>):(
        posts.length > 0 ? (
         posts.map((post)=>{return <Product key= {post.id} post={post}/>})
        ):(<p>No data found</p>)
      )
    }
    </div>
  )
}

export default Home