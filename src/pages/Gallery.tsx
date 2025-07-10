import ImageDatas from "../datas/ImageDatas";

const Gallery = () => {
	return <>
	<div className="flex font-bold text-2xl flex-col justify-center h-screen bg-[983fd6] items-center">
		<div className="flex flex-row justify-between items-center border-2 flex-wrap">
			{ImageDatas.map((image, i) => (
				<div key={i}>
					<img src={image.src} alt={image.alt} />
				</div>
			))}
		</div>
	</div>
	</>
};

export default Gallery;