'use client';

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="main-footer w-full bg-black text-gray-300 py-16 px-6 md:px-20">
			<div className="container mx-auto">
				<div className="footer-bottom border border-border rounded-2xl bg-[#121214] p-8 md:p-12 shadow-inner">
					<div className="flex flex-col md:flex-row items-center justify-between gap-6">
						{/* Left side */}
						<p className="text-sm text-gray-400 text-center md:text-left">
							© {year}{' '}
							<span className="text-primary font-medium">Fergocia</span>. All
							rights reserved.
						</p>

						{/* Right side */}
						<p className="text-sm text-gray-400 text-center md:text-right">
							Crafted with <span className="text-red-500">❤️</span> by{' '}
							<a
								href="https://github.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-primary hover:underline"
							>
								Santi
							</a>
						</p>
					</div>

					{/* Social links */}
					<div className="flex justify-center md:justify-end mt-6 gap-5 text-xl">
						<a
							href="https://twitter.com/"
							aria-label="Twitter"
							className="text-gray-400 hover:text-primary transition"
						>
							<i className="ri-twitter-x-line"></i>
						</a>
						<a
							href="https://github.com/"
							aria-label="GitHub"
							className="text-gray-400 hover:text-primary transition"
						>
							<i className="ri-github-line"></i>
						</a>
						<a
							href="https://www.linkedin.com/"
							aria-label="LinkedIn"
							className="text-gray-400 hover:text-primary transition"
						>
							<i className="ri-linkedin-fill"></i>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
