"use client"
import React from 'react'
import Banner from './Banner'
import Header from './Header'
import Design from './Design'
// import p from ''
export default function Webheader() {
  return (
   
    <div className="w-full h-screen bg-banner-bg bg-no-repeat
    bg-[url('../images/bannerbg1.jpg')] 
   bg-opacity-5  bg-top bg-cover relative overflow-hidden">
    <div className="max-w-6xl mx-auto text-white">
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
    </div>
    <div className="w-full h-screen absolute top-0 left-0">
      <Design />
    </div>
  </div>
  )
}
