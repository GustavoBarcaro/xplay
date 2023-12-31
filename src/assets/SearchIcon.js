import React from "react";

const SearchIcon = () => {
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
          <stop offset="0" stop-color="#007289" />
          <stop offset="1" stop-color="#05618a" />
        </linearGradient>
      </defs>
      <g id="MDI_magnify" data-name="MDI / magnify" opacity="0.6">
        <rect
          id="Boundary"
          width="48"
          height="48"
          opacity="0"
          fill="url(#linear-gradient)"
        />
        <path
          id="Path_magnify"
          data-name="Path / magnify"
          d="M18.414,3A15.424,15.424,0,0,1,30.129,28.445l.64.64h1.873L44.5,40.943,40.943,44.5,29.086,32.643V30.769l-.64-.64A15.418,15.418,0,1,1,18.414,3m0,4.743A10.671,10.671,0,1,0,29.086,18.414,10.627,10.627,0,0,0,18.414,7.743Z"
          transform="translate(0 0)"
          fill="url(#linear-gradient)"
        />
      </g>
    </svg>
  );
};

export default SearchIcon;
