import React from 'react'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const navigate = useNavigate();
    function goToHome(){
        navigate('/Home')
    }
  return (
    <div className="absolute inset-0 -z-10 h-full w-full  px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] flex justify-center items-center flex-col overflow-hidden sm:text-5xl">
        <h1 className='font-[future] text-white text-9xl'>Taskly</h1>
        <h3 className='text-white'>Turn Your Ideas into Action!</h3>
        <motion.button
      className="landingbt text-xl rounded-full mt-3 flex justify-center items-center text-white font-semibold border-2 ml-2
      hover:bg-blue-600
      "
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      onClick={goToHome}
    >Get Started</motion.button>
    </div>
  )
}
export default Landing;