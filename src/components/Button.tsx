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
			className="text-white text-lg font-semibold font-poppins px-6 py-3 rounded-xl transition-all duration-300 shadow-md hover:brightness-110 cursor-pointer"
			style={{
				background: "linear-gradient(275deg, #6f1f8f 50%, #4c1165 100%)",
			}}
		>
			{text}
		</button>
	);
};

export default Button;
