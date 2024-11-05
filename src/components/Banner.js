import React from "react";
import bannerRight from "../assets/bannerRight.png";
// import bannerRight from "../images/"
import Link from "next/link";
const Banner = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex flex-col gap-6">
        <h3 className="text-xl text-cyan-400 font-semibold">
          lorem ipsum dummy text
        </h3>
        <h1 className="text-6xl text-gray-300 leading-tight">
          Lorem ipsum <br />{" "}
          <span className="font-bold text-white">"Go AI"</span>
        </h1>
        <p className="text-sm text-gray-300 font-semibold">
          your tag line lorem ipsum your tag line lorem ipsum 
        </p>
        <Link href="/contact" 
        className="w-44 bg-cyan-400 px-6 py-4 text-xl font-bold 
        uppercase rounded-full">
          Call us
        </Link>
      </div>
      <div>
        <img src={bannerRight} alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
