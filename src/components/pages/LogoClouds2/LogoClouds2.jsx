import Icon1 from "./Row1_Icons/Icon1";
import Icon2 from "./Row1_Icons/Icon2";
import Icon3 from "./Row1_Icons/Icon3";
import Icon4 from "./Row1_Icons/Icon4";
import Icon5 from "./Row2_Icons/Icon5";
import Icon6 from "./Row2_Icons/Icon6";
import Icon7 from "./Row2_Icons/Icon7";

const LogoClouds2 = () => {
  return (
    <div className=" w-full flex flex-col lg:flex-row md:flex-row h-1/3 py-12 lg:py-10 mb-2 justify-between px-4 lg:px-28 md:px-16">
      <div className="flex flex-col items-start w-full lg:w-1/2 md:full my-7">
        <div className="flex flex-col">
          <h1 className="text-4xl lg:text-5xl md:text-4xl font-bold mb-3 lg:mb:6 md:mb-4 w-full lg:w-2/3">
            Easy integrations with 170+ tools
          </h1>
          <p className="mb-3 lg:mb-6 md:mb-6 text-1xl font-medium">
            Connect Landify with your favourite tools that you use daily and
            keep things on track.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center w-full lg:w-1/2 p-4">
        <div className="bg-[#EDE9FE] h-full w-full lg:w-2/3 rounded-b-full p-4">
          <div className="flex flex-row gap-2 justify-center mb-4 scale-125">
            <Icon1 />
            <Icon2 />
            <Icon3 />
            <Icon4 />
          </div>
          <div className="flex flex-row gap-2 justify-center scale-125">
            <Icon5 />
            <Icon6 />
            <Icon7 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoClouds2;
