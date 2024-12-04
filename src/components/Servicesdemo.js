import  { useRef } from "react";
import Servicepage from "./Servicepage";
import { useInView } from "framer-motion";
import Link from"next/link"
import Servicecard from "./Servicecard";
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
    {/* <Servicepage></Servicepage> */}
 
      </div>
    </>
  );
}
