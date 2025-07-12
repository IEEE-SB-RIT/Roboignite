interface EventData {
    id: number;
    src: string;
    title: string;
    eventName: string;
    type: string;
    topic?: string;
    venue: string;
    date: string;
    salutaion: string;
    speakers?: string;
}
// here the type can be =>workshop, talk session,cultural,competition
const EventDatas: EventData[] = [
    {
        id: 1,
        src: import.meta.env.BASE_URL + "gallery/e82cb9d15a0d644292b7e0d45330e371.jpg",
        title: "event 1",
        eventName: "Opening ceremony featuring keynote speeches and introductions.",
        type: "talk session",
        venue: "Main Auditorium",
        date: "2025-08-01",
        salutaion: "Welcome to the Opening Ceremony",
        speakers: "Dr. A. Kumar"
    },
    {
        id: 2,
        src: import.meta.env.BASE_URL + "gallery/e82cb9d15a0d644292b7e0d45330e371.jpg",
        title: "event 2",
        eventName: "Technical workshop on modern web development tools.",
        type: "workshop",
        venue: "Lab 3B",
        date: "2025-08-02",
        salutaion: "Explore the Future of Web",
        speakers: "Ms. R. Singh"
    },
    {
        id: 3,
        src: import.meta.env.BASE_URL + "gallery/e82cb9d15a0d644292b7e0d45330e371.jpg",
        title: "event 3",
        eventName: "Guest lecture on artificial intelligence and its real-world applications.",
        type: "talk session",
        venue: "Seminar Hall",
        date: "2025-08-03",
        salutaion: "Demystifying AI",
        speakers: "Prof. N. Sharma"
    },
    {
        id: 4,
        src: import.meta.env.BASE_URL + "gallery/e82cb9d15a0d644292b7e0d45330e371.jpg",
        title: "event 4",
        eventName: "Hackathon kickoff with theme announcement and team formation.",
        type: "competition",
        venue: "Innovation Hub",
        date: "2025-08-04",
        salutaion: "Let the Hack Begin!",
        speakers: "Mr. S. Patel"
    },
    {
        id: 5,
        src: import.meta.env.BASE_URL + "gallery/e82cb9d15a0d644292b7e0d45330e371.jpg",
        title: "event 5",
        eventName: "Hands-on session on IoT and sensor integration using Arduino.",
        type: "workshop",
        venue: "IoT Lab",
        date: "2025-08-05",
        salutaion: "Connecting the Future",
        speakers: "Ms. L. Joseph"
    },
    {
        id: 6,
        src: import.meta.env.BASE_URL + "gallery/e82cb9d15a0d644292b7e0d45330e371.jpg",
        title: "event 6",
        eventName: "Panel discussion with industry experts on future of green tech.",
        type: "talk session",
        venue: "Conference Room A",
        date: "2025-08-06",
        salutaion: "Powering a Greener Tomorrow",
        speakers: "Panel of Experts"
    },
    {
        id: 7,
        src: import.meta.env.BASE_URL + "gallery/e82cb9d15a0d644292b7e0d45330e371.jpg",
        title: "event 7",
        eventName: "Robotics showcase by student teams with live demonstrations.",
        type: "competition",
        venue: "Exhibition Hall",
        date: "2025-08-07",
        salutaion: "Rise of the Machines",
        speakers: "Student Teams"
    },
    {
        id: 8,
        src: import.meta.env.BASE_URL + "gallery/e82cb9d15a0d644292b7e0d45330e371.jpg",
        title: "event 8",
        eventName: "Networking session for participants and sponsors.",
        type: "talk session",
        venue: "Cafeteria Lounge",
        date: "2025-08-08",
        salutaion: "Connect & Collaborate",
        speakers: "Open Session"
    },
    {
        id: 9,
        src: import.meta.env.BASE_URL + "gallery/e82cb9d15a0d644292b7e0d45330e371.jpg",
        title: "event 9",
        eventName: "Poster presentation on ongoing research by students and faculty.",
        type: "competition",
        venue: "Science Block Lobby",
        date: "2025-08-09",
        salutaion: "Showcase of Innovation",
        speakers: "Multiple Authors"
    },
    {
        id: 10,
        src: import.meta.env.BASE_URL + "gallery/e82cb9d15a0d644292b7e0d45330e371.jpg",
        title: "event 10",
        eventName: "Cultural night with music, dance, and interactive games.",
        type: "cultural",
        venue: "Open Grounds",
        date: "2025-08-10",
        salutaion: "Unwind and Celebrate",
        speakers: "Cultural Committee"
    },
    {
        id: 11,
        src: import.meta.env.BASE_URL + "gallery/e82cb9d15a0d644292b7e0d45330e371.jpg",
        title: "event 11",
        eventName: "Award ceremony recognizing top projects and contributions.",
        type: "cultural",
        venue: "Main Stage",
        date: "2025-08-11",
        salutaion: "Honoring Excellence",
        speakers: "Chief Guest"
    },
    {
        id: 12,
        src: import.meta.env.BASE_URL + "gallery/e82cb9d15a0d644292b7e0d45330e371.jpg",
        title: "event 12",
        eventName: "Closing remarks and feedback collection from attendees.",
        type: "talk session",
        venue: "Main Auditorium",
        date: "2025-08-12",
        salutaion: "Thank You & Goodbye",
        speakers: "Event Organizers"
    }
];

export default EventDatas;
