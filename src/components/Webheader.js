"use client"
import React from 'react'
import Banner from './Banner'
import Header from './Header'
import Design from './Design'
// import p from ''
export default function Webheader() {
  return (
   
    <div className="w-full  h-[50dvh] md:h-screen bg-banner-bg bg-no-repeat
    bg-[url('../images/banner.avif')] 
   bg-opacity-5  bg-cover relative overflow-hidden">
    <div className="max-w-6xl mx-auto text-white">
      {/* Header */}
      <Header />
      {/* Banner */}
      {/* <div className="bg-blue-700 w-1/2"> */}
      <Banner />
      {/* </div> */}
    </div>
    {/* <div className="w-full h-screen absolute top-0 left-0">
      <Design />
    </div> */}
  </div>
  )
}
