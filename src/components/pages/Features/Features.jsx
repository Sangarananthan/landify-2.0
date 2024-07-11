import FlexibilityIcon from "../../../assets/Icons/FlexibilityIcon";
import RobustIcon from "../../../assets/Icons/RobustIcon";
import UserFriendlyIcon from "../../../assets/Icons/UserFriendlyIcon";
import LayoutIcon from "../../../assets/Icons/LayoutIcon";
import ComponentIcon from "../../../assets/Icons/ComponentIcon";
import OrganiserIcon from "../../../assets/Icons/OrganiserIcon";
import FeaturesCard from "../../Cards/FeaturesCard";
const content = [
  {
    icon: <RobustIcon />,
    headline: "Robust workflow",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum",
  },
  {
    icon: <FlexibilityIcon />,
    headline: "Flexibility",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum",
  },
  {
    icon: <UserFriendlyIcon />,
    headline: "User friendly",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum",
  },
  {
    icon: <LayoutIcon />,
    headline: "Multiple layouts",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum",
  },
  {
    icon: <ComponentIcon />,
    headline: "Better components",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum",
  },
  {
    icon: <OrganiserIcon />,
    headline: "Well organised",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum",
  },
];

const Features = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full mb-12">
      <div className="flex flex-col items-center w-11/12 mb-5 lg:w-1/2 md:w-3/4">
        <h1 className="font-bold text-3xl mb-2 md:text-4xl lg:text-5xl">
          Tailor-made features
        </h1>
        <p className="text-center text-base md:text-lg lg:text-xl">
          Lorem ipsum is common placeholder text used to demonstrate the graphic
          elements of a document or visual presentation.
        </p>
      </div>
      <div className="flex flex-wrap justify-evenly items-center">
        {content.map((item) => (
          <FeaturesCard
            key={item.headline}
            icon={item.icon}
            headline={item.headline}
            Description={item.Description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
