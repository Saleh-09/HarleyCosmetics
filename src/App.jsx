import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/Navbar'
import HeroHeader from './components/HeroHeader'
import Features from './components/Feature'
import Transformations from './components/Tranformations'
import Testimonial from './components/Testimonial'
import Treatments from './components/Treatements.Jsx'
import FAQs from './components/FAQs'
import Banner from './components/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-screen min-h-screen overflow-x-hidden">
      <Navbar/>
      <HeroHeader/>
      <Features/>
      <Transformations/> 
      <Treatments/>   
      <Testimonial/>
      <FAQs/>
      <Banner/>
    </div>
  )
}

export default App
