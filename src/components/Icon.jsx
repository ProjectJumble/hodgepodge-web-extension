import React from "react";

export default () => {
  const svg = { fillRule: "evenodd", clipRule: "evenodd" };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={svg}
      className="mx-auto d-block"
      x="0"
      y="0"
      height="128"
      viewBox="0 0 128 128"
    >
      <defs>
        <linearGradient id="lg1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="100%" stopColor="#764ba2" />
        </linearGradient>

        <linearGradient id="lg2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.3" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>

      <g>
        <path
          fill="url(#lg1)"
          d="M64 128c-47.42,-19.56 -67.74,-54.76 -60.97,-105.6l60.97 -22.4 60.97 22.4c6.77,50.84 -13.55,86.04 -60.97,105.6z"
        />
        <path
          fill="url(#lg2)"
          d="M64 0l0 128c-47.42,-19.56 -67.74,-54.76 -60.97,-105.6l60.97 -22.4z"
        />
      </g>
    </svg>
  );
};
