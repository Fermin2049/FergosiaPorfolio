'use client';

import { useSwiperController } from './SwiperContext';
import { motion } from 'framer-motion';

export default function Header() {
	const { slideTo, activeIndex } = useSwiperController();

	const navItems = [
		{ label: 'Inicio', index: 0 },
		{ label: 'Sobre mí', index: 0 },
		{ label: 'Portfolio', index: 1 },
		{ label: 'Contacto', index: 3 },
	];

	const toggleDark = () => {
		const el = document.documentElement;
		el.classList.toggle('dark');
	};

	return (
		<header className="main-header fixed top-0 left-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-border px-6 md:px-20 py-4 flex items-center justify-between transition-all">
			{/* === Logo / Brand === */}
			<motion.div
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="flex items-center gap-3"
			>
				<div className="w-10 h-10 rounded-full border border-border text-primary grid place-items-center">
					<i className="ri-flashlight-fill text-xl" aria-hidden="true" />
				</div>
				<div className="leading-tight select-none">
					<h1 className="text-lg md:text-xl font-semibold text-heading">
						Fergocia
					</h1>
					<p className="text-xs md:text-sm text-subtitle">
						Desarrollador Frontend
					</p>
				</div>
			</motion.div>

			{/* === Navigation === */}
			<nav
				aria-label="Navegación principal"
				className="hidden md:flex items-center gap-8"
			>
				{navItems.map((item) => (
					<button
						key={item.label}
						onClick={() => slideTo(item.index)}
						className={`text-sm font-medium transition-colors hover:text-primary ${
							activeIndex === item.index ? 'text-primary' : 'text-gray-400'
						}`}
						aria-current={activeIndex === item.index ? 'page' : undefined}
					>
						{item.label}
					</button>
				))}
			</nav>

			{/* === Actions === */}
			<div className="flex items-center gap-3">
				{/* Dark mode toggle */}
				<button
					type="button"
					onClick={toggleDark}
					className="w-10 h-10 grid place-items-center rounded-full border border-border text-gray-400 hover:text-white transition"
					aria-label="Alternar modo oscuro"
					title="Modo oscuro"
				>
					<i className="ri-moon-clear-line text-lg" />
				</button>

				{/* Call-to-action button */}
				<motion.a
					href="#portfolio"
					onClick={(e) => {
						e.preventDefault();
						slideTo(1);
					}}
					className="inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-2 text-sm font-medium text-white hover:opacity-90 transition"
					whileTap={{ scale: 0.97 }}
				>
					Ver trabajos <i className="ri-arrow-right-up-line" />
				</motion.a>
			</div>
		</header>
	);
}
