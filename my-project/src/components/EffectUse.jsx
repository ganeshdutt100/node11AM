import React, { useState, useEffect } from 'react'

const EffectUse = () => {
    const [products, setProducts] = useState([]) // store API data
    const [loading, setLoading] = useState(true) // loading state

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
            setLoading(false)
        })
    },[])
  return (
    <>
    <h1 className='text-center text-3xl my-8'>Products</h1>
    {loading ?(
        <p className='text-center text-3xl'>Loading...</p>
    ):(
        <div className='flex flex-wrap gap-5 justify-center'>
            {products.map((product)=>(
                <div key={product.id} className='w-64 border border-gray-300 rounded-lg p-4 shadow hover:shadow-lg transition'>
                    <img src={product.image} alt={product.title} className='w-full h-40 object-contain mb-3' />
                    <h3 className='text-md font-semibold font-bold text-center'>{product.title}</h3>
                  
                    <p className='text-center text-gray-600'>Price: ${product.price * 10}</p>
                </div>
            ))}
        </div>
    )}
    </>
  )
}

export default EffectUse