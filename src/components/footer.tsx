import { useState } from "react";
import FooterHeading from "./footerHeading";

const Footer = () => {
	const [mailStatus, setMailStatus] = useState(false);

	const handleMail = () => {
		setMailStatus(!mailStatus);
	};

	return (
		<>
			<footer className=" bg-gradient-to-t from-black to-transparent border-[1px] text-zinc-300 border-gray-500 backdrop-blur-xl w-full rounded-t-3xl px-6 py-10">
				<div className="flex flex-col gap-8 md:flex-row justify-evenly text-center md:text-left">
					<div>
						<FooterHeading text="Stay updated!"></FooterHeading>
						<ul className="flex items-center justify-center md:justify-start flex-row gap-2">
							<li>
								<a
									href="https://instagram.com/ieeesbrit"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:underline"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="30"
										height="30"
										viewBox="0 0 24 24"
										className="hover:scale-110 hover:text-amber-400  transition-transform duration-200"
									>
										<path
											fill="currentColor"
											d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2Zm4.6 2.42a7.59 7.59 0 0 0-.46-2.43a4.94 4.94 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.78 4.78 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.78 4.78 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.59 7.59 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12ZM20.14 16a5.61 5.61 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.19 3.19 0 0 1-1.15.75a5.61 5.61 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.73 5.73 0 0 1-1.94-.3a3.27 3.27 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.54 5.54 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.54 5.54 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.14 3.14 0 0 1 1.1-.8A5.73 5.73 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.61 5.61 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.06 3.06 0 0 1 .75 1.1a5.61 5.61 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4ZM12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87Zm0 8.46A3.33 3.33 0 1 1 15.33 12A3.33 3.33 0 0 1 12 15.33Z"
										/>
									</svg>
								</a>
							</li>

							<li>
								<a
									rel="noopener noreferrer"
									target="_blank"
									href="https://www.linkedin.com/company/ieee-sb-rit/"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 20 20"
										className="hover:scale-110 hover:text-amber-400 transition-transform duration-200"
									>
										<path
											fill="currentColor"
											d="M17.04 17.043h-2.962v-4.64c0-1.107-.023-2.531-1.544-2.531c-1.544 0-1.78 1.204-1.78 2.449v4.722H7.793V7.5h2.844v1.3h.039c.397-.75 1.364-1.54 2.808-1.54c3.001 0 3.556 1.974 3.556 4.545v5.238ZM4.447 6.194c-.954 0-1.72-.771-1.72-1.72s.767-1.72 1.72-1.72a1.72 1.72 0 0 1 0 3.44Zm1.484 10.85h-2.97V7.5h2.97v9.543ZM18.521 0H1.476C.66 0 0 .645 0 1.44v17.12C0 19.355.66 20 1.476 20h17.042c.815 0 1.482-.644 1.482-1.44V1.44C20 .646 19.333 0 18.518 0h.003Z"
										/>
									</svg>
								</a>
							</li>
							<li className="flex flex-row items-center justify-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="30"
									height="30"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="hover:scale-110 hover:text-amber-400 transition-transform duration-200"
									onClick={handleMail}
								>
									<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
									<rect x="2" y="4" width="20" height="16" rx="2" />
								</svg>
								<span
									id="mailText"
									className={`font-quicksand px-2 transition-all duration-300 ease-in-out
									${
										mailStatus
											? "opacity-100 scale-100 max-w-xs visible"
											: "opacity-0 scale-90 max-w-0 invisible"
									}
									`}
									style={{
										display: "inline-block",
										overflow: "hidden",
									}}
								>
									ieeesb.ritk@gmail.com
								</span>
							</li>
						</ul>
					</div>

					<div>
						<FooterHeading text="Contact us"></FooterHeading>
						<div className="font-quicksand space-y-2 text-md flex flex-col items-center">
							<div className="flex flex-col items-start justify-start gap-2">
								<div className=" flex flex-row items-center justify-start">
									<p className="mr-1 font-bold">R Harikrishnan :</p>
									<a
										href="tel:+919656990468"
										className="hover:scale-110 hover:text-amber-400 transition-transform duration-200"
									>
										+91 96569 90468
									</a>
								</div>
								<div className=" flex flex-row items-start justify-start">
									<p className="mr-1 font-bold">Nanditha A&emsp;&emsp;:</p>
									<a
										href="tel:+919061931671"
										className="hover:scale-110 hover:text-amber-400 transition-transform duration-200"
									>
										+91 90619 31671
									</a>
								</div>
							</div>
						</div>
					</div>

					<div>
						<FooterHeading text="Built by"></FooterHeading>
						<div className="font-quicksand flex flex-col items-center justify-start text-md space-y-2">
							<div className="flex flex-col justify-center gap-2">
								<div className="flex gap-2">
									<a
										target="_blank"
										rel="noopener noreferrer"
										href="https://devcard.link/hP9V2t"
										className="flex flex-row items-center justify-start"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="hover:scale-105 hover:text-amber-400 transition-transform duration-200"
										>
											<path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
											<path d="m21 3-9 9" />
											<path d="M15 3h6v6" />
										</svg>
										<p className="ml-2">Dhananjay R</p>
									</a>
								</div>
								<div className="flex gap-2">
									<a
										target="_blank"
										rel="noopener noreferrer"
										href="https://devcard.link/OFNHWZ"
										className="flex flex-row items-center justify-start "
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="hover:scale-105 hover:text-amber-400 transition-transform duration-200"
										>
											<path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
											<path d="m21 3-9 9" />
											<path d="M15 3h6v6" />
										</svg>
										<p className="ml-2">Farzan RS</p>
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* Address */}
					<div>
						<FooterHeading text="Address"></FooterHeading>
						<p className="font-quicksand ">
							IEEE RAS SBC RIT, <br />
							Rajiv Gandhi Institute of Technology, <br />
							Kottayam, Kerala – 686501
						</p>
					</div>
				</div>

				<div className="text-sm text-gray-400 font-josefin text-center flex items-center justify-center mt-10 border-t border-gray-700 pt-8">
					<p>
						&copy; {new Date().getFullYear()} IEEE RAS SBC RIT. All rights
						reserved.
					</p>
				</div>

				{/* <div className="footer-map">
				<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.19079391124!2d76.62031297484009!3d9.578815990506149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b062d96b2fe8ed9%3A0xbade243e087b408!2sRAJIV%20GANDHI%20INSTITUTE%20OF%20TECHNOLOGY%2C%20KOTTAYAM!5e0!3m2!1sen!2sin!4v1728241993898!5m2!1sen!2sin"
				width="250"
				height="250"
				loading="lazy"
				></iframe>
				</div> */}
			</footer>
		</>
	);
};

export default Footer;
