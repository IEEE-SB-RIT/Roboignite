// src/components/About.tsx
import React from "react";
import Header from "../components/Header.tsx";

const About: React.FC = () => {
    return (
        <section className="text-white py-16 px-6 sm:px-10 lg:px-20">
            <Header text={"About Us"}/>
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-indigo-400">
                    About RoboIgnite
                </h2>
                <p className="text-lg leading-relaxed text-gray-300">
                    <strong className="text-white">RoboIgnite</strong> is a hybrid
                    technical education program supported by the IEEE Robotics and
                    Automation Society, designed to enhance students' understanding of
                    robotics and automation through a dynamic series of events scheduled
                    from July to September.
                </p>
                <p className="text-lg leading-relaxed mt-4 text-gray-300">
                    Organised by the IEEE RAS Student Branch Chapter at RIT in
                    collaboration with the IEEE RAS Kerala Chapter, this program offers
                    participants an enriching experience integrating theoretical knowledge
                    with practical application.
                </p>
                <p className="text-lg leading-relaxed mt-4 text-gray-300">
                    We aim to provide a robust learning platform for students, fostering
                    peer-to-peer learning, reinforcing foundational knowledge, and
                    developing practical skills.
                </p>
            </div>
        </section>
    );
};

export default About;
