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
    label: "Downloads per day",
  },
  {
    icon: <LayoutIcon />,
    number: "2 Million",
    label: "Users",
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
    <div className=" w-full flex flex-col lg:flex-row md:flex-col h-1/3 py-12 lg:py-10 mb-2 justify-between px-4 lg:px-28 md:px-16">
      <div className="flex flex-col items-start w-full lg:w-1/2 md:full">
        <h1 className="text-4xl lg:text-5xl md:text-5xl font-bold mb-3 lg:mb:6 md:mb-4">
          Our 18 years of achievements
        </h1>
        <p className="mb-3 lg:mb-6 md:mb-6 text-1xl font-medium">
          With our super powers we have reached this
        </p>
      </div>
      <div className="flex flex-wrap gap-7 w-full lg:w-1/2">
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
