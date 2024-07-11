import Airbnb from "../../../assets/Icons/Airbnb";
import FedEx from "../../../assets/Icons/FedEx";
import Google from "../../../assets/Icons/Google";
import Hubspot from "../../../assets/Icons/Hubspot";
import MicroSoft from "../../../assets/Icons/MicroSoft";
import Walmart from "../../../assets/Icons/Walmart";

const LogoClouds1 = () => {
  return (
    <div className="h-1/3 py-2 lg:py-4 mb-2 px-4 lg:px-28 md:px-16">
      <div className="flex flex-wrap justify-center w-full gap-x-7 lg:gap-x-11 my-5">
        <div className="m-3 sm:m-3.5">
          <Airbnb />
        </div>
        <div className="m-3 sm:m-3.5">
          <Hubspot />
        </div>
        <div className="m-3 sm:m-3.5">
          <Google />
        </div>
        <div className="m-3 sm:m-3.5">
          <MicroSoft />
        </div>
        <div className="m-3 sm:m-3.5">
          <Walmart />
        </div>
        <div className="m-3 sm:m-3.5">
          <FedEx />
        </div>
      </div>
    </div>
  );
};

export default LogoClouds1;
