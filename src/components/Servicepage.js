
"use client"
import { useRef } from "react";
import { useInView } from "framer-motion";
import {motion} from "framer-motion"
import { AttentionSeeker, Bounce, Slide } from "react-awesome-reveal";
import Servicecard from "./Servicecard";
import computervision from "../images/cv.jpg"
export default function Servicepage() {
    var keyservices=[[
        "Image and Video Recognition for Security and Surveillance",
"	Facial Recognition for Authentication and Access Control",
"	Quality Inspection Systems for Manufacturing",
"	Augmented Reality Solutions for Retail and Gaming"

    ],[
    "	Sentiment Analysis for Brand Monitoring",
    	"Chatbots and Virtual Assistants for Customer Support",
    	"Text Summarization for Quick Information Access",
    	"Real-Time Language Translation for Global Communication"
    
    ],[
"AI-Driven Content Creation for Marketing and Media",
        	"Design and Prototyping Tools for Product Development",
	"AI-Generated Music and Art for Creative Projects",
	"Synthetic Data Generation for Enhanced Model Training"

    ],
[
 "Predictive Analytics for Sales and Marketing",
"Customer Segmentation and Behavior Analysis",
"Fraud Detection and Risk Management",
"Recommendation Systems for Personalized User Experiences"

],
[
	"AI-Enhanced Web Development for Smarter User Interactions",
	"Full-Stack Development with Integrated Machine Learning and AI Solutions",
	"AI-Driven E-Commerce Platforms with Personalized User Experiences",
	"AI-Integrated Mobile App Development for iOS and Android"

]]
  return (
    <>
{/* <div class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-[#032D50]"> */}
<div id="services" className="h-auto bg-gradient-to-br from-indigo-300 via-cyan-500 to-blue-900">
    {/* <div className="bg-[#032D50]"> */}
    <Slide   direction="left"  cascade damping={0.1} duration={500}>
  <div className="text-white text-center text-3xl pt-12 ">
  Our Services
  <br></br>
  <span className="text-lg"> Where Innovation Meets Practicality</span>
  
  </div>
  {/* <div className="flex   gap-12 w-full text-white ">
    
  <p className="w-2/3 text-center mx-auto flex pt-8 text-lg tracking-widest leading-8">
  Short intro that emphasizes your expertise in AI and development services, with a hint of personality
  lore
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
  </div> */}
 </Slide>

 <div id="accordion-collapse" data-accordion="collapse">
  <h2 id="accordion-collapse-heading-1">
    <button type="button" class="flex items-center focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 justify-between p-5 w-full font-medium text-left border border-gray-200 dark:border-gray-700 border-b-0 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-t-xl" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
      <span>Computer Vision</span>
      <svg data-accordion-icon class="w-6 h-6 shrink-0 rotate-180" fill="currentColor" viewBox="0 0 20 20" xmlns="w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-1" aria-labelledby="accordion-collapse-heading-1">
    <div class="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900 border-b-0">
    <Servicecard heading="Computer Vision" clr="#1c64f3" className=""
keyservices={keyservices[0]} 
 subheading="Our AI sees what others don’t—whether it’s identifying patterns or recognizing faces.”"
 des="Leverage the power of Computer Vision to unlock insights from visual data. Whether you’re looking to enhance security, improve product quality, or deliver immersive augmented reality experiences, our Computer Vision solutions can help. By analyzing images and videos in real-time, we provide actionable insights that can transform how you do business."></Servicecard>
</div>
<div className="flex h-full w-full bg-[#e91e63] px:0 md:px-2 bg-[url('../images/NLP.jpg')]">
    

    </div>
  </div>
  <h2 id="accordion-collapse-heading-2">
    <button type="button" class="flex items-center focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 justify-between p-5 w-full font-medium border border-gray-200 dark:border-gray-700 border-b-0 text-left text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
      <span>Natural Language Processing (NLP)</span>
      <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-2" class="hidden h-[500px]" 
  aria-labelledby="accordion-collapse-heading-2">
    <div class="p-5 border border-gray-200 h-full dark:border-gray-700 border-b-0 flex">
    <Servicecard heading="Natural Language Processing (NLP)" 
 subheading="“Turning text into insights—because words matter.”"
 keyservices={keyservices[1]}
 des="“In today’s data-driven world, the ability to analyze and understand text is crucial. Our NLP services transform unstructured text data into valuable insights, enabling you to make informed decisions. Whether it’s customer feedback, social media content, or internal documents, our NLP tools help you extract meaning and gain a deeper understanding of what’s being communicated.”"></Servicecard>
    
    <div class="w-1/2 bg-[url(../images/NLP.jpg)] h-full bg-cover"></div>
    </div>
  </div>
  <h2 id="accordion-collapse-heading-3">
    <button type="button" class="flex items-center border focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 border-gray-200 dark:border-gray-700 justify-between p-5 w-full font-medium text-left text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
      <span>Generative AI</span>
      <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
    <div class="p-5 border border-gray-200 dark:border-gray-700 border-t-0">
    <Servicecard heading="Generative AI"
subheading="“Creating new possibilities—designs, content, and ideas straight from the minds of machines.”"
keyservices={keyservices[2]}
// clr="#ffc107"
des="Generative AI is all about creativity and innovation. Our solutions empower you to generate new content—whether it’s text, images, or even entire design concepts—that aligns with your brand and vision. From automating content creation to exploring new design paradigms, Generative AI opens up a world of possibilities, allowing your business to innovate like never before.">
</Servicecard> </div>
  </div>

  <h2 id="accordion-collapse-heading-4">
    <button type="button" class="flex items-center border focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 border-gray-200 dark:border-gray-700 justify-between p-5 w-full font-medium text-left text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-4">
      <span>Machine Learning</span>
      <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-4" class="hidden" aria-labelledby="accordion-collapse-heading-4">
    <div class="p-5 border border-gray-200 dark:border-gray-700 border-t-0">
    <Servicecard
heading="Machine Learning"
subheading="“Predictive models that give you a crystal ball into your business’s future.”"
// clr="#00bcd4"
keyservices={keyservices[3]}
des="Harness the power of Machine Learning to stay ahead of the curve. Our predictive models analyze vast amounts of data to forecast trends, identify risks, and uncover opportunities you might not even know exist. Whether it’s optimizing operations, enhancing customer experiences, or driving revenue growth, our ML solutions are tailored to meet your specific needs, ensuring that you’re always one step ahead."></Servicecard>
    
     </div>
  </div>


  <h2 id="accordion-collapse-heading-5">
    <button type="button" class="flex items-center border focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 border-gray-200 dark:border-gray-700 justify-between p-5 w-full font-medium text-left text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-5">
      <span>AI-Powered Web & Software Development</span>
      <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-5" class="hidden" aria-labelledby="accordion-collapse-heading-5">
    <div class="p-5 border border-gray-200 dark:border-gray-700 border-t-0">
    <Servicecard
heading="AI-Powered Web & Software Development"
subheading="Building intelligent and scalable solutions that not only look good but work brilliantly with AI integration."
// clr="#e91e63"
keyservices={keyservices[4]}
des="In today’s AI-driven world, your website and software need to be more than just visually appealing—they must be smart and responsive to user needs. We build AI-powered, scalable, and secure web and software solutions that not only meet your business requirements but also offer a seamless, intelligent user experience. Our development services ensure your digital platforms are powered by AI, making your interactions smarter, faster, and more efficient."></Servicecard>     </div>
  </div>
</div>



 <div class="container relative flex flex-col
 mt-6 justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 ">
    <h2 className="text-center text-3xl bg-blue-700 
    text-white text-bold">AI Software & Tools Integration:</h2>
    <div className="flex h-full w-full bg-[#1c64f3] px:0 md:px-2">
{/* <img src={computervision}></img> */}
<div className=" bg-[url('../images/cv.jpg')] w-full bg-cover bg-center  rounded-full">
</div>

 
</div>
<div className="flex h-full w-full  px:0 md:px-2 bg-[url('../images/GENAI.jpg')]
">

</div>
<div className="flex h-full w-full  px:0 md:px-2 bg-[url('../images/ML.jpg')]
bg-cover bg-top
">

 </div>





    <h2 className="text-center text-3xl bg-blue-700 text-white text-bold">Development Services:</h2>
    <div className="flex h-full w-full  px:0 md:px-2 bg-[url('../images/SD.jpg')]
bg-cover bg-top
">


</div>
</div>
 
</div>
<script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"></script>
    </>
  );
}
