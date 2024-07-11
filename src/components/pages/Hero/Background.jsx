import React from "react";

const Background = () => {
  return (
    <div className="w-full h-full bg-white">
      <div className="w-96 h-96 bg-purple-300 filter blur-3xl rounded-full relative -top-16 left-4/5"></div>
      <div className="relative top-52 left-5 flex flex-col justify-center items-center transform -rotate-6 z-10">
        <div className="w-full h-12 flex justify-between transform -skew-x-12">
          <div className="w-3/5 h-full bg-white"></div>
          <div className="w-1/4 h-full bg-purple-100"></div>
          <div className="w-1/12 h-full bg-transparent"></div>
        </div>
        <div className="w-full h-12 flex justify-between transform -skew-x-12 mt-2">
          <div className="w-1/4 h-full bg-blue-300"></div>
          <div className="w-2/5 h-full bg-white"></div>
          <div className="w-1/4 h-full bg-purple-300"></div>
        </div>
        <div className="w-full h-12 flex justify-between transform -skew-x-12 mt-2">
          <div className="w-1/5 h-full bg-purple-100"></div>
          <div className="w-3/5 h-full bg-white"></div>
          <div className="w-1/5 h-full bg-blue-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Background;
