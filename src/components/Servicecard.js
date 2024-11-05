"use client"
import React from 'react'
import {useEffect,useState} from "react"
import { AttentionSeeker, Bounce, Slide } from "react-awesome-reveal";
export default function Servicecard(props) {
   const [ks,setks] = useState([]);
    useEffect(()=>
        {
       let  ks1=(props.keyservices).map((k)=>
        {
            return <li>{k}</li>
        })
        setks(ks1)
    }
    ,[])
  return (
    <Slide   direction="up"  cascade damping={0.1} duration={500}>
    <section class="border-2 rounded-s shadow-xl my-5
     shadow-blue-800  p-2 antialiased w-full" style={{backgroundColor:props.clr}}>
    <article
        class=" flex flex-wrap w-full   text-white
         md:flex-nowrap gap-4 shadow-lg 
         group cursor-pointer transform duration-500
          hover:-translate-y-1">
      
        <div class="w-full">
            <div class="w-full">
                <h1 class="text-2xl   font-semibold 
                text-white p-2 ">
            {props.heading}
                </h1>
                <h2 className="text-center text-xl">{props.subheading}</h2>
                <p class="text-md text-blue-50 
                mt-2 leading-6">
                    {props.des}
                </p>
                <h2 className="py-2 text-xl">Key Services</h2>
                <ul className="list-disc list-inside">
                    {ks}
                </ul>
            </div>
          
        </div>
    </article>
</section>
</Slide>
  )
}
