import { useEffect, useState } from "react"
import About from "./components/About"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Popup from "./components/Popup"
import WhyChoose from "./components/WhyChoose"
import  AOS  from "aos";
import 'aos/dist/aos.css'




function App() {
 const[popup,setpopup] = useState(false)
 function showPopup (){
  setpopup(true)
 }

 useEffect(()=>{
  AOS.init({
    offset:100,
    duration:900,
    easing:'ease-in-sine',
    dealy:100,
  })
  AOS.refresh()
 },[])

  return (
    <>
  <Navbar showPopup={showPopup}/>
  <Hero/>
  <Banner/>
  <WhyChoose/>
  <About/>
  <Footer/>
  <Popup popup={popup} setpopup={setpopup} showPopup={showPopup}/>
    </>
  )
}

export default App
