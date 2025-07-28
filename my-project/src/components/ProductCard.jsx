import React from 'react'
import{useNavigate} from 'react-router-dom'

const ProductCard = ({product}) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/product/${product.id}`)
  }
  return (
    <div onClick={handleClick}>
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>Price: ${product.price}</p>
    </div>
  )
}

export default ProductCard