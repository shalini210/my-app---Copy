"use client"
import { useRef } from "react";
import { useInView } from "framer-motion";
import {motion} from "framer-motion"
import { AttentionSeeker, Bounce, Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";

export default function About() {
  return (
    <>
<div id="about" class="bg-gradient-to-r from-indigo-500
 from-10% via-sky-500 via-30% to-[#032D50] w-full">
    {/* <div className="bg-[#032D50]"> */}
    <Slide   direction="up"  cascade damping={0.1} duration={100}>
  <div className="text-white w-full text-center text-2xl py-12 ">
    About us
  </div>
  <div className="sm:flex-col  md:flex  mx-4 
   md:px-24 gap-0 md:gap-12  text-white ">
    <div className="w-full md:w-1/3  aspect-square bg-[#032D50]"></div>
  <p className="w-full  md:w-2/3 flex pt-12  md:text-lg
   tracking-widest leading-6 text-center">
  At [Your Company Name], we specialize in delivering advanced AI and machine learning solutions that drive measurable business outcomes. With a deep understanding of the latest technologies, we create customized AI systems that streamline operations, enhance decision-making, and unlock new growth opportunities for our clients. Our team of experts combines technical excellence with industry knowledge to deliver AI-driven innovations that keep businesses competitive in an evolving market.
  </p>
  </div>
</Slide>

<Slide  direction="r"> 
  <div className="text-white text-center  text-2xl py-7">
  Our Values
  </div>


<div className="flex-col md:flex md:gap-4  justify-around  bg-[#032D50]">
<AttentionSeeker effect="headShake" cascade damping={0.5}>
    <div className="py-7">
        
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Innovation & 	Integrity</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">We prioritize cutting-edge research and constantly explore new ways to leverage AI for impactful solutions.</p>
<p class="font-normal text-gray-700 dark:text-gray-400">We are committed to transparent, ethical practices in every aspect of our work.</p>
</a>
    </div>
    <div className=" py-7">        
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Collaboration</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">We work closely with clients, ensuring their goals and challenges are understood and addressed.</p>
<p class="font-normal text-gray-700 dark:text-gray-400">We work closely with clients, ensuring their goals and challenges </p>
</a>

    </div>
    <div className="   py-7">    
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Excellence</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">We deliver the highest standards in every project, focusing on results and long-term success.</p>
<p class="font-normal text-gray-700 dark:text-gray-400"> in every project, focusing on results and long-term success.</p>
</a>

    </div>
    </AttentionSeeker>
</div>



<div className=" flex-col md:flex  bg-[#032D50]  py-14 px-8 justify-center gap-12 ">
<div className="md:w-1/2 py-7">
<h1 class="text-3xl text-center font-bold text-white my-6">
      Our Approach</h1>
<div class="w-full  relative ">
      <div class="border-l-2 mt-2">
         {/* Card 1 */}
        <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
           {/* Dot Follwing the Left Vertical Line */}
          <div class="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

           {/* Line that connecting the box with the vertical line */}
          <div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

           {/* Content that showing in the box */}
          <div class="flex-auto">
            <h1 class="text-lg  font-bold">	Discovery</h1>
            <h1 class="text-sm"> Deep understanding of your business challenges through detailed consultations.</h1>
           
          </div>
          
        </div>

         {/* Card 2 */}
        <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-pink-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
           {/* Dot Follwing the Left Vertical Line */}
          <div class="w-5 h-5 bg-pink-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

           {/* Line that connecting the box with the vertical line */}
          <div class="w-10 h-1 bg-pink-300 absolute -left-10 z-0"></div>

           {/* Content that showing in the box */}
          <div class="flex-auto">
            <h1 class="text-lg font-bold">Design & Development</h1>
            <h1 class="text-sm">
            Building tailored AI solutions that align with your goals.</h1>
            
          </div>
          
        </div>

         {/* Card 3 */}
        <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-green-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
           {/* Dot Follwing the Left Vertical Line */}
          <div class="w-5 h-5 bg-green-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

           {/* Line that connecting the box with the vertical line */}
          <div class="w-10 h-1 bg-green-300 absolute -left-10 z-0"></div>

           {/* Content that showing in the box */}
          <div class="flex-auto">
            <h1 class="text-lg font-bold">	Testing & Validation</h1>
            <h1 class="text-sm ">
            Ensuring reliability and accuracy through thorough testing.</h1>
        
          </div>
          
        </div>

         {/* Card 4 */}
        <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-purple-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
           {/* Dot Follwing the Left Vertical Line */}
          <div class="w-5 h-5 bg-purple-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

           {/* Line that connecting the box with the vertical line */}
          <div class="w-10 h-1 bg-purple-300 absolute -left-10 z-0"></div>

           {/* Content that showing in the box */}
          <div class="flex-auto">
            <h1 class="text-lg font-bold">	Deployment & Support</h1>
            <h1 class="text-sm ">Ongoing support to ensure optimal performance and continuous improvement.</h1>
            
          </div>
          
        </div>

    </div>
</div>
</div>
<div className="md:w-1/3 py-7 text-white">
{/* <h1 class="text-3xl text-center font-bold text-white my-6">
      Our Approach</h1> */}
      <p className="leading-8">Our client-focused approach ensures that every AI solution we develop is tailored to meet specific business needs. From the initial consultation to deployment, we work alongside our clients to ensure seamless integration of AI technology into their operations.</p>
</div>    

</div>
</Slide>
</div>
    </>
  );
}
