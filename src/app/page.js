"use client"


import { useEffect } from "react";
import Servicesdemo from "@/components/Servicesdemo";
import Whyus from "@/components/Whyus";
import Ceomsg from "@/components/Ceomsg";
import About from "@/components/About";
export default function Home() {
  useEffect(() => {
    // alert($("#input").val())
  })

  return (
    <>
    
   <Servicesdemo></Servicesdemo>
   <About></About>
   {/* <Whyus></Whyus> 
   
    <Ceomsg></Ceomsg> 
     
     */}
    </>
  );
}
