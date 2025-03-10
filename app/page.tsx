"use client";

import Aurora from "@/components/aurora";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute top-0 left-0 right-0 h-20 z-10 overflow-hidden">
        <div className="-mt-10">
          {" "}
          <Aurora
            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
        </div>
      </div>

      {/* Your main content */}
      <div className="relative flex flex-col items-center justify-center min-h-screen py-2">
        <main className="z-10 text-center">
          <h1>Website under construction.</h1>
          <h2>Check back again soon.</h2>
        </main>
      </div>
    </div>
  );
}
