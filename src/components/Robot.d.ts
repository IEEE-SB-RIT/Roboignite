import type { FC } from "react";

interface RobotProps {
	scale?: number;
	position?: [number, number, number];
	rotation?: [number, number, number];
}

declare const Robot: FC<RobotProps>;
export default Robot;
