"use client";

import React from "react";
import DecayCard from "../decay-card";

export default function CardBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-0 overflow-hidden">
      <div className="relative w-full max-w-5xl h-screen">
        {/* Center card - smaller, more transparent */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-85 blur-[2px]">
          <DecayCard
            width={590}
            height={590}
            image="/rs-transparent-128-128.svg"
          />
        </div>
        {/* Top left card - larger, slight rotation */}
        {/* <div className="absolute left-[-5%] top-[15%] opacity-80 blur-[2px] transform -rotate-6">
          <DecayCard
            width={250}
            height={320}
            image="https://images.unsplash.com/photo-1595437193398-f24279553f4f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div> */}
        {/* Top right card - medium size, different rotation */}
        {/* <div className="absolute right-[10%] top-[8%] opacity-85 blur-[2px] transform rotate-3">
          <DecayCard
            width={360}
            height={180}
            image="https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div> */}
        {/* Bottom left card - smallest, no blur but lower opacity */}
        {/* <div className="absolute left-[12%] bottom-[20%] opacity-90 blur-[1px] transform rotate-12">
          <DecayCard
            width={160}
            height={210}
            image="https://images.unsplash.com/photo-1623161551706-318825cd18ef?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHJlbm92YXRpb258ZW58MHx8MHx8fDI%3D"
          />
        </div> */}
        {/* Bottom right card - offset, medium blur */}
        {/* <div className="absolute right-[-2%] bottom-[12%] opacity-85 blur-[2px] transform -rotate-8">
          <DecayCard
            width={220}
            height={280}
            image="https://images.unsplash.com/photo-1548705102-56b00f2bb299?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div> */}
      </div>
    </div>
  );
}
