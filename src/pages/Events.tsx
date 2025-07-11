import EventDatas from "../datas/EventData.ts";
import ImageDatas from "../datas/ImageDatas.ts";

const Events = () => {
    return (
        <div className="min-h-screen px-4 py-10 flex flex-col bg-gray-900">
            <h2 className="text-center text-white text-3xl font-bold mb-10">Events</h2>

            <div className="flex flex-wrap justify-center items-start gap-6">
                {ImageDatas.map((image, i) => {
                    const event = EventDatas[i];
                    return (
                        // flips card
                        <div
                            key={i}
                            className="relative w-72 h-96 transition-transform duration-500 transform-style preserve-3d hover:rotate-y-180"
                        >
                            {/*front card*/}

                            {/*<div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-lg">*/}
                            {/*    <img*/}
                            {/*        src={image.src}*/}
                            {/*        alt={image.alt}*/}
                            {/*        className="object-cover w-full h-full"*/}
                            {/*    />*/}
                            {/*</div>*/}

                            {/*Back face */}
                            <div className="absolute inset-0  rotate-y-180 bg-black/80 text-white rounded-xl flex flex-col justify-center text-center px-4 py-6">
                                <h1 className="text-lg font-bold mb-2">{image.alt}</h1>
                                <p className="text-sm mb-1">Date: {event.date}</p>
                                <p className="text-sm mb-1">Speaker: {event.speakers || "TBA"}</p>
                                <p className="text-sm mb-2">{event.eventDetails}</p>
                                <p className="text-sm mb-1">Venue: {event.venue}</p>
                                <p className="text-sm italic">{event.salutaion}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Events;
