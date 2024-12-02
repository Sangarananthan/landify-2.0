import AppStore from "../../../assets/Icons/AppStore";
import PlayStore from "../../../assets/Icons/PlayStore";
import { assest } from "../../../assets/assests";

const Cta = () => {
  return (
    <div className="bg-[#1DB5BE] w-full flex flex-col md:flex-row lg:flex-row items-center px-10 lg:px-16 font-inter justify-between">
      <div className="p-5 flex flex-col mx-7 justify-evenly w-full lg:w-[700px] ">
        <div className="flex flex-col">
          <h1 className="text-4xl lg:text-6xl md:text-5xl font-bold mb-4">
            Manage all projects from your mobile
          </h1>
          <p className="mt-2 text-1xl font-medium text-gray-800">
            Download the app to manage your projects, keep track of the progress
            and complete tasks without procrastinating. Stay on track and
            complete on time!
          </p>
        </div>
        <div className="mt-4">
          <p className="font-semibold text-1.5xl">Get the App</p>
          <div className="flex gap-3 mt-2">
            <PlayStore />
            <AppStore />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 overflow-hidden px-4">
        <img
          src={assest.Mobile}
          alt=""
          className="w-full max-w-[300px] md:w-1/2 object-contain transform md:-translate-y-20 lg:-translate-y-40"
        />
        <img
          src={assest.Mobile}
          alt=""
          className="w-full max-w-[300px] md:w-1/2 object-contain transform md:translate-y-20 lg:translate-y-40"
        />
      </div>
    </div>
  );
};

export default Cta;
