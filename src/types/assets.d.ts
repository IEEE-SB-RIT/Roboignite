// src/assets.d.ts

declare module "*.png" {
	const value: string;
	export default value;
}

declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.gif";
declare module "*.webp";