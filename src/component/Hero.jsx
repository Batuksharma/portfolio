import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section
      className="relative flex-1 w-full h-screen mx-auto"
      style={{
        backgroundImage: `url('src/asset/herobg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px]  max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
        
        <div className="w-1 sm:h-80 h-40 violet-gradient" />
      </div>
      <div>
        <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Batuk</span></h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>I develop full stack 3d Websites,<br className="sm:block-hidden"/>Smart Contracts, AI Models & I am proficient in Java & Python Language</p>
</div>
</div>
<ComputersCanvas/>
 
<div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className=' w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-white mb-1'
            />
          </div>
        </a>
      </div>

      
    </section>
  );
};

export default Hero;

