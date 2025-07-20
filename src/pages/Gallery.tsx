import ImageDatas from "../datas/ImageDatas";
import Header from "../components/Header.tsx";
import {useEffect, useState} from "react";
import {X} from "lucide-react";

const Gallery = () => {
    const [visible, setVisible] = useState<number>(3);
    const [selectedImage, setSelectedImage] = useState<null | typeof ImageDatas[0]>(null);

    function toggleVisibility() {
        setVisible(visible === 3 ? ImageDatas.length : 3);
    }

    useEffect(() => {
        //for disabling scroll when preview is present
        if(selectedImage){
            document.body.style.overflow="hidden";
        }
        else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        }

    }, [selectedImage]);

    useEffect(() => {
        ImageDatas.forEach((image) => {
            const img = new Image();
            img.src = image.src
        })
    }, []);
    useEffect(() => {
        const handleEsc=(e: KeyboardEvent)=>{
            if(e.key==="Escape" && selectedImage){
                setSelectedImage(null);
            }

        }
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    },  [selectedImage]);

    return (
        <>
            <div className={`min-h-screen px-4 py-10 flex flex-col ${visible > 3 ? "gap-8" : "gap-4"}`}>
                <Header text={"Gallery"}/>


                <div
                    className={`${visible > 3 ? "columns-2 md:columns-3 lg:columns-4" : "flex lg:flex-row items-center flex-col"}  gap-4 space-y-4 cursor-pointer`}>
                    {ImageDatas.slice(0, visible).map((image, i) => (
                        <div
                            key={i}
                            className="relative break-inside-avoid rounded overflow-hidden group hover:scale-105 transition duration-300 ease-in-out"

                            onClick={(e) => {
                                e.preventDefault();
                                setSelectedImage(image);
                            }}
                        >
                            <img
                                loading="lazy"
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-auto rounded-lg shadow-lg transition duration-300"
                            />
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
            {selectedImage && (
                <div
                    className="fixed top-0 left-0 z-50 w-screen h-screen bg-black/30 backdrop-blur-sm flex justify-center items-center transition duration-300 ease-in-out " onClick={() => setSelectedImage(null)}>
                    <button className="absolute top-5 right-5  m-5 text-white text-4xl font-bold hover:text-red-500 cursor-pointer"
                            onClick={() => setSelectedImage(null)}>
                        <X width={100} height={50} fill="white" />
                    </button>
                    {/*if clicked inside the image nothign happens*/}
                    <div className="relative " onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage.src} alt={selectedImage.alt}
                             className="max-w-[90vw] max-h-[80vh] w-full object-cover"/>
                        <div className=" absolute inset-0 flex items-end justify-start ">
                            <p className="text-white font-semibold mb-5 ml-5 text-sm text-start sm:text-base md:text-lg lg:text-xl p-2 bg-black/30 rounded-lg backdrop-blur-lg ">
                                {selectedImage.text}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Gallery;
