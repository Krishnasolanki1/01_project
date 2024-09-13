
import { About } from '../Component/About'
import { Home } from '../Component/Home'
import Testimonial from '../Component/Testimonials'
import { Work } from '../Component/Work'
import  Contact  from '../Component/Contact'

import './App.css'
import Footer from '../Component/Footer'

function App() {


  return (
    <>
     <div className='App'>
      <Home/>
      <About/>
      <Work/>
      <Testimonial/>
      <Contact/>
      <Footer/>
     </div>       
     
    </>
  )
}

export default App
