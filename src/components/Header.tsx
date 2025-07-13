interface HeaderProps {
    text: string;
}

const Header: React.FC<HeaderProps> = ({ text }) => {
    return (
        <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {text}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>
    );
};

export default Header;
