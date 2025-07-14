// src/components/About.tsx
import React from "react";
import Header from "../components/Header.tsx";

const About: React.FC = () => {
    return (
        <section className="text-white py-16 px-6 sm:px-10 lg:px-20">
            <Header text={"About Us"} />
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

                {/* IEEE RAS SBC RIT Card */}
                <div className="mt-10 p-6 rounded-lg  shadow-lg">
                    <h2 className="text-2xl font-semibold text-indigo-300 mb-2">
                        IEEE RAS SBC RIT
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        IEEE RAS SBC RIT is a dynamic Student Branch Chapter of IEEE SB RIT,
                        dedicated to robotics and automation. It offers an exciting environment
                        for students to delve into this field and make meaningful contributions.
                        The chapter has been recognized with prestigious awards for its excellence
                        in 2019 and 2022.
                    </p>
                </div>

                {/* IEEE SB RIT Card */}
                <div className="mt-6 p-6 rounded-lg  shadow-lg">
                    <h2 className="text-2xl font-semibold text-indigo-300 mb-2">
                        IEEE SB RIT
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        The IEEE SB RIT is one of the most vibrant and significant student
                        branches in the Kerala section. Established in January 2006, the IEEE
                        student branch of Rajiv Gandhi Institute of Technology Kottayam has
                        proven to be a powerhouse of highly dedicated and energetic volunteers.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
