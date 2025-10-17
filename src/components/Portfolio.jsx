'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const projects = [
  { id: 1, title: 'Mobile Application Design', category: 'Branding', image: '/assets/images/projects/work1.jpg' },
  { id: 2, title: 'Website Makeup Design', category: 'Design', image: '/assets/images/projects/work2.jpg' },
  { id: 3, title: 'Brand Identity and Motion Design', category: 'Graphics', image: '/assets/images/projects/work3.jpg' },
  { id: 4, title: 'Mobile Application Design', category: 'Game', image: '/assets/images/projects/work4.jpg' },
  { id: 5, title: 'Application Design', category: 'Branding', image: '/assets/images/projects/work5.jpg' },
  { id: 6, title: 'Website Development', category: 'Design', image: '/assets/images/projects/work6.jpg' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="h-screen w-full bg-black text-gray-300 flex flex-col items-center overflow-hidden">
      <h2 className="text-3xl md:text-4xl text-white mb-4 sm:mb-6 font-light">Works & Projects</h2>
      <div className="w-full max-w-screen-2xl px-4 sm:px-6 md:px-8 lg:px-12 flex-1 min-h-0">
        <Swiper
          direction="vertical"
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="h-full w-full"
        >
          {projects.map((item, index) => (
            <SwiperSlide key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center justify-center h-full text-center px-4"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={900}
                  height={600}
                  className="rounded-2xl object-cover w-11/12 sm:w-4/5 md:w-3/4 lg:w-2/3 h-[48vh] sm:h-[54vh] md:h-[58vh]"
                />
                <span className="text-primary uppercase text-sm mt-4">{item.category}</span>
                <h3 className="text-white text-2xl md:text-3xl font-semibold mt-2">{item.title}</h3>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
