import React, { useState } from 'react'
const courses ={
  
  fullstack: {
    title:'fullstack',
    description: ' fullstack the latest technologies in full-stack development, including front-end and back-end development.'
  },
  datascience: {
    title:'Data_Science',
    description: ' DataScienceLearn the latest technologies in full-stack development, including front-end and back-end development.'
  },
  digitalmarketing: {
    title:'Digital_Marketing Development ',
    description: ' Digital_Marketing Development Learn the latest technologies in full-stack development, including front-end and back-end development.'
  },
 
}
export const HeroSection = () => {
  const [selectCourses, setSelectCourses] = useState('fullstack')
  return (
    <>
   <div className="flex justify-around mt-12">
      <button className={` py-3 px-4 rounded ${selectCourses === 'fullstack'? 'bg-blue-400 text-black':'bg-gray-900 text-white'} `} onClick={()=>setSelectCourses('fullstack')}>Fullstack</button>      
      

      <button className={` py-3 px-4 rounded ${selectCourses === 'datascience'? 'bg-blue-400 text-black':'bg-gray-900 text-white'} `} onClick={()=>setSelectCourses('datascience')}>Data_Science</button>   

      <button className={` py-3 px-4 rounded ${selectCourses === 'digitalmarketing'? 'bg-blue-400 text-black':'bg-gray-900 text-white'} `} onClick={()=>setSelectCourses('digitalmarketing')}>Digital_Marketing</button>   
    
    </div>   

    <div className='text-center mt-5'>
      <h2 className='text-2xl'>{courses[selectCourses].title}</h2>
      <p>{courses[selectCourses].description}</p>
    </div>
    </>
  )
}
