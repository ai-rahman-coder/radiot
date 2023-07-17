import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='horizontal'>
                    <div className='vertical'>
                        <div className='product'>
                            Product
                        </div>
                        <div className='prorows'>
                            <div className='profeatures'>
                                Features
                            </div>
                            <div className='profeatures'>
                                Learn
                            </div>
                        </div>
                    </div>
                    {/* <div className='vertical'>
                        <div className='product'>
                            Templates
                        </div>
                        <div className='prorows'>
                            <div className='profeatures'>
                                Blog
                            </div>
                            <div className='profeatures'>
                                Person
                            </div>
                            <div className='profeatures'>
                                Startup
                            </div>
                        </div>
                    </div> */}
                    <div className='vertical'>
                        <div className='product'>
                            Resources
                        </div>
                        <div className='prorows'>
                            <div className='profeatures'>
                                Updates
                            </div>
                            <div className='profeatures'>
                                Community
                            </div>
                            <div className='profeatures'>
                                Contact
                            </div>
                        </div>
                    </div>
                </div>
                <div className='copyright'>
                    <div className='radiotcopy'>
                        @ 2022 Radiot Solutions.
                    </div>
                    <div className='foticons'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                            <path d="M 0 0 L 20 0 L 20 20 L 0 20 Z" fill="transparent"></path>
                            <path d="M 7.5 10 C 7.5 8.619 8.619 7.5 10 7.5 C 11.381 7.5 12.5 8.619 12.5 10 C 12.5 11.381 11.381 12.5 10 12.5 C 8.619 12.5 7.5 11.381 7.5 10 Z" fill="rgb(255,255,255)"></path>
                            <path d="M 13.438 2.188 L 6.563 2.188 C 4.146 2.188 2.188 4.146 2.188 6.563 L 2.188 13.438 C 2.188 15.854 4.146 17.813 6.563 17.813 L 13.438 17.813 C 15.854 17.813 17.813 15.854 17.813 13.438 L 17.813 6.563 C 17.813 4.146 15.854 2.188 13.438 2.188 Z M 10 13.75 C 7.929 13.75 6.25 12.071 6.25 10 C 6.25 7.929 7.929 6.25 10 6.25 C 12.071 6.25 13.75 7.929 13.75 10 C 13.75 12.071 12.071 13.75 10 13.75 Z M 14.063 6.875 C 13.545 6.875 13.125 6.455 13.125 5.938 C 13.125 5.42 13.545 5 14.063 5 C 14.58 5 15 5.42 15 5.938 C 15 6.455 14.58 6.875 14.063 6.875 Z" fill="rgb(255,255,255)"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                            <path d="M 0 0 L 20 0 L 20 20 L 0 20 Z" fill="transparent"></path>
                            <path d="M 19.195 6.07 L 16.836 8.422 C 16.367 13.883 11.758 18.125 6.25 18.125 C 5.117 18.125 4.18 17.945 3.469 17.594 C 2.898 17.305 2.664 17 2.602 16.906 C 2.497 16.747 2.47 16.549 2.53 16.368 C 2.589 16.187 2.728 16.043 2.906 15.977 C 2.922 15.969 4.766 15.266 5.961 13.914 C 5.22 13.386 4.568 12.743 4.031 12.008 C 2.961 10.555 1.828 8.031 2.508 4.266 C 2.551 4.038 2.716 3.852 2.938 3.781 C 3.16 3.709 3.404 3.766 3.57 3.93 C 3.594 3.961 6.195 6.523 9.375 7.352 L 9.375 6.875 C 9.381 5.874 9.785 4.917 10.497 4.214 C 11.209 3.51 12.171 3.119 13.172 3.125 C 14.495 3.144 15.711 3.856 16.375 5 L 18.75 5 C 19.002 4.999 19.23 5.15 19.328 5.383 C 19.42 5.618 19.368 5.886 19.195 6.07 Z" fill="rgb(255,255,255)"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
