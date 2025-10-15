'use client';

import { useCallback, useMemo, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Mousewheel, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { motion } from 'framer-motion';

import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';
import CallToAction from './CallToAction';
import Footer from './Footer';
import { SwiperContext } from './SwiperContext';

export default function HorizontalSwiper() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [instance, setInstance] = useState(null);

	const slideTo = useCallback(
		(i) => {
			if (instance) instance.slideTo(i);
		},
		[instance]
	);

	const contextValue = useMemo(
		() => ({ activeIndex, slideTo }),
		[activeIndex, slideTo]
	);

	return (
		<SwiperContext.Provider value={contextValue}>
			<Swiper
				onSwiper={setInstance}
				onSlideChange={(s) => setActiveIndex(s.activeIndex)}
				modules={[Keyboard, Mousewheel, Pagination, A11y]}
				slidesPerView={1}
				direction="horizontal"
				speed={800}
				keyboard={{ enabled: true, onlyInViewport: true }}
				mousewheel={true}
				pagination={{ clickable: true }}
				className="w-screen h-screen"
			>
				{/* Slide 1: Header + About */}
				<SwiperSlide>
					<section className="w-full h-screen bg-background">
						<div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center gap-10 px-6">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6 }}
								className="w-full"
							>
								<Header />
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.1 }}
								className="w-full"
							>
								<About />
							</motion.div>
						</div>
					</section>
				</SwiperSlide>

				{/* Slide 2: Portfolio */}
				<SwiperSlide>
					<section className="w-full h-screen bg-background">
						<div className="mx-auto flex h-full max-w-6xl items-center justify-center px-6">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="w-full"
							>
								<Portfolio />
							</motion.div>
						</div>
					</section>
				</SwiperSlide>

				{/* Slide 3: Call To Action */}
				<SwiperSlide>
					<section className="w-full h-screen bg-background">
						<div className="mx-auto flex h-full max-w-6xl items-center justify-center px-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.97 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="w-full"
							>
								<CallToAction />
							</motion.div>
						</div>
					</section>
				</SwiperSlide>

				{/* Slide 4: Footer */}
				<SwiperSlide>
					<section className="w-full h-screen bg-background">
						<div className="mx-auto flex h-full max-w-6xl items-center justify-center px-6">
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4 }}
								className="w-full"
							>
								<Footer />
							</motion.div>
						</div>
					</section>
				</SwiperSlide>
			</Swiper>
		</SwiperContext.Provider>
	);
}
