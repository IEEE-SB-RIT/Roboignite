interface LinkButtonProps {
    content: string;
    link: string;
}

const LinkButton = ({content, link = "#"}: LinkButtonProps) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className=" flex items-center w-full py-2 px-4 justify-center rounded-xl text-md font-medium bg-[#e834eb] hover:bg-[#e834eb]/80 active:scale-95 transition-all duration-300 text-white shadow-md hover:border hover:border-white/20 hover:backdrop-blur-md"
        >
            {content}
        </a>
    );
};

export default LinkButton;
