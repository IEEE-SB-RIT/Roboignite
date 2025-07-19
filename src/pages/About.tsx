import React from "react";
import Header from "../components/Header.tsx";
import AboutHeader from "../components/aboutHeader.tsx";

const About: React.FC = () => {
	return (
		<section className="text-zinc-300 font-thin font-recursive text-left">
			<Header text={"About Us"} />
			<div className="max-w-4xl mx-auto space-y-12">
				{/* About RoboIgnite */}
				<div className="p-6 rounded-lg text-center sm:text-left">
					<AboutHeader text={"RoboIgnite"} />
					<p className="text-lg leading-relaxed">
						RoboIgnite is a hybrid technical education program supported by the
						IEEE Robotics and Automation Society, designed to enhance students'
						understanding of robotics and automation through a dynamic series of
						events scheduled from July to September. Organised by the IEEE RAS
						Student Branch Chapter at RIT in collaboration with the IEEE RAS
						Kerala Chapter, this program offers participants an enriching
						experience integrating theoretical knowledge with practical
						application.
					</p>
					<p className="text-lg leading-relaxed mt-4 ">
						The program features a 4-week project-based robotics course (LEAP),
						outreach programs, expert-led technical talks, hands-on workshops,
						and networking opportunities, creating a comprehensive learning
						journey. We aim to provide a robust learning platform for students,
						fostering peer-to-peer learning, reinforcing foundational knowledge,
						and developing practical skills.
					</p>
				</div>

				<div className="p-6 rounded-lg">
					<AboutHeader text={"IEEE RAS SBC RIT"} />
					<p className="text-lg leading-relaxed">
						The IEEE RAS SBC RIT is a distinguished Student Branch Chapter
						dedicated to the advancement of robotics and automation. Founded on
						February 18, 2019, we create an engaging environment for students to
						pursue their passions and achieve excellence. By collaborating with
						affiliated collegiate Student Branches, we help students realize
						their dreams in robotics, and our achievements—including prestigious
						awards in 2019 and 2022—highlight our commitment to innovation.
					</p>
				</div>

				{/* IEEE RAS Kerala Chapter */}
				<div className="p-6 rounded-lg ">
					<AboutHeader text={"IEEE RAS Kerala Chapter"} />
					<p className="text-lg leading-relaxed">
						The IEEE RAS Kerala Chapter is a dynamic professional organization
						focused on advancing robotics and automation. By fostering
						collaboration and knowledge sharing, we empower members to drive
						innovation in these transformative fields. The engaging educational
						programs, technical events, and outreach initiatives support members
						and aim to make a positive impact on society.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
