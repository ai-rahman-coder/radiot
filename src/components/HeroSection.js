import React from 'react'
import './HeroSection.css'
function HeroSection() {
  return (
    <>
      <div className='hero'>
        <div className='heroleft'>
          <p className='heading'>
          RADIOT Solutions
          </p>
        </div>
        <div className='heroright'>
          <div className='logoborder'>
            <img src='/images/logo_removebg.png' alt='logo' className='herologo' />
          </div>
        </div>
      </div>



    </>
  )
}

export default HeroSection
