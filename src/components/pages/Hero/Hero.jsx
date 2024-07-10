import PlayButton from "../../../assets/Icons/PlayButton";
import { assest } from "../../../assets/assests";
const Hero = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-20 md:px-4 sm:px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">
              The easiest way to manage projects
            </h1>
            <p className="text-lg mb-6">
              From the small stuff to the big picture, organizes the work so
              teams know what to do, why it matters, and how to get it done.
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
          <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
            <img
              src={assest.Mobile}
              alt="PhoneImage"
              className="w-full max-w-xs"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
