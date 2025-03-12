"use client";

import React from "react";

export default function RepowerLogoLoader() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 24"
      fill="none"
      stroke="#77B254"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-[200px] ml-16"
    >
      <path d="M6 18 Q2 18 2 14 T2 10 Q2 6 6 6 M6 6 H8" />
      <path d="M13 18 H15 Q19 18 19 14 T19 10 Q19 6 15 6" />
      <path d="M22 13 V11" />
      <path d="M12 6 L8 12 H14 L9 18">
        <animate
          attributeName="stroke"
          values="#FFA725;#77B254;#FFA725;"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-dasharray"
          values="0,24;24,24;24,24"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-dashoffset"
          values="0;0;-24"
          dur="2s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
}
