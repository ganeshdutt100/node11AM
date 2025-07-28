import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home  from './pages/Home'
import ProductDetail from './pages/ProductDetail'
// import Navbar from './components/navbar'
import './style.css'
// import { HeroSection } from './components/HeroSection'
// import EffectUse from './components/EffectUse'

function App() {


  return (
    <>
   <Routes>
       <Route path="/" element={<Home/>} />
       <Route path='/product/:id' element={<ProductDetail/>} />
   </Routes>
  {/* <Navbar/> */}
  {/* <EffectUse/> */}

  {/* <HeroSection/> */}
    </>
  )
}

export default App
