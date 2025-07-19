import ImageDatas from "../datas/ImageDatas";
import Header from "../components/Header.tsx";
import { useState } from "react";

const Gallery = () => {
    const [visible, setVisible] = useState<number>(3);

    function toggleVisibility() {
        setVisible(visible === 3 ? ImageDatas.length : 3);
    }

    return (
        <div className={`min-h-screen px-4 py-10 flex flex-col ${visible >3 ? "gap-8" :"gap-4"}`}>
            <Header text={"Gallery"} />

            <div className={`${visible>3 ? "columns-2 md:columns-3 lg:columns-4" : "flex flex-row items-center" }  gap-4 space-y-4`}>
            {ImageDatas.slice(0, visible).map((image, i) => (
                    <div
                        key={i}
                        className="relative break-inside-avoid rounded overflow-hidden group hover:scale-105 transition duration-300 ease-in-out"
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-auto rounded-lg shadow-lg transition duration-300"
                        />
                        <div className="absolute inset-0 flex items-end justify-center">
                            <p className="text-white font-semibold mb-6 text-sm text-center sm:text-base md:text-lg lg:text-xl translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                                {image.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>


            <div className="flex justify-center items-start  ">
                <button
                    onClick={toggleVisibility}
                    className="px-6 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-white hover:text-purple-600 transition duration-300"
                >
                    {visible === 3 ? "Show All" : "Show Less"}
                </button>
            </div>
        </div>
    );
};

export default Gallery;
