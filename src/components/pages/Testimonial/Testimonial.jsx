import React, { useState, useEffect } from "react";
import Hubspot from "../../../assets/Icons/Hubspot";
import Airbnb from "../../../assets/Icons/Airbnb";
import Quotes from "../../../assets/Icons/Quotes";
import TestimonialCard from "../../Cards/TestimonialCard";
import StrapiIcon from "../../../assets/Icons/StrapiIcon";

const Testimonial = () => {
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 1024);

  const handleResize = () => {
    setIsTablet(window.innerWidth <= 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-screen h-full p-8 bg-[#d5fafc] relative box-border">
      <div className="flex items-start p-5">
        <div className="opacity-50 w-7 ">
          <Quotes />
        </div>
        <div className="flex flex-col gap-2 z-3 w-full md:w-3/4 lg:w-1/2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Real Stories from Real Customers
          </h1>
          <p className="text-base md:text-lg text-gray-700">
            Get inspired by these stories.
          </p>
        </div>
      </div>

      <div
        className={`${
          isTablet
            ? "flex flex-wrap gap-8"
            : "flex justify-center gap-12 mx-auto"
        } max-w-5xl`}
      >
        <div className="flex flex-col items-center">
          <TestimonialCard
            className="texticard bg-white rounded-lg p-4 m-5 flex flex-col items-center text-center"
            logo={<Airbnb />}
            content={
              "I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it."
            }
            feedback={"Jane Cooper"}
            person={"CEO, Airbnb"}
          />
        </div>
        <div className="flex flex-col items-center gap-8">
          <TestimonialCard
            className="texticard bg-white rounded-lg p-4 m-5 flex flex-col items-center text-center"
            logo={<Hubspot />}
            content={
              "To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable."
            }
            feedback={"Floyd Miles"}
            person={"Vice President, GoPro"}
          />
          <TestimonialCard
            className="texticard bg-white rounded-lg p-4 m-5 flex flex-col items-center text-center"
            logo={<StrapiIcon />}
            content={"Landify saved our time in designing my company page."}
            feedback={"Kristin Watson"}
            person={"Co-Founder, Strapi"}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
