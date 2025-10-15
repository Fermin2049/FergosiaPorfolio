'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
	return (
		<section
			id="about"
			className="about-area w-full bg-black text-gray-300 py-28 px-6 md:px-20"
		>
			<div className="container mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
					{/* === LEFT SIDE (Profile) === */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="about-image-part text-center border border-border rounded-2xl p-10 bg-[#121214] shadow-inner"
					>
						<Image
							src="/assets/images/about/profile.png"
							alt="About Me"
							width={300}
							height={300}
							className="mx-auto rounded-lg"
						/>
						<h2 className="text-3xl font-semibold text-white mt-6">
							Bentos Walker
						</h2>
						<p className="text-gray-400 mt-2">
							I am a Web Designer based in San Francisco.
						</p>

						{/* Social icons */}
						<div className="about-social text-center mt-6">
							<ul className="flex justify-center gap-6">
								<li>
									<a
										href="#"
										className="border border-white/5 p-3 rounded-lg text-xl hover:text-primary transition"
									>
										<i className="ri-facebook-circle-fill"></i>
									</a>
								</li>
								<li>
									<a
										href="#"
										className="border border-white/5 p-3 rounded-lg text-xl hover:text-primary transition"
									>
										<i className="ri-twitter-x-line"></i>
									</a>
								</li>
								<li>
									<a
										href="#"
										className="border border-white/5 p-3 rounded-lg text-xl hover:text-primary transition"
									>
										<i className="ri-linkedin-fill"></i>
									</a>
								</li>
								<li>
									<a
										href="#"
										className="border border-white/5 p-3 rounded-lg text-xl hover:text-primary transition"
									>
										<i className="ri-github-line"></i>
									</a>
								</li>
							</ul>
						</div>
					</motion.div>

					{/* === RIGHT SIDE (Text content) === */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="md:col-span-2 space-y-10"
					>
						{/* Intro */}
						<div className="about-content-part border border-border rounded-2xl p-10 bg-[#121214] shadow-inner">
							<p className="text-lg text-gray-400 mb-3">Hello There!</p>
							<h2 className="text-4xl leading-tight font-light text-white mb-6">
								I’m <span className="text-primary">Bentos Walker</span>, a
								product designer crafting user-centric designs with
								pixel-perfect precision.
							</h2>
							<div className="adress-field mb-4">
								<ul>
									<li className="flex items-center gap-3 text-green-400">
										<i className="ri-circle-fill text-xs"></i>
										Available for Freelancing
									</li>
								</ul>
							</div>
							<div className="hero-btns">
								<a
									href="#"
									className="theme-btn inline-block bg-primary text-white px-6 py-3 rounded-xl font-medium border border-border hover:bg-transparent hover:text-white transition"
								>
									Download CV <i className="ri-download-line ml-2"></i>
								</a>
							</div>
						</div>

						{/* Company list */}
						<div className="about-content-part-bottom border border-border rounded-2xl p-10 bg-[#121214] shadow-inner">
							<h2 className="text-3xl text-white mb-8">
								Companies I Worked With
							</h2>

							<div className="overflow-hidden">
								<div className="flex animate-scroll gap-12">
									{[
										'partner1.png',
										'partner2.png',
										'partner3.png',
										'partner4.png',
										'partner5.png',
										'partner1.png',
									].map((logo, idx) => (
										<Image
											key={idx}
											src={`/assets/images/client-logos/${logo}`}
											alt={`Partner ${idx + 1}`}
											width={120}
											height={60}
											className="opacity-80 hover:opacity-100 transition"
										/>
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
