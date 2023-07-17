import React from 'react'
import './Solutions.css'

function Solutions() {
  return (
    <>
      <div className='solsection'>
        <div className='container1'>
          <div className='contain1'>
            Solutions Offered!!!
          </div>
        </div>
        <div className='container2'>
          <div className='box'>
            {/* <img src='/' alt='alt'/> */}
            <h4 className='content' style={{paddingLeft:'15px'}}>5G NETWORK IN A BOX LAB KIT </h4>
          </div>
          <div className='box'>
            <h4 className='content'>TELECOM CONSULTATION</h4>
          </div>
          <div className='box'>
            <h4 className='content'>IoT AUTOMATION</h4>
          </div>

          <div className='box'>
            <h4 className='content'>INDUSTRY 4.0</h4>
          </div>
          <div className='box'>
            <h4 className='content'>SMART CITY</h4>
          </div>
          <div className='box'>
            <h4 className='content'>WIRELESS</h4>
          </div>
          <div className='box'>
            <h4 className='content'>WIRELINE</h4>
          </div>
          {/* <div className='box'>FUTURE</div> */}
        </div>
      </div>
    </>
  )
}

export default Solutions
