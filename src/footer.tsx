const Footer = () => {
	return (
		<footer className="bg-gray-400  rounded-t-3xl text-white px-6 py-10">
			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
				{/* Stay Updated */}
				<div>
					<h2 className="font-josefin text-xl font-bold mb-3">Stay Updated</h2>
					<ul className="flex items-center justify-center flex-row gap-2">
						<li>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
							>
								<path
									fill="currentColor"
									d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2Zm4.6 2.42a7.59 7.59 0 0 0-.46-2.43a4.94 4.94 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.78 4.78 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.78 4.78 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.59 7.59 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12ZM20.14 16a5.61 5.61 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.19 3.19 0 0 1-1.15.75a5.61 5.61 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.73 5.73 0 0 1-1.94-.3a3.27 3.27 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.54 5.54 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.54 5.54 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.14 3.14 0 0 1 1.1-.8A5.73 5.73 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.61 5.61 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.06 3.06 0 0 1 .75 1.1a5.61 5.61 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4ZM12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87Zm0 8.46A3.33 3.33 0 1 1 15.33 12A3.33 3.33 0 0 1 12 15.33Z"
								/>
							</svg>
							<a
								href="https://instagram.com/yourpage"
								target="_blank"
								rel="noreferrer"
								className="hover:underline"
							></a>
						</li>

						<li>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 20 20"
							>
								<path
									fill="currentColor"
									d="M17.04 17.043h-2.962v-4.64c0-1.107-.023-2.531-1.544-2.531c-1.544 0-1.78 1.204-1.78 2.449v4.722H7.793V7.5h2.844v1.3h.039c.397-.75 1.364-1.54 2.808-1.54c3.001 0 3.556 1.974 3.556 4.545v5.238ZM4.447 6.194c-.954 0-1.72-.771-1.72-1.72s.767-1.72 1.72-1.72a1.72 1.72 0 0 1 0 3.44Zm1.484 10.85h-2.97V7.5h2.97v9.543ZM18.521 0H1.476C.66 0 0 .645 0 1.44v17.12C0 19.355.66 20 1.476 20h17.042c.815 0 1.482-.644 1.482-1.44V1.44C20 .646 19.333 0 18.518 0h.003Z"
								/>
							</svg>
							<a
								href="https://linkedin.com/in/yourpage"
								target="_blank"
								rel="noreferrer"
								className="hover:underline"
							></a>
						</li>
						<li>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 1360 1000"
							>
								<path
									fill="currentColor"
									d="M105 5h1152q43 0 74 31t31 74v785q0 44-31 74.5t-74 30.5H105q-43 0-74-30.5T0 895V110q0-43 31-74t74-31zm69 157l507 423l507-423H174zm-17 681h1048V285L711 697h-61L157 285v558z"
								/>
							</svg>
							<a
								href="mailto:youremail@example.com"
								className="hover:underline"
							></a>
						</li>
					</ul>
				</div>

				<div>
					<h2 className="font-josefin text-xl font-bold mb-3">Contact Us</h2>
					<ul className="space-y-2">
						<li>+91 98765 43210</li>
						<li>+91 91234 56789</li>
					</ul>
				</div>

				{/* Address */}
				<div>
					<h2 className="font-josefin text-xl font-bold mb-3">Address</h2>
					<p>
						IEEE RAS SBC RIT, <br />
						Rajiv Gandhi Institute of Technology, <br />
						Kottayam, Kerala – 686501
					</p>
				</div>
			</div>

			{/* Bottom strip */}
			<div className="text-sm text-gray-400 text-center mt-10 border-t border-gray-700 pt-4">
				&copy; {new Date().getFullYear()} IEEE RAS SBC RIT. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
