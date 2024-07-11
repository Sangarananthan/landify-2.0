import Airbnb from "../../../assets/Icons/Airbnb";
import FedEx from "../../../assets/Icons/FedEx";
import Google from "../../../assets/Icons/Google";
import Hubspot from "../../../assets/Icons/Hubspot";
import MicroSoft from "../../../assets/Icons/MicroSoft";
import Walmart from "../../../assets/Icons/Walmart";

const LogoClouds1 = () => {
  return (
    <div className="flex flex-wrap items-center justify-evenly mb-8 p-0 lg:h-40 lg:p-5 lg:justify-around md:p-4 sm:justify-center sm:w-full gap-4">
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
  );
};

export default LogoClouds1;
