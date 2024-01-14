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
    <div className=''>{
      loading ? (<Spinner/>):(
        posts.length > 0 ? 
        (
          <div  className="grid xs:gridcols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
            {posts.map((post)=>{return <Product key= {post.id} post={post}/>})}
          </div> 
        )
        :
        (<div className=' flex items-center justify-center'><p className=''>No data found</p></div>)
      )
    }
    </div>
  )
}

export default Home