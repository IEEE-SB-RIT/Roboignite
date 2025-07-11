interface ImageData {
	id: number;
	src: string;
	alt: string;
    text: string;
}

const ImageDatas: ImageData[] = [
	{
		id: 1,
		src: import.meta.env.BASE_URL + "gallery/cristiano_ronaldo.jpg",
		alt: "Cristiano Ronaldo",
        text:" A picture of cristiano ronaldo"
	},
	{
		id: 2,
		src: import.meta.env.BASE_URL + "gallery/download (7).jpg",
		alt: "Downloaded image",
        text:""
	},
	{
		id: 3,
		src:
			import.meta.env.BASE_URL + "gallery/e82cb9d15a0d644292b7e0d45330e371.jpg",
		alt: "Random hash image 1",
        text:" image"
	},
	{
		id: 4,
		src:
			import.meta.env.BASE_URL +
			"gallery/download (2).jpg",
		alt: "Random hash image 2",
        text:"another image"
	},
	{
		id: 5,
		src: import.meta.env.BASE_URL + "gallery/gaming 1.webp",
		alt: "Gaming Image",
        text:"a game contorller"
	},
	{
		id: 6,
		src:
			import.meta.env.BASE_URL +
			"gallery/gum-41-nebula-3840x2160_786644-mm-90.jpg",
		alt: "Nebula Space Image",
        text:" a pictuure of nebulla"
	},
	{
		id: 7,
		src:
			import.meta.env.BASE_URL + "gallery/Icône appareil photo spiderman.jpeg",
		alt: "Spiderman Camera Icon",
        text:" a spidrman image"
	},
	{
		id: 8,
		src: import.meta.env.BASE_URL + "gallery/images (2).jpeg",
		alt: "Downloaded image 2",
        text:"eren yeager"
	},
	{
		id: 9,
		src:
			import.meta.env.BASE_URL +
			"gallery/Memories-of-Murder-1600x900-c-default.jpg",
		alt: "Memories of Murder Poster",
        text:"a movie poster"
	},
	{
		id: 10,
		src: import.meta.env.BASE_URL + "gallery/perfect blue.jpg",
		alt: "Movie Poster or Random ID image",
        text:"Movie poseter randome"
	},
];

export default ImageDatas;
