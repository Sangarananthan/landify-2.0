const FeaturesCard = ({ icon, headline, Description }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center w-11/12 max-w-xs m-5 p-3 md:w-3/5 lg:w-1/3">
      <div>{icon}</div>
      <h1 className="text-2xl my-4 font-semibold">{headline}</h1>
      <p className="text-sm">{Description}</p>
    </div>
  );
};

export default FeaturesCard;
