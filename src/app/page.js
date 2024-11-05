"use client"


import { useEffect } from "react";
import Servicesdemo from "@/components/Servicesdemo";
import Whyus from "@/components/Whyus";
import Ceomsg from "@/components/Ceomsg";
export default function Home() {
  useEffect(() => {
    // alert($("#input").val())
  })

  return (
    <>
    {/* <Contact></Contact> */}
    {/* <Servicepage></Servicepage> */}
{/* <About></About> */}
   {/* <Webheader></Webheader>
   <Slider></Slider>
   */}
   <Servicesdemo></Servicesdemo>
   <Whyus></Whyus> 
   
    <Ceomsg></Ceomsg> 
     
    
    </>
  );
}
