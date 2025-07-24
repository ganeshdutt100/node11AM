import { useState } from 'react'
import Navbar from './components/navbar'
import './style.css'
import { HeroSection } from './components/HeroSection'
import EffectUse from './components/EffectUse'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Navbar/>
  <EffectUse/>

  <HeroSection/>
    </>
  )
}

export default App
