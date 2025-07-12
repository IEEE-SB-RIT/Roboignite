import EventDatas from "../datas/EventData.ts";
import ImageDatas from "../datas/ImageDatas.ts";
import {Calendar, FileText, MapPin, Podcast} from "lucide-react";

const Events = () => {
    return (
        <div className="min-h-screen px-4 py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
            {/* Header Section */}
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Events
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            </div>

            {/* Events Grid */}
            <div className="flex flex-wrap justify-center items-start gap-8 max-w-7xl mx-auto">
                {ImageDatas.map((image, i) => {
                    const event = EventDatas[i];
                    return (
                        <div
                            key={i}
                            className="relative w-80 h-[420px] cursor-pointer group perspective-1000"
                        >

                            <div className="relative w-full  h-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">

                                {/* Front Card */}
                                <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50">
                                    <div className="relative w-full h-full">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                        />
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    </div>
                                </div>

                                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-radial from-[#2f004f] via-[#4a0075] to-[#2f004f] text-white rounded-2xl shadow-2xl border border-purple-400/30">
                                    <div className="flex flex-col justify-between h-full p-8">


                                        <div className="text-center mb-6">
                                            <h1 className="text-2xl font-bold mb-2 leading-tight">{event.title}</h1>
                                            <div className="w-16 h-0.5 bg-white/60 mx-auto rounded-full"></div>
                                        </div>


                                        <div className="flex-1 flex flex-col justify-center space-y-6">
                                            <div
                                                className="flex items-center gap-4 p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                                                <FileText className="w-5 h-5  flex-shrink-0"/>
                                                <p className="text-sm font-medium">{event.eventDetails}</p>
                                            </div>

                                            <div
                                                className="flex items-center gap-4 p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                                                <Calendar className="w-5 h-5 text-yellow-300 flex-shrink-0"/>
                                                <p className="text-sm font-medium">{event.date}</p>
                                            </div>

                                            <div
                                                className="flex items-center gap-4 p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                                                <MapPin className="w-5 h-5 text-red-300 flex-shrink-0"/>
                                                <p className="text-sm font-medium">{event.venue}</p>
                                            </div>

                                            <div
                                                className="flex items-center gap-4 p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                                                <Podcast className="w-5 h-5 text-green-300 flex-shrink-0"/>
                                                <p className="text-sm font-medium">{event.speakers}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Events;