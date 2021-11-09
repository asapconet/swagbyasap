import React from 'react'
import Navbar from './Containers/navbar'
import Onboard from './Containers/onboard'
import Incredible from './Containers/incredible'
import Featured from './Containers/featured'
import AcademyPreview from "./Containers/academyPreview";
import Benefits from './Containers/benefits'
import Products from './Containers/products'
import Testimonials from './Containers/testimonials'
import Footer from './Containers/footer'

const MainApp = () => {
  return (
    <main>
      <Navbar/>
      <Onboard/>
      <Incredible/>
      <Featured/>
      <AcademyPreview/>
      <Benefits/>
      <Products/>
      <Testimonials/>
      <Footer/>
    </main>
  )
}

export default MainApp
