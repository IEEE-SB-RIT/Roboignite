import ImageDatas from "../datas/ImageDatas";
import Header from "../components/Header.tsx";

const Gallery = () => {
    return (
        <div className="min-h-screen  px-4 py-10 flex flex-col justify-between gap-2">
            <Header text={"Gallery"} />

            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {ImageDatas.map((image, i) => (
                    <div key={i} className=" relative break-inside-avoid rounded overflow-hidden group  hover:scale-105 transition duration-300 ease-in-out">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-auto rounded-lg shadow-lg  transition duration-300"/>
                        <div className="absolute inset-0 flex items-end justify-center">
                            <p className="text-white text-lg font-semibold mb-8  translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100  transition duration-300 ease-in-out ">
                                {image.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
