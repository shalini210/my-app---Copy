import React from "react";
import bannerRight from "../assets/bannerRight.png";
// import bannerRight from "../images/"
import Link from "next/link";
const Banner = () => {
  return (
    <div className="w-full flex justify-between 
    items-center text-center
     text-black ">
      <div className="flex flex-col gap-6 text-white mx-5 w-full 
      py-4 md:py-20  bg-opacity-30">
        <h3 className="md:text-xl sm:text-lg text-white   font-semibold">
        Unlock the Power of AI for Your Business
        </h3>
        <h1 className="sm:text-4xl md:text-4xl m-0  leading-tight text-white">
        Let’s Get Started,Your AI Journey Begins Here <br />{" "}
          <span className="font-bold">"Go AI"</span>
        </h1>
        <p className="text-sm text-white font-semibold">
        We build AI solutions that make your business smarter, faster, and ready for the future.”
        <br></br></p>
        <Link href="/contact" 
        className="w-44 bg-cyan-400 mt-5 px-4 md:px-6 py-2 md:py-4 text-xl font-bold 
        uppercase rounded-full self-center">
          Call us
        </Link>
        
      </div>
      <div>
        {/* <img src={bannerRight} alt="banner" className=" h-1/2 aspect-square"  /> */}
      </div>
    </div>
  );
};

export default Banner;
