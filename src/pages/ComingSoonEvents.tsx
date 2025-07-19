import Button from "../components/Button.tsx";
import Header from "../components/Header.tsx";

const ComingSoonEvents = () => {
	return (
		<div className=" px-6 py-10 flex flex-col items-center justify-center">
			<Header text={"Events"} />
			{/* Header Section */}
			{/* <div className="text-center mb-16">
                <h2 className="text-5xl font-extrabold text-white bg-clip-text drop-shadow-lg">
                    Events
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-2" />
            </div> */}

			{/* Coming Soon Box */}
			<div className="flex flex-col items-center text-center bg-white/5 border border-white/10 backdrop-blur-sm p-10 rounded-2xl shadow-lg max-w-xl w-full">
				<h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
					Events Dropping Soon
				</h1>
				<p className="text-white/70 mb-8 text-lg max-w-md">
					Stay tuned! We’re working hard behind the scenes to bring exciting
					events your way.
				</p>
				<Button text="Back to Home" isNavigate={true} link="/" />
			</div>
		</div>
	);
};

export default ComingSoonEvents;
