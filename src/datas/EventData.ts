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
    speakers?: string;
    price?:string[];
    form?: boolean;
    formLink?: string;
}
// here the type can be =>workshop, talk session,cultural,competition
const EventDatas: EventData[] = [
    {
        id: 1,
        title: "LEAP – Learn. Experiment. Apply. Perform.",
        eventName: "LEAP 2025",
        type: "Pre-Event",
        venue: "Online",
        date: "2025-08-01",
        salutaion: "⚡ LEAP – Learn. Experiment. Apply. Perform.",
        price: [
            "IEEE RAS Members - FREE!",
            "IEEE Members - 50/-",
            "Non-IEEE Members - 100/-"
        ],
        src: "public/events/event_01.webp",
        form:true,
        formLink:" https://bit.ly/LEAP_ROBOIGNITE",
    },

    // {
    //     id: 2,
    //     title: "LEAP – Learn. Experiment. Apply. Perform.",
    //     eventName: "LEAP 2025",
    //     type: "Pre-Event",
    //     venue: "Online",
    //     date: "2025-08-01",
    //     salutaion: "⚡ LEAP – Learn. Experiment. Apply. Perform.",
    //     speakers: "IEEE RAS Members - FREE! | IEEE Members - 50/- | Non-IEEE Members - 100/-",
    //     form:true,
    //     src: "public/events/event_02.webp"
    // },
    // {
    //     id: 3,
    //     title: "event 3",
    //     eventName: "AI in Real Life",
    //     type: "talk session",
    //     venue: "Seminar Hall",
    //     date: "2025-08-03",
    //     salutaion: "Demystifying AI",
    //     speakers: "Prof. N. Sharma",
    //     src: "gallery/img_4.webp"
    // },
    // {
    //     id: 4,
    //     title: "event 4",
    //     eventName: "Hackathon Kickoff",
    //     type: "competition",
    //     venue: "Innovation Hub",
    //     date: "2025-08-04",
    //     salutaion: "Let the Hack Begin!",
    //     speakers: "Mr. S. Patel",
    //     src: "gallery/img_4.webp"
    // },
    // {
    //     id: 5,
    //     title: "event 5",
    //     eventName: "IoT with Arduino",
    //     type: "workshop",
    //     venue: "IoT Lab",
    //     date: "2025-08-05",
    //     salutaion: "Connecting the Future",
    //     speakers: "Ms. L. Joseph",
    //     src: "gallery/img_4.webp"
    // },
    // {
    //     id: 6,
    //     title: "event 6",
    //     eventName: "Green Tech Talks",
    //     type: "talk session",
    //     venue: "Conference Room A",
    //     date: "2025-08-06",
    //     salutaion: "Powering a Greener Tomorrow",
    //     speakers: "Panel of Experts",
    //     src: "gallery/img_4.webp"
    // },
    // {
    //     id: 7,
    //     title: "event 7",
    //     eventName: "Robotics Demo",
    //     type: "competition",
    //     venue: "Exhibition Hall",
    //     date: "2025-08-07",
    //     salutaion: "Rise of the Machines",
    //     speakers: "Student Teams",
    //     src: "gallery/img_4.webp"
    // },
    // {
    //     id: 8,
    //     title: "event 8",
    //     eventName: "Networking Hour",
    //     type: "talk session",
    //     venue: "Cafeteria Lounge",
    //     date: "2025-08-08",
    //     salutaion: "Connect & Collaborate",
    //     speakers: "Open Session",
    //     src: "gallery/img_4.webp"
    // },
    // {
    //     id: 9,
    //     title: "event 9",
    //     eventName: "Research Posters",
    //     type: "competition",
    //     venue: "Science Block Lobby",
    //     date: "2025-08-09",
    //     salutaion: "Showcase of Innovation",
    //     speakers: "Multiple Authors",
    //     src: "gallery/img_4.webp"
    // },
    // {
    //     id: 10,
    //     title: "event 10",
    //     eventName: "Cultural Night",
    //     type: "cultural",
    //     venue: "Open Grounds",
    //     date: "2025-08-10",
    //     salutaion: "Unwind and Celebrate",
    //     speakers: "Cultural Committee",
    //     src: "gallery/img_4.webp"
    // },
    // {
    //     id: 11,
    //     title: "event 11",
    //     eventName: "Awards & Honors",
    //     type: "cultural",
    //     venue: "Main Stage",
    //     date: "2025-08-11",
    //     salutaion: "Honoring Excellence",
    //     speakers: "Chief Guest",
    //     src: "gallery/img_4.webp"
    // },
    // {
    //     id: 12,
    //     title: "event 12",
    //     eventName: "Closing & Feedback",
    //     type: "talk session",
    //     venue: "Main Auditorium",
    //     date: "2025-08-12",
    //     salutaion: "Thank You & Goodbye",
    //     speakers: "Event Organizers",
    //     src: "gallery/img_4.webp"
    // }
];

export default EventDatas;

