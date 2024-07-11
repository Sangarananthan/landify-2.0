const MetricsCard = ({ icon, number, label }) => {
  return (
    <div className="flex items-center p-5 w-60 lg:w-80 gap-5 bg-gray-100 rounded-lg">
      <div className="w-8">{icon}</div>
      <div className="flex flex-col">
        <h1 className="text-xl">{number}</h1>
        <p className="text-base text-gray-600">{label}</p>
      </div>
    </div>
  );
};

export default MetricsCard;
