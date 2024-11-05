import { useRef } from "react";
import { useInView } from "framer-motion";
import {motion} from "framer-motion"
export default function Whyus() 
{
  
  
function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (

    <section ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateY(500px)",
          opacity: isInView ? 1 :0,
          
          transition: "all 0.5s linear "
        }}
      >
        {children}
      </div>
    </section>
  );
}






function Section1({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (

    <section ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateX(100px)",
          opacity: isInView ? 1 :0,
          
          transition: "all 0.5s linear "
        }}
      >
        {children}
      </div>
    </section>
  );
}
  return(
  <Section>
  <div>
      <div className="w-full mx-auto py-8 px-4 text-white lg:py-16 lg:px-6 bg-[#032e50] bg-fixed">
    <div className="text-center mb-10">
        {/* <h2 >Why Us</h2> */}
      
        <motion.h1 className="text-2xl tracking-tight  text-pink-600"
        animate={{opacity:1, scale:1.5 }}
        transition={{
          duration: 1,
          
          // ease: [0.5, 0.71, 1, 1.5],
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        whileHover={{ scale: 1.2 }}
      >
        Why us
      </motion.h1>
    </div>

    <div className="flex flex-col md:flex-row">
        
        <div className="mr-0 md:mr-8 mb-6 md:mb-0">
            <img className="w-1/2 md:w-full mx-auto"
             src="https://placeholder.pics/svg/400"
             alt="can_help_banner"/>
        </div>
        

        <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
             <Section1>
                <motion.div 
                 animate={{opacity:1, scale:1 }}
                 transition={{
                   duration: 1,
                   
                   ease: [0.5, 0.71, 1, 1.5],
                 }}
                 initial={{ opacity: 0, scale: 0.5 }}
                 whileHover={{ scale: 1.1 }}
                 className="h-full py-4 px-6 ">
                    <h3 className="text-2xl  text-md mb-6">We Get AI (And We Get You)</h3>
                    <p className="text-sm">
                    Our solutions are tailored to fit your business, not the other way around.
                    At [Your Company Name], we’re not just experts in AI; we’re experts in understanding and serving you. By merging our AI prowess with a deep appreciation of your unique needs, we deliver solutions that drive real, tangible results for your business.</p>
                </motion.div>
                </Section1>
            </div>
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <Section1>
              <motion.div 
                 animate={{opacity:1, scale:1 }}
                 transition={{
                   duration: 1,                   
                   ease: [0.5, 0.71, 1, 1.5],
                 }}
                 initial={{ opacity: 0, scale: 0.5 }}
                 whileHover={{ scale: 1.1 }} className="h-full py-4 px-6 ">
                    <h3 className="text-2xl  text-md mb-6">Results That Speak  Themselves</h3>
                    <p className="text-sm">Our solutions have delivered transformative results for clients across various sectors. Whether it’s boosting efficiency, increasing revenue, or enhancing customer satisfaction, the positive outcomes are clear and measurable.</p>
                </motion.div>
                </Section1>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2 ">
            <Section1>
            <motion.div 
                 animate={{opacity:1, scale:1 }}
                 transition={{
                   duration: 1,                   
                   ease: [0.5, 0.71, 1, 1.5],
                 }}
                 initial={{ opacity: 0, scale: 0.5 }}
                 whileHover={{ scale: 1.1 }} className="h-full py-4 px-6 
                 ">
                    <h3 className="text-2xl  text-md mb-6"> Customer Support</h3>
                    <p className="text-sm">Our customer support team is available around the 
                    clock to answer any questions, resolve any issues, and provide helpful solutions. Whether it's through email, phone, or live chat, we're always here to support you.</p>
                </motion.div>
                </Section1>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2 ">
            <Section1>
            <motion.div 
                 animate={{opacity:1, scale:1 }}
                 transition={{
                   duration: 1,
                   
                   ease: [0.5, 0.71, 1, 1.5],
                 }}
                 initial={{ opacity: 0, scale: 0.5 }}
                 whileHover={{ scale: 1.1 }} className="h-full py-4 px-6
                 ">
                    <h3 className="text-2xl  text-md mb-6">Client-Centric Approach</h3>
                    <p className="text-sm">Your success is our priority, and we’re with you
                     every step of the way.By prioritizing your needs and focusing on delivering exceptional value, our client-centric approach ensures that you receive the highest level of service and support.
                    </p>
                </motion.div>
                </Section1>
            </div>
        </div>
    </div>
</div>
    </div>
    </Section>
  )
}
