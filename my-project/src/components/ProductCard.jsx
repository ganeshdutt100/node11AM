import React from 'react'
import{useNavigate} from 'react-router-dom'

const ProductCard = ({product}) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/product/${product.id}`)
  }
  return (
    <div onClick={handleClick} className='w-64 border border-gray-300 rounded-lg p-4 shadow hover:shadow-lg transition'>
        <img src={product.image} alt={product.title} className='h-40 w-full object-contain mb-3' />
        <h3 className='text-xl font-semibold '>{product.title}</h3>
        <p className='text-center text-gray-600'>Price: ${product.price}</p>
    </div>
  )
}

export default ProductCard