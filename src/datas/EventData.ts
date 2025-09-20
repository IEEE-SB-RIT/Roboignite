interface Speaker {
	name: string;
	description: string;
}
interface CulturalDetials {
	name: string;
	description: string;
}

interface EventData {
	id: number;
	src: string;
	title: string;
	eventName: string;
	type: string;
	topic?: string;
	venue: string;
	date: string;
	salutaion?: string;
	speakers?: Speaker[];
	partners?: { name: string; role: string }[];
	price?: string[];
	form?: boolean;
	formLink?: string;
	eventComingsoon?: boolean;
	isFree?: boolean;
	culturals?: boolean;
	culturalDetails?: CulturalDetials[];
}

const basePath = import.meta.env.BASE_URL + "roboEvents/";

const EventDatas: EventData[] = [
	{
		id: 6,
		title: "",
		eventName: "RoboLaunch",
		type: "Workshop",
		venue: "Rit Kottayam",
		date: "2025-09-26 to 2025-09-28",
		salutaion: "Powering a Greener Tomorrow",
		speakers: [
			{ name: "Abhijith Benny", description: "Hardware Design Engineer" },
			{ name: "Richu Bini and Rishad Alayan", description: "Embedded Software Design Engineer" },
		],
		src: `${basePath}event_10.webp`,
	},
	{
		id: 7,
		title: "",
		eventName: "ROS Unleashed",
		type: "Workshop",
		venue: "Rit Kottayam",
		date: "2025-09-26 to 2025-09-28",
		salutaion: "Powering a Greener Tomorrow",
		speakers: [
			{ name: "Nivan Nelson", description: "ROS Trainer" },
			{ name: "Muhammed Shibil C", description: "Robotics Trainer" },
		],
		src: `${basePath}event_07.webp`,
	},

	{
		id: 8,
		title: "event 7",
		eventName: "DRONEVERSE",
		type: "Workshop",
		venue: "Rit Kottayam",
		date: "2025-09-26 to 2025-09-28",
		salutaion: "Rise of the Machines",
		speakers: [
			{
				name: "Anfil Shajo",
				description:
					"Avionics and Robotics Integration Lead, Rovonize System Pvt.Ltd",
			},
		],
		src: `${basePath}event_08.webp`,
	},
	{
		id: 14,
		title: "event 4",
		eventName: "ICE BREAKING",
		type: "Workshop",
		venue: "Rit Kottayam",
		date: "2025-09-26 to 2025-09-28",
		salutaion: "Rise of the Machines",
		speakers: [
			{
				name: "Adil A",
				description:
					"Technical Coordinator, IEEE SPS Kerala Chapter",
			},
		],
		src: `${basePath}ice_breaking.webp`,
	},
	{
		id: 13,
		title: "Cultural Announcement",
		eventName: "Culturals Of RoboIgnite",
		type: "Cultural",
		venue: "Rit Kottayam",
		date: "2025-09-26 to 2025-09-28",
		salutaion: "🤖 RoboIgnite – Ignite your passion for Robotics",
		culturals: true,
		culturalDetails: [
			{ name: "Anvaya", description: "The sensational band led by the dynamic Sreerag Menon" },
		],
		formLink: "",
		src: `${basePath}cultural.webp`,
	},
	{
		id: 12,
		title: "Tickets Out",
		eventName: "Bulk Registerations",
		type: "Tickets",
		venue: "Rit Kottayam",
		date: "2025-09-26 to 2025-09-28",
		salutaion: "🤖 RoboIgnite – Ignite your passion for Robotics",
		price: [
			"Tickets of 5 at 20% off",
		],
		formLink: "",
		src: `${basePath}bulk_reg.webp`,
	},
	{
		id: 1,
		title: "Tickets Out",
		eventName: "Registrations Open",
		type: "Tickets",
		venue: "Rit Kottayam",
		date: "2025-09-26 to 2025-09-28",
		salutaion: "🤖 RoboIgnite – Ignite your passion for Robotics",
		price: [
			"IEEE RAS Members - 1000",
			"IEEE Members - 1200",
			"Non-IEEE Members - 1450",
		],
		formLink: "",
		src: `${basePath}event_tickets.webp`,
	},
	{
		id: 2,
		title: "Venue Partner Announced",
		eventName: "Venue Partner",
		type: "Venue",
		venue: "Kottayam",
		date: "2025-09-26 to 2025-09-28",
		partners: [
			{
				name: "Hotel Floral Park",
				role: "Venue Partner for RoboIgnite 2025",
			},
		],
		src: `${basePath}venue.webp`,
	},
	{
		id: 3,
		title: "Expert Talk – The Growing Field of Robotics and Its Opportunities",
		eventName: "Expert Talk",
		type: "Talk Session",
		venue: "Online",
		date: "2025-09-15",
		salutaion: "🧠 Topic: The Growing Field of Robotics and Its Opportunities",
		speakers: [
			{
				name: "Sethulakshmi S Nair",
				description: "Executive Manager at IHub Research and Robotics Pvt Ltd",
			},
		],
		src: `${basePath}event_05.webp`,
		form: true,
		formLink: "https://bit.ly/Talksession_1",
	},
	{
		id: 4,
		title: "Expert Talk – Human-Robot Interaction",
		eventName: "Expert Talk",
		type: "Talk Session",
		venue: "Online (Google Meet)",
		date: "2025-09-16",
		salutaion: "🧠 Topic: Human-Robot Interaction",
		speakers: [
			{
				name: "Devasena Pasupuleti",
				description:
					"PhD Researcher in Human-Robot Interaction at the ISHIGURO Lab, Osaka University, Japan",
			},
		],
		src: `${basePath}event_06.webp`,
		form: true,
		formLink: "https://bit.ly/Talksession_2",
	},
	{
		id: 5,
		title: "Getting Started With DevOps",
		eventName: "Expert Talk",
		type: "Talk Session",
		venue: "Online (Google Meet)",
		date: "2025-09-19",
		salutaion: "🧠 Topic: Human-Robot Interaction",
		speakers: [
			{
				name: " Rima Sidique",
				description:
					"DevOps Engineer, Stackgenie\n",
			},
		],
		src: `${basePath}event_09.webp`,
		form: true,
		formLink: "https://surli.cc/ccoeqr",
	},
	{
		id: 9,
		title: "ROBOIGNITE 2025 – Campus Ambassador Call",
		eventName: "ROBOIGNITE 2025",
		type: "Outreach",
		venue: "Rit Kottayam",
		date: "2025-08-18",
		salutaion:
			"💡 \"The people who are crazy enough to think they can change the world are the ones who do\" – Steve Jobs",
		price: ["Win exciting prizes as a Campus Ambassador!"],
		src: `${basePath}event_03.webp`,
		form: true,
		formLink: "https://bit.ly/Call_for_CA",
	},
	{
		id: 10,
		title: "LEAP – Learn. Experiment. Apply. Perform.",
		eventName: "LEAP ",
		type: "Course",
		venue: "Online",
		date: "2025-08-01",
		salutaion: "⚡ LEAP – Learn. Experiment. Apply. Perform.",
		price: [
			"IEEE RAS Members - FREE",
			"IEEE Members - 50",
			"Non-IEEE Members - 100",
		],
		src: `${basePath}event_01.webp`,
		form: true,
		formLink: " https://bit.ly/LEAP_ROBOIGNITE",
	},
	{
		id: 11,
		title: "INSPIRE – School Outreach Programme",
		eventName: "INSPIRE ",
		type: "Outreach",
		venue: "PTM Govt HSS, Velloor",
		date: "2025-07-25",
		salutaion: "🤖 INSPIRE – Igniting Young Minds with Robotics!",
		price: ["Free Entry – For School Students"],
		src: `${basePath}event_02.webp`,
		form: false,
		formLink: "",
		isFree: true,
	},
];

export default EventDatas;
