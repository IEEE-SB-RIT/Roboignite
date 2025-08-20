import { useNavigate } from "react-router-dom";

interface ButtonProps {
	text: string;
	isNavigate: boolean;
	link: string;
}

// this is to make sure that if the button is for navigating back or go to some external link
const Button = ({ text, isNavigate, link }: ButtonProps) => {
	const navigate = useNavigate();
	const handleClick = () => {
		if (isNavigate) {
			navigate(link);
		} else {
			window.open(link, "_blank");
		}
	};
	return (
		<button
			onClick={handleClick}
			className="
    relative
    text-white text-lg font-semibold font-poppins
    px-6 py-3 rounded-xl
    transition-all duration-300
    shadow-lg
    hover:scale-105
    active:scale-95
    cursor-pointer
    overflow-hidden
  "
			style={{
				background: "linear-gradient(275deg, #6f1f8f 0%, #4c1165 100%)",
			}}
		>
			{/* Ripple Effect */}
			<span
				className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>

			{/* Button Text */}
			<span className="relative z-10">{text}</span>
		</button>

	);
};

export default Button;
