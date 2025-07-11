interface EventData {
    id: number;
    src: string;
    alt: string;
    eventDetails: string;
    category: string;
    topic?: string;
    venue: string;
    date: string;
    salutaion: string;
    speakers?: string;
}

const EventDatas: EventData[] = [
    {
        id: 1,
        src: import.meta.env.BASE_URL + "gallery/e82cb9d15a0d644292b7e0d45330e371.jpg",
        alt: "event 1",
        eventDetails: "Opening ceremony featuring keynote speeches and introductions.",
        category: "Technology",
        venue: "Main Auditorium",
        date: "2025-08-01",
        salutaion: "Welcome to the Opening Ceremony",
        speakers: "Dr. A. Kumar"
    },
    {
        id: 2,
        src: import.meta.env.BASE_URL + "gallery/e82cb9d15a0d644292b7e0d45330e371.jpg",
        alt: "event 2",
        eventDetails: "Technical workshop on modern web development tools.",
        category: "Technology",
        venue: "Lab 3B",
        date: "2025-08-02",
        salutaion: "Explore the Future of Web",
        speakers: "Ms. R. Singh"
    },
    {
        id: 3,
        src: import.meta.env.BASE_URL + "gallery/e82cb9d15a0d644292b7e0d45330e371.jpg",
        alt: "event 3",
        eventDetails: "Guest lecture on artificial intelligence and its real-world applications.",
        category: "Technology",
        venue: "Seminar Hall",
        date: "2025-08-03",
        salutaion: "Demystifying AI",
        speakers: "Prof. N. Sharma"
    },
    {
        id: 4,
        src: import.meta.env.BASE_URL + "gallery/e82cb9d15a0d644292b7e0d45330e371.jpg",
        alt: "event 4",
        eventDetails: "Hackathon kickoff with theme announcement and team formation.",
        category: "Technology",
        venue: "Innovation Hub",
        date: "2025-08-04",
        salutaion: "Let the Hack Begin!",
        speakers: "Mr. S. Patel"
    },
    {
        id: 5,
        src: import.meta.env.BASE_URL + "gallery/e82cb9d15a0d644292b7e0d45330e371.jpg",
        alt: "event 5",
        eventDetails: "Hands-on session on IoT and sensor integration using Arduino.",
        category: "Technology",
        venue: "IoT Lab",
        date: "2025-08-05",
        salutaion: "Connecting the Future",
        speakers: "Ms. L. Joseph"
    },
    {
        id: 6,
        src: import.meta.env.BASE_URL + "gallery/e82cb9d15a0d644292b7e0d45330e371.jpg",
        alt: "event 6",
        eventDetails: "Panel discussion with industry experts on future of green tech.",
        category: "Technology",
        venue: "Conference Room A",
        date: "2025-08-06",
        salutaion: "Powering a Greener Tomorrow",
        speakers: "Panel of Experts"
    },
    {
        id: 7,
        src: import.meta.env.BASE_URL + "gallery/e82cb9d15a0d644292b7e0d45330e371.jpg",
        alt: "event 7",
        eventDetails: "Robotics showcase by student teams with live demonstrations.",
        category: "Technology",
        venue: "Exhibition Hall",
        date: "2025-08-07",
        salutaion: "Rise of the Machines",
        speakers: "Student Teams"
    },
    {
        id: 8,
        src: import.meta.env.BASE_URL + "gallery/e82cb9d15a0d644292b7e0d45330e371.jpg",
        alt: "event 8",
        eventDetails: "Networking session for participants and sponsors.",
        category: "Technology",
        venue: "Cafeteria Lounge",
        date: "2025-08-08",
        salutaion: "Connect & Collaborate",
        speakers: "Open Session"
    },
    {
        id: 9,
        src: import.meta.env.BASE_URL + "gallery/e82cb9d15a0d644292b7e0d45330e371.jpg",
        alt: "event 9",
        eventDetails: "Poster presentation on ongoing research by students and faculty.",
        category: "Technology",
        venue: "Science Block Lobby",
        date: "2025-08-09",
        salutaion: "Showcase of Innovation",
        speakers: "Multiple Authors"
    },
    {
        id: 10,
        src: import.meta.env.BASE_URL + "gallery/e82cb9d15a0d644292b7e0d45330e371.jpg",
        alt: "event 10",
        eventDetails: "Cultural night with music, dance, and interactive games.",
        category: "Technology",
        venue: "Open Grounds",
        date: "2025-08-10",
        salutaion: "Unwind and Celebrate",
        speakers: "Cultural Committee"
    },
    {
        id: 11,
        src: import.meta.env.BASE_URL + "gallery/e82cb9d15a0d644292b7e0d45330e371.jpg",
        alt: "event 11",
        eventDetails: "Award ceremony recognizing top projects and contributions.",
        category: "Technology",
        venue: "Main Stage",
        date: "2025-08-11",
        salutaion: "Honoring Excellence",
        speakers: "Chief Guest"
    },
    {
        id: 12,
        src: import.meta.env.BASE_URL + "gallery/e82cb9d15a0d644292b7e0d45330e371.jpg",
        alt: "event 12",
        eventDetails: "Closing remarks and feedback collection from attendees.",
        category: "Technology",
        venue: "Main Auditorium",
        date: "2025-08-12",
        salutaion: "Thank You & Goodbye",
        speakers: "Event Organizers"
    }
];

export default EventDatas;
