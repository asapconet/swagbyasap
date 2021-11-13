import React from 'react'
// import 'App.scss'
import Navbar from './Containers/navbar'
import Onboard from './Containers/onboard'
import Incredible from './Containers/incredible'
import Featured from './Containers/featured'
import AcademyPreview from "./Containers/academyPreview";
import Benefits from './Containers/benefits'
import Products from './Containers/products'
import Testimonials from './Containers/testimonials'
import Footer from './Containers/footer'
import CounterSec from './Containers/counterSec'

const MainApp = () => {
  return (
    <main>
      <Navbar />
      <div className='onthe-gen'>
        <Onboard />
        <CounterSec />
      </div>
      <Incredible />
      <Featured />
      <AcademyPreview />
      <Benefits />
      <Products />
      <Testimonials />
      <Footer />
    </main>
  );
}

export default MainApp
