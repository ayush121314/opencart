import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Items from "../Components/Item/Items"
import dropdown_icon from "../Components/Assests/dropdown_icon.png"

export const ShopCategory = (props) => {
const {allproduct}=useContext(ShopContext)
  return (
    <div className='w-[100%] flex flex-col'>
    <img className='w-[86%] block mt-5 self-center  mx-[30px]' src={props.banner}></img>
    <div className='flex gap-2 w-[86%]  mt-5 justify-between self-center'>
      <p className='justify-center self-center'><span className='font-[800] text-center'>Showing 1-12</span> <br></br>out of 36 products</p> 
      {/* <div className='flex gap-1 border-2 rounded-full w-fit p-3 cursor-pointer'>
      <p>Sort by</p>
      <img  className='w-3 h-3 self-center'
      src={dropdown_icon}></img>
      </div> */}
    </div>
    <div className='flex flex-wrap  mt-[50px] lg:mx-[100px] md:mx-[70px ] mb-[10px] gap-[30px] justify-center'>
      {
        allproduct.map((item,i)=>{
          if(item.category===props.category)
          {
              return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          } 
        })
      }
    </div>
    {/* <button className=' self-center my-6 rounded-[75px] w-[233px] h-[69px] bg-[#ededed] active:bg-black text-[#787878] text-[18px] font-weight-[500]'>Explore more</button> */}
 
    </div>
  )
}
export default ShopCategory