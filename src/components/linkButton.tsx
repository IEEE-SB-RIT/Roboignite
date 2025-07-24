interface LinkButtonProps {
    content: string;
    link: string;
}

const LinkButton = ({content, link = "#"}: LinkButtonProps) => {
    return (
        <div
            className="flex items-center justify-center w-full py-2 rounded-xl text-md  bg-[#e834eb] hover:bg-[#e834eb]/30 hover:backdrop-blur-md hover:border hover:border-white/20 transition-all duration-300 hover:cursor-pointer">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <button className="cursor-pointer">
                    {content}
                </button>
            </a>
        </div>
    );
};

export default LinkButton;
