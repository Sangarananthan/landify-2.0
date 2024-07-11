import PlayButton from "../../../assets/Icons/PlayButton";
import { assest } from "../../../assets/assests";
const Hero = () => {
  return (
    <div className="bg-[#1DB5BE] pt-12 flex flex-col lg:flex-row md:flew-row items-center px-10 lg:px-16 font-inter justify-between">
      <div className="text-start md:w-1/2">
        <h1 className="text-4xl font-bold mb-4 lg:mb-7 lg:text-6xl md:text-5xl">
          The easiest way to manage projects
        </h1>
        <p className="text-lg mb-4 lg:mb-7">
          From the small stuff to the big picture, organizes the work so teams
          know what to do, why it matters, and how to get it done.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-[#7C3AED] text-white py-2 px-6 rounded-md">
            Get Started
          </button>
          <button className="flex items-center bg-gray-200 text-[#7C3AED] py-2 px-4 rounded-md">
            <PlayButton className="mr-2" />
            <p>Watch Video</p>
          </button>
        </div>
      </div>
      <div className="m-7">
        <img src={assest.Mobile} alt="PhoneImage" className="w-full max-w-xs" />
      </div>
    </div>
  );
};

export default Hero;
