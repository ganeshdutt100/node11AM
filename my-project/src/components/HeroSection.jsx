import React, { useState } from 'react'
import { product } from './product'

export const HeroSection = () => {
  const [selectCourses, setSelectCourses] = useState('fullstack')
  return (
    <>
   <div className="flex justify-around mt-12">
      <button className={` py-3 px-4 rounded ${selectCourses === 'fullstack'? 'bg-blue-400 text-black':'bg-gray-900 text-white'} `} onClick={()=>setSelectCourses('fullstack')}>Fullstack</button>      
      

      <button className={` py-3 px-4 rounded ${selectCourses === 'datascience'? 'bg-blue-400 text-black':'bg-gray-900 text-white'} `} onClick={()=>setSelectCourses('datascience')}>Data_Science</button>   

      <button className={` py-3 px-4 rounded ${selectCourses === 'digitalmarketing'? 'bg-blue-400 text-black':'bg-gray-900 text-white'} `} onClick={()=>setSelectCourses('digitalmarketing')}>Digital_Marketing</button>   
    
    </div>   

    <div className='text-center mt-5 flex justify-center gap-4'>
     {product[selectCourses].map((item)=>(
     <div key={item.id} className='w-full  bg-gray-900 text-white p-4'>
        <img src={item.Image} alt={item.title} className='w-full h-24 object-contain' />
      <h2 className='text-2xl'>{item.title}</h2>
      <p>{item.description}</p>
     </div>
     ))}
    </div>
    </>
  )
}
