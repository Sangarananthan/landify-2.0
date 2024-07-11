import Icon1 from "./Row1_Icons/Icon1";
import Icon2 from "./Row1_Icons/Icon2";
import Icon3 from "./Row1_Icons/Icon3";
import Icon4 from "./Row1_Icons/Icon4";
import Icon5 from "./Row2_Icons/Icon5";
import Icon6 from "./Row2_Icons/Icon6";
import Icon7 from "./Row2_Icons/Icon7";

const LogoClouds2 = () => {
  return (
    <div className="bg-gray-100 w-full flex flex-col md:flex-row lg:flex-row items-center p-10 lg:p-16 font-inter justify-between">
      <div className="p-5 flex flex-col mx-7 justify-evenly w-full lg:w-[700px] ">
        <div className="flex flex-col">
          <h1 className="text-4xl lg:text-6xl md:text-5xl font-bold m-3">
            Easy integrations with 170+ tools
          </h1>
          <p className="mt-2 mx-3 text-1xl font-medium text-gray-500">
            Connect Landify with your favourite tools that you use daily and
            keep things on track.
          </p>
        </div>
      </div>
      <div className=" bg-[#EDE9FE] flex flex-col rounded-b-full">
        <div className="flex flex-row gap-2">
          <Icon1 />
          <Icon2 />
          <Icon3 />
          <Icon4 />
        </div>
        <div className="flex flex-row gap-2 justify-center ">
          <Icon5 />
          <Icon6 />
          <Icon7 />
        </div>
      </div>
    </div>
  );
};

export default LogoClouds2;
