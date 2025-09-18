import EventDatas from "../datas/EventData.ts";
import {Calendar, MapPin, Music, Podcast} from "lucide-react";
import Header from "../components/Header.tsx";
import LinkButton from "../components/linkButton.tsx";

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
                            className="card-container relative max-w-[400px] aspect-square group perspective-[1000px]"
                        >
                            <div
                                className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d card-rotate"
                            >
                                {/* Front Card */}
                                <div
                                    className="size-full inset-0 backface-hidden rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50">
                                    <div className="relative size-full">
                                        <img
                                            src={event.src}
                                            alt={event.title}
                                            className="object-cover h-full w-full  transition-transform duration-500 group-hover:scale-105"
                                        />
                                        {/* Gradient Overlay */}
                                        <div
                                            className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                </div>
                                {event.eventComingsoon === true ? (
                                    <div
                                        className="absolute inset-0 backface-hidden rotate-y-180 text-white rounded-2xl shadow-2xl border border-purple-400/30 backdrop-blur-sm flex items-center justify-center flex-col">
                                        <h1 className="font-extrabold text-xl text-white text-center">
                                            Events Dropping Soon
                                        </h1>
                                    </div>

                                ) : (
                                    <div
                                        className="absolute inset-0 backface-hidden rotate-y-180 text-white rounded-2xl shadow-2xl border border-purple-400/30 backdrop-blur-sm">
                                        <div className="flex flex-col h-full p-6">
                                            {/* Title Section */}
                                            <div className="flex justify-between items-center gap-6 ">

                                            </div>

                                            {/* Event Details */}
                                            <div className="h-full flex flex-col justify-between pt-6">
                                                <div
                                                    className="p-4  rounded-xl backdrop-blur-sm bg-white/10 hover:bg-white/15 transition-all duration-300 ">
                                                    <div className="flex w-full justify-between items-start">
                                                        <div
                                                            className="text-xl font-medium text-gray-100 leading-relaxed capitalize ">
                                                            <h1>{event.eventName.toLowerCase()}</h1>
                                                        </div>
                                                        <h1 className="text-[12px] border bg-black/30 mt-2 rounded-full px-2 py-0 opacity-80">
                                                            {event.type}
                                                        </h1>
                                                    </div>

                                                    <div className="flex items-center gap-1">
                                                        <Calendar className="size-[14px] text-yellow-300/90"/>
                                                        <div
                                                            className="text-xs mt-[4px] opacity-90 font-medium text-gray-100 truncate max-w-[200px]">
                                                            {event.date}
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <MapPin className="size-[14px] text-red-300/90"/>
                                                        <div
                                                            className="text-xs mt-[4px] opacity-90 font-medium text-gray-100 truncate max-w-[200px]">
                                                            {event.venue}
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Venue / Partners */}
                                                {!!event.partners && (
                                                    <div
                                                        className="flex items-start gap-3 p-4 rounded-xl backdrop-blur-sm bg-white/10 hover:bg-white/15 transition-all duration-300">
                                                        <MapPin className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5"/>
                                                        <div className="flex flex-col gap-2">
                                                            {event.partners.map((partner, idx) => (
                                                                <div key={idx} className="flex flex-col">
					                                            <span className="text-sm font-semibold text-gray-100">
						                                            {partner.name}
					                                            </span>
                                                                    <span className="text-sm text-gray-300">
						                                            {partner.role}
					                                            </span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                <div className="flex flex-col gap-y-3 mb-5">
                                                    {/* Speakers */}
                                                    {!!event.speakers && (
                                                        <div
                                                            className="flex items-start gap-3 p-4 rounded-xl backdrop-blur-sm bg-white/10 hover:bg-white/15 transition-all duration-300">
                                                            <Podcast
                                                                className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5"/>
                                                            <div className="flex flex-col gap-2">
                                                                {event.speakers.map((speaker, idx) => (
                                                                    <div key={idx} className="flex flex-col">
                                                                        <span
                                                                            className="text-sm font-semibold text-gray-100">
                                                                        {speaker.name}
                                                                        </span>
                                                                        <span className="text-sm text-gray-300">
                                                                        {speaker.description}
                                                                        </span>
                                                                    </div>
                                                                ))}
                                                            </div>

                                                        </div>
                                                    )}
                                                    {!!event.culturals && !!event.culturalDetails && (
                                                        <div
                                                            className="flex items-start gap-3 p-4 rounded-xl backdrop-blur-sm bg-white/10 hover:bg-white/15 transition-all duration-300">
                                                            <Music
                                                                className="w-5 h-5 text-pink-300 flex-shrink-0 mt-0.5"/>
                                                            <div className="flex flex-col gap-2">
                                                                {event.culturalDetails.map((cultural, idx) => (
                                                                    <div key={idx} className="flex flex-col">
                                                                        <span className="text-sm font-semibold text-gray-100">
                                                                            {cultural.name}
                                                                        </span>
                                                                        <span className="text-sm text-gray-300">
                                                                            {cultural.description}
                                                                        </span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                    {/* Price */}
                                                    {!!event.price && (
                                                        <div
                                                            className="flex items-start gap-3 p-4 rounded-xl backdrop-blur-sm bg-white/10 hover:bg-white/15 transition-all duration-300">
                                                            {/*<BadgeIndianRupee*/}
                                                            {/*    className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5"/>*/}
                                                            <div
                                                                className="text-sm text-gray-100 leading-relaxed space-y-2 w-full ">
                                                                {event.price.map((line, idx) => {
                                                                    const split = line.split(" - ");
                                                                    if (split.length === 2) {
                                                                        return <div key={idx}
                                                                                    className="text-sm text-gray-100 w-full flex justify-between ">
                                                                            <span>{split[0]}</span>
                                                                            <span>{split[1]}{split[1].toLowerCase() != "free" && "₹"}</span>
                                                                        </div>
                                                                    } else {
                                                                        return (
                                                                            <div key={idx}
                                                                                 className="text-sm text-gray-100 w-full text-center">
                                                                                {line}
                                                                            </div>
                                                                        );
                                                                    }
                                                                })}
                                                            </div>

                                                        </div>
                                                    )}
                                                </div>


                                                {event.isFree ? (<LinkButton content={"See you There"} link={"#"}/>

                                                ) : (
                                                    event.formLink ? (
                                                        <LinkButton link={event.formLink} content="Register Now"/>
                                                    ) : (
                                                        <LinkButton link={"https://www.yepdesk.com/roboignite"}
                                                                    content="Get Tickets"/>
                                                    )
                                                )}

                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Events;
