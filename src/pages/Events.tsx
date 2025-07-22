import EventDatas from "../datas/EventData.ts";
import {BadgeIndianRupee, Calendar, FileText, MapPin, Podcast} from "lucide-react";
import Header from "../components/Header.tsx";

const Events = () => {
	return (
		<div className="min-h-screen px-4 py-10 ">
			{/* Header Section */}
			<Header text={"Events"}/>
			<div className="sm:hidden text-center text-white/70 text-sm mb-6">
				Tap on a card to view more details.
			</div>
			{/* Events layout card*/}
			<div className="flex flex-wrap justify-center items-start gap-8 max-w-7xl mx-auto">
				{EventDatas.map((event, i) => {
					return (
						<div
							key={i}
							className="relative w-[21.875rem] h-[28.125rem] group perspective-[1000px]"
						>
							<div
								className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">
								{/* Front Card */}
								<div
									className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50">
									<div className="relative w-full h-full">
										<img
											src={event.src}
											alt={event.title}
											className="object-fit  w-full h-full transition-transform duration-500 group-hover:scale-105"
										/>
										{/* Gradient Overlay */}
										<div
											className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
									</div>
								</div>
								{event.eventComingsoon === true ? (
									<div
										className="absolute inset-0 backface-hidden rotate-y-180 text-white rounded-2xl shadow-2xl border border-purple-400/30 backdrop-blur-sm flex items-center justify-center flex-col">
										<h1 className="font-extrabold text-xl sm:text-3xl md:text-3xl text-white leading-snug tracking-tight text-center">
											Events Dropping Soon
										</h1>
										<p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 max-w-lg leading-relaxed text-center mt-4">
											Stay tuned — we're working hard behind the scenes to bring exciting events
											your way.
											Make sure to check back soon!
										</p>
									</div>

								) : (
									<div
										className="absolute inset-0 backface-hidden rotate-y-180 text-white rounded-2xl shadow-2xl border border-purple-400/30 backdrop-blur-sm">
										<div className="flex flex-col h-full p-6">
											{/* Title Section */}
											<div className="flex justify-between items-center gap-6 ">
												<h1 className="text-[15px] italic rounded-xl backdrop-blur-sm bg-white/10 hover:bg-white/15 leading-tight p-3 ">
													{event.type}
												</h1>

												{/* Date on the right */}
												<div
													className="flex items-center gap-2 p-3 rounded-xl backdrop-blur-sm bg-white/10 hover:bg-white/15 transition-all duration-300">
													<Calendar className="w-5 h-5 text-yellow-300 flex-shrink-0"/>
													<p className="text-sm font-medium text-gray-100 truncate max-w-[200px]">
														{event.date}
													</p>
												</div>
											</div>

											{/* Event Details */}
											<div className="flex-1 flex flex-col justify-around ">
												{/* Event Description */}
												<div
													className="flex items-start gap-3 p-4  rounded-xl backdrop-blur-sm bg-white/10 hover:bg-white/15 transition-all duration-300">
													<FileText className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5"/>
													<div className="text-xl font-medium text-gray-100 leading-relaxed">
														<h1>{event.eventName}</h1>

													</div>
												</div>

												{/* Date and Venue Row */}
												<div className="flex gap-3">
													<div
														className="flex items-center gap-3 p-4  flex-1 min-w-0 rounded-xl backdrop-blur-sm bg-white/10 hover:bg-white/15 transition-all duration-300">
														<MapPin className="w-5 h-5 text-red-300 flex-shrink-0"/>
														<p className="text-sm font-medium text-gray-100 truncate">
															{event.venue}
														</p>
													</div>
												</div>
												<div className="flex flex-col gap-y-3">
													{/* Speakers */}
													{!!event.speakers && (
														<div
															className="flex items-start gap-3 p-4 rounded-xl backdrop-blur-sm bg-white/10 hover:bg-white/15 transition-all duration-300">
															<Podcast
																className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5"/>
															<p className="text-sm font-medium text-gray-100 leading-relaxed">
																{event.speakers}
															</p>
														</div>
													)}

													{/* Price */}
													{!!event.price && (
														<div
															className="flex items-start gap-3 p-4 rounded-xl backdrop-blur-sm bg-white/10 hover:bg-white/15 transition-all duration-300">
															<BadgeIndianRupee
																className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5"/>
															<div
																className="text-sm font-medium text-gray-100 leading-relaxed space-y-1">
																{event.price.map((line, idx) => (
																	<p key={idx}>{line}</p>
																))}
															</div>

														</div>
													)}
												</div>


												<div
													className="flex items-center justify-center w-full p-4 rounded-xl bg-[#e834eb] hover:bg-[#e834eb]/30 hover:backdrop-blur-md hover:border hover:border-white/20 transition-all duration-300 hover:cursor-pointer">
													{event.form ? (
														<a href={event.formLink} target="_blank"
														   rel="noopener noreferrer">
															<button className="text-xl cursor-pointer">Register Now
															</button>
														</a>
													) : (
														<button className="text-xl">Get Tickets</button>
													)}
												</div>
											</div>
										</div>
									</div>
								)}
								{/* Back Card */}

							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Events;
