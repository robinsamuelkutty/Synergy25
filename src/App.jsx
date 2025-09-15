
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import About from './components/About'
import Registration from './components/Registration'
// import EarlyBird from './components/EarlyBird'
import MapComponent from './components/Map'
import Footer from './components/Footer'
import Schedule from './components/Schedule'
import Updates from './components/Updates'
import Speakers from './components/Speakers'
import Workshops from './components/Workshops'

const App = () => {
  const locationDetails = {
    name: "Event Venue",
    tagline: "Join us for an electrifying IEEE Synergy’25",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.086563658133!2d76.82362507490788!3d9.673644878565486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07b56200e0d90f%3A0x9924d34156f3bc17!2sCollege%20of%20Engineering%20Poonjar%20CEP!5e0!3m2!1sen!2sin!4v1756994734645!5m2!1sen!2sin",
    address: {
      street: "College of Engineering Poonjar",
      city: "Poonjar Thekkekara (P.O)",
      state: "Kottayam, Kerala,",
      zip: "PIN: 686582",
      country: "India",
    },
   
    otherInfo: [
      
      {
        icon: "GlobeAltIcon",
        label: "IEEE SB CE Poonjar",
        value: "https://ieee.cep.ac.in/",
        link: true,
      },
      {
        label: "Nearest Landmark",
        value: "Poonjar Town",
      },
    ],
  };
  return (
    
    <BrowserRouter>
        <div>
          <Routes>
            <Route path='/' element={
              <>
                <Navbar />
                <Hero/>
                <Countdown/>
                <About/>
                <Updates/>
                <Registration/>
                {/* <EarlyBird/> */}
                <Schedule/>
                <Speakers/>
                <Workshops/>
                <MapComponent  locationData={locationDetails}/>
                <Footer/>
              </>
              } />
            
          </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App