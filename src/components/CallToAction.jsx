'use client';

import { motion } from 'framer-motion';

export default function CallToAction() {
	return (
		<section
			className="call-to-action-area w-full bg-black text-gray-300 py-24 px-6 md:px-20"
			id="call-to-action"
		>
			<div className="container mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="call-to-action-part text-center border border-border rounded-2xl p-12 md:p-20 bg-[#121214] shadow-inner"
				>
					<h2 className="text-3xl md:text-4xl font-light text-white mb-6">
						Are You Ready to kickstart your project with a touch of{' '}
						<span className="text-primary">magic?</span>
					</h2>

					<p className="text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
						Reach out and let's make it happen ✨. I'm also available for
						full-time or part-time opportunities to push the boundaries of
						design and deliver exceptional work.
					</p>

					<motion.a
						href="mailto:contact@bentos.com"
						className="theme-btn inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-medium border border-border hover:bg-transparent hover:text-white transition"
						whileTap={{ scale: 0.97 }}
					>
						Let's Talk <i className="ri-download-line text-lg"></i>
					</motion.a>
				</motion.div>
			</div>
		</section>
	);
}
