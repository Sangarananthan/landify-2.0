const MetricsCard = ({ icon, number, label }) => {
  return (
    <div className="w-full lg:w-72 md:w-80 p-2 flex flex-row items-center gap-5 font-inter">
      <div className="w-8">{icon}</div>
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold">{number}</h1>
        <p className=" text-gray-600">{label}</p>
      </div>
    </div>
  );
};

export default MetricsCard;
