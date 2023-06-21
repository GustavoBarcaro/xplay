import React from "react";

const HomeIcon = () => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.5"
          x2="0.5"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stop-color="#28dcd6" />
          <stop offset="1" stop-color="#69e8b5" />
        </linearGradient>
      </defs>
      <g id="MDI_home" data-name="MDI / home" opacity="0.6">
        <rect
          id="Boundary"
          width="48"
          height="48"
          opacity="0"
          fill="url(#linear-gradient)"
        />
        <path
          id="Path_home"
          data-name="Path / home"
          d="M19.6,44V29.529h8.8V44h11V24.706H46L24,3,2,24.706H8.6V44Z"
          transform="translate(0 1)"
          fill="url(#linear-gradient)"
        />
      </g>
    </svg>
  );
};

export default HomeIcon;
