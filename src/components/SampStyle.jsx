import React from "react";

const SampStyle = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="circle w-[400px] h-[400px] bg-[#7c3aed58] blur-[50px] rounded-full absolute top-[-70px] left-[80%]"></div>
      <div className="bands relative top-[450px] left-[20px] flex flex-col items-center justify-center rotate-[-8deg] z-2">
        <div className="layer1 w-[120%] h-[50px] flex flex-wrap justify-between skew-[-15deg]">
          <div className="band1 w-[60%] h-full bg-white"></div>
          <div className="band2 w-[30%] h-full bg-[#ede9fe]"></div>
          <div className="band3 w-[10%] h-full bg-transparent"></div>
        </div>
        <div className="layer2 w-[120%] h-[50px] flex flex-wrap justify-between skew-[-15deg]">
          <div className="band1 w-[30%] h-full bg-[#75e3ea]"></div>
          <div className="band2 w-[40%] h-full bg-[#fdfcff]"></div>
          <div className="band3 w-[30%] h-full bg-[#c4b5fd]"></div>
        </div>
        <div className="layer3 w-[120%] h-[50px] flex flex-wrap justify-between skew-[-15deg]">
          <div className="band1 w-[20%] h-full bg-[#ede9fe]"></div>
          <div className="band2 w-[60%] h-full bg-[#fdfcff]"></div>
          <div className="band3 w-[20%] h-full bg-[#75e3ea]"></div>
        </div>
      </div>
      <div className="circle w-[200px] h-[200px] bg-[#3aede158] blur-[50px] rounded-full absolute top-[250px] left-[20%]"></div>
    </div>
  );
};

export default SampStyle;
