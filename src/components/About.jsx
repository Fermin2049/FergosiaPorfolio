'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="h-screen w-full bg-black text-gray-300 flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-screen-xl px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center">
          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center border border-border rounded-2xl p-6 sm:p-8 md:p-10 bg-[#121214] shadow-inner"
          >
            <Image
              src="/assets/images/about/profile.png"
              alt="About Me"
              width={300}
              height={300}
              className="mx-auto rounded-lg w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 object-cover"
            />
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mt-6">Bentos Walker</h2>
            <p className="text-gray-400 mt-2 text-sm sm:text-base">Web Designer based in San Francisco.</p>
            <div className="mt-5">
              <ul className="flex justify-center gap-5 sm:gap-6">
                {['ri-facebook-circle-fill','ri-twitter-x-line','ri-linkedin-fill','ri-github-line'].map((icon) => (
                  <li key={icon}>
                    <a href="#" className="border border-white/5 p-2.5 sm:p-3 rounded-lg text-lg sm:text-xl hover:text-primary transition">
                      <i className={icon}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="border border-border rounded-2xl p-6 sm:p-8 md:p-10 bg-[#121214] shadow-inner">
              <p className="text-base sm:text-lg text-gray-400 mb-3">Hello There!</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl leading-tight font-light text-white mb-4">
                I'm <span className="text-primary">Bentos Walker</span>, a product designer crafting user-centric designs with pixel-perfect precision.
              </h2>
              <ul>
                <li className="flex items-center gap-3 text-green-400 text-sm sm:text-base">
                  <i className="ri-circle-fill text-xs"></i>
                  Available for Freelancing
                </li>
              </ul>
              <div className="mt-5">
                <a href="#" className="inline-block bg-primary text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base font-medium border border-border hover:bg-transparent hover:text-white transition">
                  Download CV <i className="ri-download-line ml-2"></i>
                </a>
              </div>
            </div>

            <div className="border border-border rounded-2xl p-6 sm:p-8 md:p-10 bg-[#121214] shadow-inner hidden md:block">
              <h2 className="text-2xl sm:text-3xl text-white mb-4">Companies I Worked With</h2>
              <div className="overflow-hidden">
                <div className="flex animate-scroll gap-10 sm:gap-12 opacity-80">
                  {[1,2,3,4,5,1].map((n, idx) => (
                    <Image key={idx} src={`/assets/images/client-logos/partner${n}.png`} alt={`Partner ${n}`} width={120} height={60} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

