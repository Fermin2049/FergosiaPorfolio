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
				className="w-screen h-screen overflow-hidden"
			>
				{/* Slide 1: Header + About */}
				<SwiperSlide>
					<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="w-full h-full">
						<Header />
						<About />
					</motion.div>
				</SwiperSlide>

				{/* Slide 2: Portfolio */}
				<SwiperSlide>
					<Portfolio />
				</SwiperSlide>

				{/* Slide 3: Call To Action */}
				<SwiperSlide>
					<CallToAction />
				</SwiperSlide>

				{/* Slide 4: Footer */}
				<SwiperSlide>
					<Footer />
				</SwiperSlide>
			</Swiper>
		</SwiperContext.Provider>
	);
}
