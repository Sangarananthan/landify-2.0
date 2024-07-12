import Quotes2 from "../../assets/Icons/Quotes2";

const TestimonialCard = ({ className, logo, content, feedback, person }) => {
  return (
    <div className={`${className}`}>
      <div className="flex flex-col gap-5">
        <div>{logo}</div>
        <div className="h-2/3 flex gap-3">
          <div className="">
            <Quotes2 />
          </div>

          <div className="text-start flex flex-col gap-5">
            <h2>{content}</h2>
            <div className="flex flex-col ">
              <h2 className="font-bold">{feedback}</h2>
              <p>{person}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
