// import { useEffect, useRef, useState } from "react";

// interface Star {
// 	x: number;
// 	y: number;
// 	z: number;
// 	px: number;
// 	py: number;
// 	size: number;
// 	color: string;
// }

// interface HyperspaceHeroProps {
// 	text?: string;
// 	textColor?: string;
// 	starCount?: number;
// 	speed?: number;
// 	className?: string;
// }

// export default function HyperspaceHero({
// 	text = "30k",
// 	textColor = "linear-gradient(135deg, #8a2be2, #ff69b4)",
// 	starCount = 400,
// 	speed = 2,
// 	className = "",
// }: HyperspaceHeroProps) {
// 	const canvasRef = useRef<HTMLCanvasElement>(null);
// 	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
// 	const starsRef = useRef<Star[]>([]);
// 	const animationRef = useRef<number>(0);

// 	const initStars = () => {
// 		if (!canvasRef.current) return;

// 		const width = canvasRef.current.width;
// 		const height = canvasRef.current.height;
// 		const stars: Star[] = [];

// 		for (let i = 0; i < starCount; i++) {
// 			const star: Star = {
// 				x: Math.random() * width - width / 2,
// 				y: Math.random() * height - height / 2,
// 				z: Math.random() * 1000,
// 				px: 0,
// 				py: 0,
// 				size: Math.random() * 1.5 + 0.5,
// 				color: `rgba(${180 + Math.floor(Math.random() * 75)}, ${
// 					180 + Math.floor(Math.random() * 75)
// 				}, ${220 + Math.floor(Math.random() * 35)}, ${
// 					0.6 + Math.random() * 0.4
// 				})`,
// 			};
// 			stars.push(star);
// 		}

// 		starsRef.current = stars;
// 	};

// 	const drawStars = () => {
// 		if (!canvasRef.current) return;

// 		const canvas = canvasRef.current;
// 		const ctx = canvas.getContext("2d");
// 		if (!ctx) return;

// 		const width = canvas.width;
// 		const height = canvas.height;
// 		const centerX = width / 2;
// 		const centerY = height / 2;

// 		ctx.fillStyle = "#000";
// 		ctx.fillRect(0, 0, width, height);

// 		starsRef.current.forEach((star) => {
// 			star.z -= speed;

// 			if (star.z <= 0) {
// 				star.z = 1000;
// 				star.x = Math.random() * width - centerX;
// 				star.y = Math.random() * height - centerY;
// 			}

// 			const factor = 200 / star.z;
// 			star.px = star.x * factor + centerX;
// 			star.py = star.y * factor + centerY;

// 			const size = Math.min(star.size * (400 / star.z), 5);

// 			const prevFactor = 200 / (star.z + speed * 2);
// 			const prevX = star.x * prevFactor + centerX;
// 			const prevY = star.y * prevFactor + centerY;

// 			const gradient = ctx.createLinearGradient(prevX, prevY, star.px, star.py);
// 			gradient.addColorStop(0, "transparent");
// 			gradient.addColorStop(1, star.color);

// 			ctx.beginPath();
// 			ctx.moveTo(prevX, prevY);
// 			ctx.lineTo(star.px, star.py);
// 			ctx.strokeStyle = gradient;
// 			ctx.lineWidth = size;
// 			ctx.stroke();

// 			ctx.beginPath();
// 			ctx.arc(star.px, star.py, size / 2, 0, Math.PI * 2);
// 			ctx.fillStyle = star.color;
// 			ctx.fill();
// 		});
// 	};

// 	const animate = () => {
// 		drawStars();
// 		animationRef.current = requestAnimationFrame(animate);
// 	};

// 	useEffect(() => {
// 		const handleResize = () => {
// 			if (canvasRef.current && canvasRef.current.parentElement) {
// 				const parent = canvasRef.current.parentElement;
// 				const width = parent.clientWidth;
// 				const height = parent.clientHeight;

// 				setDimensions({ width, height });
// 				canvasRef.current.width = width;
// 				canvasRef.current.height = height;

// 				initStars();
// 			}
// 		};

// 		handleResize();
// 		window.addEventListener("resize", handleResize);

// 		return () => {
// 			window.removeEventListener("resize", handleResize);
// 		};
// 	}, []);

// 	useEffect(() => {
// 		if (dimensions.width > 0 && dimensions.height > 0) {
// 			initStars();
// 			animate();

// 			return () => {
// 				cancelAnimationFrame(animationRef.current);
// 			};
// 		}
// 	}, [dimensions]);

// 	return (
// 		<div className={`relative h-full w-full overflow-hidden ${className}`}>
// 			<canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
// 			<div className="absolute inset-0 flex items-center justify-center">
// 				<h1
// 					className="z-10 text-[7rem] font-bold leading-none"
// 					style={{
// 						backgroundImage: textColor,
// 						backgroundClip: "text",
// 						WebkitBackgroundClip: "text",
// 						color: "transparent",
// 						WebkitTextStroke: "2px rgba(255,255,255,0.1)",
// 					}}
// 				>
// 					{text}
// 				</h1>
// 			</div>
// 		</div>
// 	);
// }
