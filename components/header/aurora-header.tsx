"use client";

import Aurora from "../aurora";

export default function AuroraHeader() {
  return (
    <div className="fixed top-0 left-0 right-0 h-60 z-0 overflow-hidden">
      <Aurora
        colorStops={["#3E7B27", "#FFA725", "#3E7B27"]}
        blend={0.5}
        amplitude={1}
        speed={1}
      />
    </div>
  );
}
