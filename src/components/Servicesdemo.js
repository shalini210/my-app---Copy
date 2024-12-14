import Servicepage, { useRef } from "react";
import { useInView } from "framer-motion";
import Link from"next/link"
// import viewpor
// import "./styles.css";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (

    <section ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 :0,
          
          transition: "all 0.2s linear "
        //   transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 0.5) 0s"
        }}
      >
        {children}
      </div>
    </section>
  );
}

export default function Servicesdemo() {
  return (
    <>
    <div id='services' className="relative bg-fixed overflow-hidden
 bg-[#032e50] pt-16 pb-32  space-y-36 md:px-8">

      <Section className="pt-2 "> 
    
        <div className="px-2 lg:mx-auto
         lg:grid lg:max-w-7xl lg:grid-flow-col-dense
          lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="max-w-xl 
            lg:mx-0 lg:max-w-none  lg:px-0 ">

                <div className='flex w-full gap-8 sm:px-6'>
                   
                        <span className="flex h-12 aspect-square
                        items-center justify-center rounded-xl 
                         bg-pink-500">
     <svg xmlns="http://www.w3.org/2000/svg" fill="none"
      viewBox="0 0 24 24"  stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                className="h-8 w-8 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z">
                                </path>
                            </svg>
                        </span>
               

                    <div >
                        
      <div className=" sm:text-xl text-xl  md:text-3xl  font-bold tracking-tight text-white">
                        AI Solutions
                        </div>
                        <p className="mt-4 text-md md:text-xl text-gray-300">
                            The AI product utilizes advanced NLP algorithms to understand and interpret human language,
                            enabling it to accurately process and analyze text-based inputs.
                        </p>
                        <div className="mt-6">
                            {/* <a className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                                href="/login">
                                Learn More
                            </a> */}
                            <Link 
                             className="inline-flex rounded-lg
                              bg-pink-600 px-4 py-1.5
                               text-base font-semibold 
                               leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700" href="/services#services">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className=" sm:mx-0 sm:-mr-48  md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0 ">
                    <img loading="lazy" 
                        className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                        style={{color:"transparent"}} src="https://images.unsplash.com/photo-1569144157591-c60f3f82f137"/>
                </div>
            </div>
       
    </div>
        </Section>


       
      <Section>    
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense 
        lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none  lg:px-0 
            lg:col-start-2">
                <div>
                    <div className='flex gap-8 w-full sm:px-6'>
                        <span className="flex h-12 aspect-square items-center justify-center rounded-xl bg-pink-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                className="h-8 w-8 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z">
                                </path>
                            </svg>
                        </span>
                   <div>
                        <div className="text-3xl font-bold tracking-tight text-white">
                        Data Analytics
                        </div>
                    
                        <p className="mt-4 text-lg text-gray-300">
                            The product has built-in sentiment analysis capabilities, allowing it to determine the
                            sentiment (positive, negative, or neutral) expressed in text or customer feedback.
                        </p>
                        <div className="mt-6">
                            {/* <a className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                                href="/login">
                                Learn More
                            </a> */}
             <Link  className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700" href="/services#services">Learn More</Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="sm:mx-0 sm:-mr-48  md:-mr-16 sm:-ml-48 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                    <img alt="Inbox user interface" loading="lazy"
                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                        style={{color:"transparent"}} src="https://images.unsplash.com/photo-1599134842279-fe807d23316e"/>
                </div>
            </div>
        </div>
   </Section>

 {/* computer vision */}
 <Section className="pt-2 "> 
    
    <div className="px-2 lg:mx-auto
     lg:grid lg:max-w-7xl lg:grid-flow-col-dense
      lg:grid-cols-2 lg:gap-24 lg:px-8 ">
        <div className="max-w-xl 
        lg:mx-0 lg:max-w-none  lg:px-0 ">

            <div className='flex w-full gap-8 sm:px-6'>
               
                    <span className="flex h-12 aspect-square
                    items-center justify-center rounded-xl 
                     bg-pink-500">
 <svg xmlns="http://www.w3.org/2000/svg" fill="none"
  viewBox="0 0 24 24"  stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                            className="h-8 w-8 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z">
                            </path>
                        </svg>
                    </span>
           

                <div >
                    
  <div className=" sm:text-xl text-xl  md:text-3xl  font-bold tracking-tight text-white">
  Computer Vision
                    </div>
                    <p className="mt-4 text-md md:text-xl text-gray-300">
                    Our AI sees what others don’t—whether it’s identifying patterns or recognizing faces.”
Leverage the power of Computer Vision to unlock insights from visual data. 
                    </p>
                    <div className="mt-6">
                        {/* <a className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                            href="/login">
                            Learn More
                        </a> */}
                        <Link 
                         className="inline-flex rounded-lg
                          bg-pink-600 px-4 py-1.5
                           text-base font-semibold 
                           leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700" href="/services#services">Learn More</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className=" sm:mx-0 sm:-mr-48  md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0 ">
                <img loading="lazy" 
                    className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    style={{color:"transparent"}} src="https://images.unsplash.com/photo-1569144157591-c60f3f82f137"/>
            </div>
        </div>
   
</div>
    </Section>


        {/* computer vision end*/}

{/* NLP start  */}

 
<Section>    
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense 
        lg:grid-cols-2 lg:gap-14 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none  lg:px-0 
            lg:col-start-2">
                <div>
                    <div className='flex gap-8 w-full sm:px-6'>
                        <span className="flex h-12 aspect-square items-center justify-center rounded-xl bg-pink-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                className="h-8 w-8 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z">
                                </path>
                            </svg>
                        </span>
                   <div>
                        <div className="text-3xl font-bold tracking-tight text-white">
                        Natural Language Processing (NLP)
                        </div>
                    
                        <p className="mt-4 text-lg text-gray-300">
                        “Turning text into insights—because words matter.”
In today’s data-driven world, the ability to analyze and understand text is crucial. Our NLP services transform unstructured text data into valuable insights, enabling you to make informed decisions. 
                        </p>
                        <div className="mt-6">
                            {/* <a className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                                href="/login">
                                Learn More
                            </a> */}
             <Link  className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700" href="/services#services">Learn More</Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="sm:mx-0 sm:-mr-48  md:-mr-16 sm:-ml-48 
                sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                    <img alt="Inbox user interface" loading="lazy"
                        className="w-full rounded-xl shadow-xl ring-1
                         ring-black ring-opacity-5 lg:absolute lg:right-0
                          lg:h-full lg:w-auto lg:max-w-none"
                        style={{color:"transparent"}} src="https://images.unsplash.com/photo-1599134842279-fe807d23316e"/>
                </div>
            </div>
        </div>
   </Section>


{/* NLP end */}


      <Section>
        <div className="lg:mx-auto lg:grid lg:max-w-7xl
         lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none  lg:px-0 ">
                <div>
                    <div className='flex w-full gap-8 sm:px-6'>
                        <span className="flex h-12 aspect-square items-center 
                        justify-center rounded-xl bg-pink-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                className="h-8 w-8  text-white">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z">
                                </path>
                            </svg>
                        </span>
                 
                    <div>
                        <div className="text-3xl font-bold tracking-tight text-white">
                        Development Services
                        </div>
                        <p className="mt-4 text-lg text-gray-300">
                            The AI product can generate human-like written content, summaries, or reports based on
                            structured data or analysis results.
                        </p>
                        <div className="mt-6">
                            {/* <a className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                                href="/login">
                                Learn More
                            </a> */}
                            <Link  className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700" href="/services#services">Learn More</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="sm:-mr-48 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                    <img loading="lazy"
                        className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                        style={{color:"transparent"}}
                        src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e"/>
                </div>
            </div>
        </div>
   </Section>

      </div>
    </>
  );
}
