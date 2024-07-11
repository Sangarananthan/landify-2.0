import React from "react";
import RobustIcon from "../../../assets/Icons/RobustIcon";
import LayoutIcon from "../../../assets/Icons/LayoutIcon";
import ComponentIcon from "../../../assets/Icons/ComponentIcon";
import ListViewIcon from "../../../assets/Icons/ListViewIcon";
import MetricsCard from "../../Cards/MetricsCard";

const metrics_content = [
  {
    icon: <RobustIcon />,
    number: "10,000+",
    label: "Users",
  },
  {
    icon: <LayoutIcon />,
    number: "2 Million",
    label: "Downloads per day",
  },
  {
    icon: <ComponentIcon />,
    number: "500+",
    label: "Clients",
  },
  {
    icon: <ListViewIcon />,
    number: "1140",
    label: "Countries",
  },
];

const Metrics = () => {
  return (
    <div className="w-full flex flex-col md:flex-row lg:flex-row items-center p-10 lg:p-16 font-inter justify-between ">
      <div className="flex flex-col items-start mb-10">
        <h1 className="text-4xl lg:text-5xl mb-4 w-full lg:w-3/5 font-bold">
          Our 18 years of achievements
        </h1>
        <p className="text-base lg:text-lg text-gray-500 font-semibold">
          With our super powers we have reached this
        </p>
      </div>
      <div className="flex flex-wrap gap-5 justify-center w-full lg:w-1/2">
        {metrics_content.map((card, index) => (
          <MetricsCard
            key={index}
            icon={card.icon}
            number={card.number}
            label={card.label}
          />
        ))}
      </div>
    </div>
  );
};

export default Metrics;
