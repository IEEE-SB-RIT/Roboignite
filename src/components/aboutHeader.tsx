interface HeaderProps {
  text: string;
}

const AboutHeader: React.FC<HeaderProps> = ({ text }) => {
  return (
    <h2 className=" text-3xl font-medium sm:text-4xl font-oswald text-white pb-4 text-center sm:text-left mb-4">
      {text}
    </h2>
  );
};

export default AboutHeader;
