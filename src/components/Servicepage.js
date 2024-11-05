
"use client"
import { useRef } from "react";
import { useInView } from "framer-motion";
import {motion} from "framer-motion"
import { AttentionSeeker, Bounce, Slide } from "react-awesome-reveal";
import Servicecard from "./Servicecard";
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
  <div className="flex   gap-12 w-full text-white ">
    
  <p className="w-2/3 text-center mx-auto flex pt-8 text-lg tracking-widest leading-8">
  Short intro that emphasizes your expertise in AI and development services, with a hint of personality
  lore
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
  </div>
 </Slide>



 <div class="container relative flex flex-col
 mt-6 justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 ">
    <h2 className="text-center text-3xl bg-blue-700 text-white text-bold">AI Software & Tools Integration:</h2>
<Servicecard heading="Computer Vision" clr="#1c64f3"
keyservices={keyservices[0]} subheading="Our AI sees what others don’t—whether it’s identifying patterns or recognizing faces.”"
 des="Leverage the power of Computer Vision to unlock insights from visual data. Whether you’re looking to enhance security, improve product quality, or deliver immersive augmented reality experiences, our Computer Vision solutions can help. By analyzing images and videos in real-time, we provide actionable insights that can transform how you do business."></Servicecard>

 <Servicecard heading="Natural Language Processing (NLP)" clr="#e91e63"
 subheading="“Turning text into insights—because words matter.”"
 keyservices={keyservices[1]}
 des="“In today’s data-driven world, the ability to analyze and understand text is crucial. Our NLP services transform unstructured text data into valuable insights, enabling you to make informed decisions. Whether it’s customer feedback, social media content, or internal documents, our NLP tools help you extract meaning and gain a deeper understanding of what’s being communicated.”"></Servicecard>

<Servicecard heading="Generative AI"
subheading="“Creating new possibilities—designs, content, and ideas straight from the minds of machines.”"
keyservices={keyservices[2]}
clr="#ffc107"
des="Generative AI is all about creativity and innovation. Our solutions empower you to generate new content—whether it’s text, images, or even entire design concepts—that aligns with your brand and vision. From automating content creation to exploring new design paradigms, Generative AI opens up a world of possibilities, allowing your business to innovate like never before.">
</Servicecard>

<Servicecard
heading="Machine Learning"
subheading="“Predictive models that give you a crystal ball into your business’s future.”"
clr="#00bcd4"
keyservices={keyservices[3]}
des="Harness the power of Machine Learning to stay ahead of the curve. Our predictive models analyze vast amounts of data to forecast trends, identify risks, and uncover opportunities you might not even know exist. Whether it’s optimizing operations, enhancing customer experiences, or driving revenue growth, our ML solutions are tailored to meet your specific needs, ensuring that you’re always one step ahead."></Servicecard>
     





    <h2 className="text-center text-3xl bg-blue-700 text-white text-bold">Development Services:</h2>
<Servicecard
heading="AI-Powered Web & Software Development"
subheading="Building intelligent and scalable solutions that not only look good but work brilliantly with AI integration."
clr="#e91e63"
keyservices={keyservices[4]}
des="In today’s AI-driven world, your website and software need to be more than just visually appealing—they must be smart and responsive to user needs. We build AI-powered, scalable, and secure web and software solutions that not only meet your business requirements but also offer a seamless, intelligent user experience. Our development services ensure your digital platforms are powered by AI, making your interactions smarter, faster, and more efficient."></Servicecard>    
</div>

 
</div>
    </>
  );
}
