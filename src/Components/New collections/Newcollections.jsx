import React, { useEffect, useState  } from 'react'
import { Items } from '../Item/Items'
export const Newcollections = () => { 
  const [New_collections, setNew_collections] = useState([]);
  useEffect(()=>{
       fetch('https://ecom-back-yale.onrender.com/newcollections')
       .then((res)=>res.json())
       .then((data)=>setNew_collections(data))
  },[])
  
  return (
    <div className='w-[100%]  flex flex-col'>
    <div className='text-[50px] text-center font-[600]'>New collections</div>
    <hr className='w-[200px] h-[6px] self-center rounded-[10px] bg-[#252525]'></hr>
        <div className='popular-item flex flex-wrap  mt-[50px] lg:mx-[100px] md:mx-[70px ] mb-[10px] gap-[30px] justify-center'>
        {
            New_collections.map((item,i)=>{
            return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })
        }
    </div>
    </div>
  )
}
export default Newcollections