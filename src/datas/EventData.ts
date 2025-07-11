interface EventData {
    id: number;
    src: string;
    alt: string;
    eventDetails: string;
}

const EventDatas: EventData[] = [
    {
        id: 1,
        src: import.meta.env.BASE_URL + "gallery/e82cb9d15a0d644292b7e0d45330e371.jpg",
        alt: "event 1",
        eventDetails: "Opening ceremony featuring keynote speeches and introductions."
    },
    {
        id: 2,
        src: import.meta.env.BASE_URL + "gallery/e82cb9d15a0d644292b7e0d45330e371.jpg",
        alt: "event 2",
        eventDetails: "Technical workshop on modern web development tools."
    },
    {
        id: 3,
        src: import.meta.env.BASE_URL + "gallery/e82cb9d15a0d644292b7e0d45330e371.jpg",
        alt: "event 3",
        eventDetails: "Guest lecture on artificial intelligence and its real-world applications."
    },
    {
        id: 4,
        src: import.meta.env.BASE_URL + "gallery/e82cb9d15a0d644292b7e0d45330e371.jpg",
        alt: "event 4",
        eventDetails: "Hackathon kickoff with theme announcement and team formation."
    },
    {
        id: 5,
        src: import.meta.env.BASE_URL + "gallery/e82cb9d15a0d644292b7e0d45330e371.jpg",
        alt: "event 5",
        eventDetails: "Hands-on session on IoT and sensor integration using Arduino."
    },
    {
        id: 6,
        src: import.meta.env.BASE_URL + "gallery/e82cb9d15a0d644292b7e0d45330e371.jpg",
        alt: "event 6",
        eventDetails: "Panel discussion with industry experts on future of green tech."
    },
    {
        id: 7,
        src: import.meta.env.BASE_URL + "gallery/e82cb9d15a0d644292b7e0d45330e371.jpg",
        alt: "event 7",
        eventDetails: "Robotics showcase by student teams with live demonstrations."
    },
    {
        id: 8,
        src: import.meta.env.BASE_URL + "gallery/e82cb9d15a0d644292b7e0d45330e371.jpg",
        alt: "event 8",
        eventDetails: "Networking session for participants and sponsors."
    },
    {
        id: 9,
        src: import.meta.env.BASE_URL + "gallery/e82cb9d15a0d644292b7e0d45330e371.jpg",
        alt: "event 9",
        eventDetails: "Poster presentation on ongoing research by students and faculty."
    },
    {
        id: 10,
        src: import.meta.env.BASE_URL + "gallery/e82cb9d15a0d644292b7e0d45330e371.jpg",
        alt: "event 10",
        eventDetails: "Cultural night with music, dance, and interactive games."
    },
    {
        id: 11,
        src: import.meta.env.BASE_URL + "gallery/e82cb9d15a0d644292b7e0d45330e371.jpg",
        alt: "event 11",
        eventDetails: "Award ceremony recognizing top projects and contributions."
    },
    {
        id: 12,
        src: import.meta.env.BASE_URL + "gallery/e82cb9d15a0d644292b7e0d45330e371.jpg",
        alt: "event 12",
        eventDetails: "Closing remarks and feedback collection from attendees."
    }
];

export default EventDatas;
