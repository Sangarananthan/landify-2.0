import Quotes from "../../assets/Icons/Quotes";

const TestimonialCard = ({ className, logo, content, feedback, person }) => {
  return (
    <div className={className}>
      <div className="p-5">{logo}</div>
      <div className="p-5 flex flex-col items-center">
        <div className="scale-50 mb-[-1rem]">
          <Quotes />
        </div>
        <div className="flex flex-col gap-4 items-center">
          <p className="text-sm">{content}</p>
          <div className="flex flex-col gap-1 items-center">
            <h1 className="text-lg">{feedback}</h1>
            <p className="text-sm font-medium text-gray-600">{person}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
