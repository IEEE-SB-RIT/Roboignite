import ImageDatas from "../datas/ImageDatas";

const Gallery = () => {
	return (
		<div className="min-h-screen bg-[#983fd6] px-4 py-10">
			<h2 className="text-center text-white text-3xl font-bold mb-8">Gallery</h2>

			<div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
				{ImageDatas.map((image, i) => (
					<div key={i} className="break-inside-avoid rounded overflow-hidden">
						<img
							src={image.src}
							alt={image.alt}
							className="w-full h-auto rounded-lg shadow-lg"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Gallery;
