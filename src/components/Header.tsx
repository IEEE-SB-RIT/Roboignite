interface HeaderProps {
	text: string;
}

const Header: React.FC<HeaderProps> = ({ text }) => {
	return (
		<div className="text-center m-10">
			<h2 className=" font-josefin font-bold text-white  text-5xl underline underline-offset-8 tracking-tight text-shadow-sm  text-shadow-amber-700">
				{text}
			</h2>
			{/* <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" /> */}
		</div>
	);
};

export default Header;
