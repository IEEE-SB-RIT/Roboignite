import { useNavigate } from "react-router-dom";

const ComingSoonEvents = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen px-6 py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center">
            {/* Header Section */}
            <div className="text-center mb-16">
                <h2 className="text-5xl font-extrabold text-white bg-clip-text drop-shadow-lg">
                    Events
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-2" />
            </div>

            {/* Coming Soon Box */}
            <div
                className="flex flex-col items-center text-center bg-white/5 border border-white/10 backdrop-blur-sm p-10 rounded-2xl shadow-lg max-w-xl w-full">
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                    Events Dropping Soon
                </h1>
                <p className="text-white/70 mb-8 text-lg max-w-md">
                    Stay tuned! We’re working hard behind the scenes to bring exciting events your way.
                </p>
                <button
                    onClick={() => navigate("/")}
                    className="text-white text-lg font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-pink-500/40 hover:brightness-110 cursor-pointer"
                    style={{
                        background: "linear-gradient(180deg, #7d1f78 50%, #5a1155 80%, #320d3e 100%)"
                    }}
                >
                    Back to Home
                </button>

            </div>
        </div>
    );
};

export default ComingSoonEvents;
