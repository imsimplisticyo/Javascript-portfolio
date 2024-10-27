"use client";
import { AnimatePresence,easeInOut,motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({children}) => {
  
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div 
        initial={{opacity:1}}
        animate={{opacity:0,transition:{delay:0.2,duration:0.2,ease:easeInOut}}}
        className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
        >

        </motion.div>
      </div>
      {children}
    </AnimatePresence>
  )
}

export default PageTransition
