import PlayButton from "../../../assets/Icons/PlayButton";
import { assest } from "../../../assets/assests";
const Hero = () => {
  return (
    <div className="relative px-4 lg:px-28 md:px-16 bg-[#ffffff] pt-12 flex flex-col lg:flex-row md:flew-row items-center font-inter justify-between">
      <div className="relative z-10 text-start w-full lg:w-1/2">
        <h1 className="text-4xl lg:text-6xl md:text-5xl font-bold mb-3 lg:mb:6 md:mb-4">
          The easiest way to manage projects
        </h1>
        <p className="mb-3 lg:mb-6 md:mb-6 text-1xl font-medium">
          From the small stuff to the big picture, organizes the work so teams
          know what to do, why it matters, and how to get it done.
        </p>
        <div className="flex flex-row gap-7 font-medium">
          <button className="bg-[#7C3AED] text-white py-2 px-6 rounded-md">
            Get Started
          </button>
          <button className="flex items-center bg-[#e8e5ff] text-[#7C3AED] py-2 px-4 rounded-md">
            <PlayButton className="mr-2" />
            <p className="ml-2">Watch Video</p>
          </button>
        </div>
      </div>
      <div className="relative z-10 m-7">
        <img src={assest.Mobile} alt="PhoneImage" className="w-full max-w-xs" />
      </div>
    </div>
  );
};

export default Hero;
