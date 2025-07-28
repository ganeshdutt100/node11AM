import React,{useEffect , useState} from 'react'
import ProductCard from '../components/ProductCard'
const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
  return (
    <div>
        <h1>Product List</h1>
        <div>
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    </div>
  )
}

export default Home