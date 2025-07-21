import { useEffect, useRef, useState } from "react";

const GradientBackground = () => {
	const interactiveRef = useRef<HTMLDivElement>(null);
	const [curX, setCurX] = useState(0);
	const [curY, setCurY] = useState(0);
	const [tgX] = useState(0);
	const [tgY] = useState(0);
	const [isSafari, setIsSafari] = useState(false);

	useEffect(() => {
		setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
	}, []);

	useEffect(() => {
		const moveInterval = setInterval(() => {
			setCurX((prev) => prev + (tgX - prev) / 20);
			setCurY((prev) => prev + (tgY - prev) / 20);

			if (interactiveRef.current) {
				interactiveRef.current.style.transform = `translate(${Math.round(
					curX
				)}px, ${Math.round(curY)}px)`;
			}
		}, 1000 / 60);

		return () => clearInterval(moveInterval);
	}, [curX, curY, tgX, tgY]);

	//   const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
	//     if (interactiveRef.current) {
	//       const rect = interactiveRef.current.getBoundingClientRect();
	//       setTgX(event.clientX - rect.left);
	//       setTgY(event.clientY - rect.top);
	//     }
	//   };

	return (
		<div className="h-full w-full relative overflow-hidden ">
			{/* Inject animation styles */}
			<style>
				{`
          @keyframes first {
            0% { transform: rotate(0deg) translateX(-1000px) rotate(0deg); }
            100% { transform: rotate(360deg) translateX(50px) rotate(-360deg); }
          }
          @keyframes second {
            0% { transform: rotate(120deg) translateX(10px) rotate(-120deg); }
            100% { transform: rotate(480deg) translateX(1000px) rotate(-480deg); }
          }
          @keyframes third {
            0% { transform: rotate(240deg) translateX(15px) rotate(-240deg); }
            100% { transform: rotate(600deg) translateX(1500px) rotate(-600deg); }
          }
          @keyframes fourth {
            0% { transform: rotate(60deg) translateX(8px) rotate(-60deg); }
            100% { transform: rotate(420deg) translateX(800px) rotate(-420deg); }
          }
          @keyframes fifth {
            0% { transform: rotate(300deg) translateX(12px) rotate(-300deg); }
            100% { transform: rotate(660deg) translateX(1200px) rotate(-660deg); }
          }
          .animate-first { animation: first 15s infinite linear; }
          .animate-second { animation: second 20s infinite linear; }
          .animate-third { animation: third 25s infinite linear; }
          .animate-fourth { animation: fourth 30s infinite linear; }
          .animate-fifth { animation: fifth 35s infinite linear; }
        `}
			</style>

			<svg className="hidden">
				<defs>
					<filter id="blurMe">
						<feGaussianBlur
							in="SourceGraphic"
							stdDeviation="10"
							result="blur"
						/>
						<feColorMatrix
							in="blur"
							mode="matrix"
							values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -8"
							result="goo"
						/>
						<feBlend in="SourceGraphic" in2="goo" />
					</filter>
				</defs>
			</svg>

			<div
				className={`gradients-container h-full w-full blur-lg ${
					isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
				}`}
			>
				{/* Interactive orb (now smaller and positioned properly) */}
				{/* <div
          ref={interactiveRef}
          onMouseMove={handleMouseMove}
          className="absolute [background:radial-gradient(circle_at_center,_rgba(140,100,255,0.8)_0,_rgba(140,100,255,0)_50%)_no-repeat] [mix-blend-mode:hard-light] w-[80%] h-[80%] top-[10%] left-[10%] opacity-70"
        /> */}

				{/* Static animated orbs */}
				{/* <div className="absolute [background:radial-gradient(circle_at_top_right,_rgba(18,113,255,0.8)_0,_rgba(18,113,255,0)_50%)_no-repeat] [mix-blend-mode:hard-light] w-[80%] h-[80%] top-[10%] left-[10%] [transform-origin:center_center] animate-first opacity-100" />
				<div className="absolute [background:radial-gradient(circle_at_bottom_right,_rgba(221,74,255,0.8)_0,_rgba(221,74,255,0)_50%)_no-repeat] [mix-blend-mode:hard-light] w-[80%] h-[80%] top-[10%] left-[10%] [transform-origin:center_center] animate-second opacity-100" />
				<div className="absolute [background:radial-gradient(circle_at_bottom_left,_rgba(100,220,255,0.8)_0,_rgba(100,220,255,0)_50%)_no-repeat] [mix-blend-mode:hard-light] w-[80%] h-[80%] top-[10%] left-[10%] [transform-origin:center_center] animate-third opacity-100" />
				<div className="absolute [background:radial-gradient(circle_at_top_left,_rgba(200,50,50,0.8)_0,_rgba(200,50,50,0)_50%)_no-repeat] [mix-blend-mode:hard-light] w-[80%] h-[80%] top-[10%] left-[10%] [transform-origin:center_center] animate-fourth opacity-70" />
				<div className="absolute [background:radial-gradient(circle_at_center,_rgba(180,180,50,0.8)_0,_rgba(180,180,50,0)_50%)_no-repeat] [mix-blend-mode:hard-light] w-[80%] h-[80%] top-[10%] left-[10%] [transform-origin:center_center] animate-fifth opacity-100" /> */}

				<div className="absolute [background:radial-gradient(ellipse_at_bottom_right,_rgba(152,1,46,0.7)_0,_rgba(152,1,46,0)_50%)_no-repeat] [mix-blend-mode:hard-light] w-[80%] h-[80%] top-[10%] left-[10%] [transform-origin:center_center] animate-fourth opacity-100" />

				<div className="absolute [background:radial-gradient(ellipse_at_top_left,_rgba(97,17,106,0.7)_0,_rgba(97,17,106,0)_50%)_no-repeat] [mix-blend-mode:hard-light] w-[80%] h-[80%] top-[10%] left-[10%] [transform-origin:center_center] animate-fifth opacity-100" />
			</div>

			<div className="relative z-10 h-full flex items-center justify-center">
				<div className="text-white text-center">
					<h1 className="text-5xl font-bold mb-4">Gradient Background</h1>
					<p className="text-xl">
						Interactive animated background with mouse tracking
					</p>
				</div>
			</div>
		</div>
	);
};

export default GradientBackground;
