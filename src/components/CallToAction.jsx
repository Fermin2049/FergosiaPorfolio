'use client';

import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <section id="call-to-action" className="h-screen w-full bg-black text-gray-300 flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-screen-xl px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center border border-border rounded-2xl p-8 sm:p-12 md:p-16 lg:p-20 bg-[#121214] shadow-inner max-w-3xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-4 sm:mb-6">
            Are You Ready to kickstart your project with a touch of <span className="text-primary">magic?</span>
          </h2>
          <p className="text-gray-400 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base">
            Reach out and let's make it happen. I'm also available for full-time or part-time opportunities.
          </p>
          <motion.a
            href="mailto:contact@bentos.com"
            className="inline-flex items-center gap-3 bg-primary text-white px-6 py-3 sm:px-8 sm:py-4 rounded-2xl text-sm sm:text-base font-medium border border-border hover:bg-transparent hover:text-white transition"
            whileTap={{ scale: 0.97 }}
          >
            Let's Talk <i className="ri-download-line text-lg"></i>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

