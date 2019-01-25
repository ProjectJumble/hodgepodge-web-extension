import React from "react";

import { shadeColor } from "../../../helpers";

export default ({ color }) => {
  color = color || {
    topColor: "white",
    bottomColor: "white"
  };

  const shadow = shadeColor(color.topColor, -0.75);

  const svg = { fillRule: "evenodd", clipRule: "evenodd" };
  const circle1 = {
    fill: "none",
    stroke: "white",
    strokeWidth: 1.27,
    strokeOpacity: 0.3
  };
  const circle2 = {
    fill: "none",
    stroke: "white",
    strokeWidth: 1.27,
    strokeOpacity: 0.2
  };
  const circle3 = {
    fill: "none",
    stroke: "white",
    strokeWidth: 1.27,
    strokeOpacity: 0.1
  };
  const shield1 = {
    fill: { shadow },
    fillOpacity: 0.05
  };
  const shield2 = {
    fill: "white"
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={svg}
      className="card-img-top mt-3"
      x="0"
      y="0"
      height="192"
      viewBox="0 0 192 192"
    >
      <defs>
        <linearGradient id="lg1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color.bottomColor} stopOpacity="0.3" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="lg2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={shadow} stopOpacity="0" />
          <stop offset="100%" stopColor={shadow} stopOpacity="0.15" />
        </linearGradient>
      </defs>

      <g>
        <path
          style={circle1}
          d="M96 26.07c38.62,0 69.93,31.31 69.93,69.93 0,38.62 -31.31,69.93 -69.93,69.93 -38.62,0 -69.93,-31.31 -69.93,-69.93 0,-38.62 31.31,-69.93 69.93,-69.93z"
        />
        <path
          style={circle2}
          d="M96 13.35c45.65,0 82.65,37 82.65,82.65 0,45.65 -37,82.65 -82.65,82.65 -45.65,0 -82.65,-37 -82.65,-82.65 0,-45.65 37,-82.65 82.65,-82.65z"
        />
        <path
          style={circle3}
          d="M96 0.64c52.67,0 95.36,42.69 95.36,95.36 0,52.67 -42.69,95.36 -95.36,95.36 -52.67,0 -95.36,-42.69 -95.36,-95.36 0,-52.67 42.69,-95.36 95.36,-95.36z"
        />

        <circle fill="url(#lg2)" cx="96" cy="96" r="69.3">
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="3s"
            from="0 96 96"
            to="360 96 96"
            repeatCount="indefinite"
          />
        </circle>

        <path
          style={shield1}
          d="M96 145.59c-35.33,-14.86 -50.47,-41.61 -45.42,-80.25l45.42 -17.02 45.42 17.02c5.05,38.64 -10.09,65.39 -45.42,80.25z"
        />
        <path
          style={shield2}
          d="M96 143.68c-35.33,-14.57 -50.47,-40.79 -45.42,-78.67l45.42 -16.69 45.42 16.69c5.05,37.88 -10.09,64.1 -45.42,78.67z"
        />
        <path
          fill="url(#lg1)"
          d="M96 48.32l0 95.36c-35.33,-14.57 -50.47,-40.79 -45.42,-78.67l45.42 -16.69z"
        />
      </g>
    </svg>
  );
};
