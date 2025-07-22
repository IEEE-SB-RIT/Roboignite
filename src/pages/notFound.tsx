import Button from "../components/Button";

const NotFound = () => {
	return (
		<div className=" h-dvh flex flex-col gap-y-10 items-center justify-center">
			<h1 className="font-josefin text-center text-3xl">
				Sorry the page you're looking for does not exist ☹️
			</h1>
			<Button text="Return to Home" isNavigate={true} link="/" />
		</div>
	);
};

export default NotFound;
