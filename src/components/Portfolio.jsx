'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
	{
		id: 1,
		title: 'Mobile Application Design',
		category: 'Branding',
		image: '/assets/images/projects/work1.jpg',
	},
	{
		id: 2,
		title: 'Website Makeup Design',
		category: 'Design',
		image: '/assets/images/projects/work2.jpg',
	},
	{
		id: 3,
		title: 'Brand Identity and Motion Design',
		category: 'Graphics',
		image: '/assets/images/projects/work3.jpg',
	},
	{
		id: 4,
		title: 'Mobile Application Design',
		category: 'Game',
		image: '/assets/images/projects/work4.jpg',
	},
	{
		id: 5,
		title: 'Application Design',
		category: 'Branding',
		image: '/assets/images/projects/work5.jpg',
	},
	{
		id: 6,
		title: 'Website Development',
		category: 'Design',
		image: '/assets/images/projects/work6.jpg',
	},
];

export default function Portfolio() {
	return (
		<section
			id="portfolio"
			className="projects-area bg-black text-gray-300 py-24 px-6 md:px-20"
		>
			<div className="container mx-auto">
				{/* === Section Title === */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12"
				>
					<h2 className="text-4xl md:text-5xl text-white font-light mb-4">
						Works & Projects
					</h2>
					<p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base">
						Check out some of my design projects, meticulously crafted with love
						and dedication — each one reflecting the passion and precision I
						pour into every detail.
					</p>
				</motion.div>

				{/* === Filter Buttons === */}
				<motion.ul
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="filter-btns-one flex flex-wrap justify-center gap-6 pb-8 text-sm font-medium"
				>
					{['Show All', 'Design', 'Branding', 'Marketing', 'Game'].map(
						(filter, idx) => (
							<li
								key={idx}
								className={`cursor-pointer transition pb-1 border-b-2 border-transparent hover:text-primary hover:border-primary ${
									idx === 0 ? 'text-primary border-primary' : 'text-gray-400'
								}`}
							>
								{filter}
							</li>
						)
					)}
				</motion.ul>

				{/* === Projects Grid === */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((item, index) => (
						<motion.article
							key={item.id}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="project-item border border-border rounded-2xl bg-[#121214] overflow-hidden group"
						>
							<div className="relative overflow-hidden">
								<Image
									src={item.image}
									alt={item.title}
									width={600}
									height={400}
									className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
								/>
								{/* Hover Icon Overlay */}
								<div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
									<div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center transform -rotate-45 text-xl">
										<i className="ri-arrow-right-up-line"></i>
									</div>
								</div>
							</div>

							<div className="p-6">
								<span className="text-primary text-sm uppercase tracking-wide">
									{item.category}
								</span>
								<h3 className="text-lg font-medium text-white mt-2">
									{item.title}
								</h3>
							</div>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
}
