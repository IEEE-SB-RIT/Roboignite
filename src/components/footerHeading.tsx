import type { FC, ReactNode } from "react";

const FooterHeading: FC<{ text: ReactNode }> = ({ text }) => (
	<h2 className="font-raleway underline underline-offset-4  text-xl text-zinc-300 font-bold mb-3 ">
		{text}
	</h2>
);

export default FooterHeading;
