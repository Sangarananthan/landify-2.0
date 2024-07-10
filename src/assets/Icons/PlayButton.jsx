import React from "react";

function PlayButton() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#7C3AED"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
      ></path>
      <path
        stroke="#7C3AED"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 8l6 4-6 4V8z"
      ></path>
    </svg>
  );
}

export default PlayButton;
