import React, { useEffect, useState } from 'react'
import { useParams , Link } from 'react-router-dom'

const ProductDetail = () => {
    const {id} =  useParams();
    const [product, setProduct] = useState(null)


    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[id]);
    if(!product) return <p>Loading....</p>
  return (
    <div>
        <Link to="/">Back</Link>
        <div>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    </div>
  )
}

export default ProductDetail