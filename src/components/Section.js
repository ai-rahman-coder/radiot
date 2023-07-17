import React from 'react'
import './Section.css'

function Section() {
    return (
        <>
            <section className='section'>
                <div className='wrapper'>
                    <div className='left'>
                        <div className='redefining'>
                            Redefining Connectivity, Empowering a  Smart World
                        </div>
                        <div className='futuristic'>
                            Radiot Solutions brings the futuristic IoT and telecommunication
                            technologies to your fingertips, enabling seamless communication and
                            automation.
                        </div>
                    </div>
                    <div className='image'>
                    </div>
                </div>
                <div className='wrapper'>
                    <div className='image'>
                    </div>
                    <div className='left'>
                        <div className='powerful'>
                            Powerful Products, Scalable Solutions
                        </div>
                        <div className='futuristic'>
                            Our cutting-edge products are designed to adapt and grow with your
                            evolving needs, ensuring peak performance.
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Section
