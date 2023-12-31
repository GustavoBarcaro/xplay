import React from "react";

const MusicBoxIcon = () => {
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
      <g
        id="MDI_music-box-multiple-outline"
        data-name="MDI / music-box-multiple-outline"
        opacity="0.6"
      >
        <rect
          id="Boundary"
          width="48"
          height="48"
          opacity="0"
          fill="url(#linear-gradient)"
        />
        <path
          id="Path_music-box-multiple-outline"
          data-name="Path / music-box-multiple-outline"
          d="M41.6,2H15.2a4.4,4.4,0,0,0-4.4,4.4V32.8a4.4,4.4,0,0,0,4.4,4.4H41.6A4.4,4.4,0,0,0,46,32.8V6.4A4.4,4.4,0,0,0,41.6,2m0,30.8H15.2V6.4H41.6M25.1,30.6a5.5,5.5,0,0,0,5.5-5.5V13h6.6V8.6H28.4V20.7a5.5,5.5,0,1,0-3.3,9.9M6.4,10.8H2V41.6A4.4,4.4,0,0,0,6.4,46H37.2V41.6H6.4"
          fill="url(#linear-gradient)"
        />
      </g>
    </svg>
  );
};

export default MusicBoxIcon;
