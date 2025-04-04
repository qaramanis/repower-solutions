"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

interface MapProps {
  address: string;
  coordinates: [number, number]; // [latitude, longitude]
  isVisible: boolean;
}

// Type definitions for Leaflet to avoid TypeScript errors
declare global {
  interface Window {
    L: any;
  }
}

export default function LeafletMap({
  address,
  coordinates,
  isVisible,
}: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    // Safely check if window exists (client-side only code)
    const isBrowser = typeof window !== "undefined";
    if (!isBrowser) return;

    // Load Leaflet CSS
    if (!document.getElementById("leaflet-css")) {
      const link = document.createElement("link");
      link.id = "leaflet-css";
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }

    // Create and initialize map function
    const initializeMap = () => {
      if (!mapRef.current || !window.L) return;

      // If a map instance already exists, remove it to prevent duplicates
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }

      // Create new map instance
      const map = window.L.map(mapRef.current).setView(coordinates, 15);
      mapInstanceRef.current = map;

      // Add OpenStreetMap tile layer
      window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Add marker with popup
      const marker = window.L.marker(coordinates).addTo(map);
      marker.bindPopup(`<b>Repower Solutions</b><br>${address}`).openPopup();

      // Add zoom controls
      map.zoomControl.setPosition("bottomright");

      setIsMapLoaded(true);
    };

    // Check if Leaflet is already loaded
    if (window.L) {
      initializeMap();
    } else {
      // Load Leaflet script
      const script = document.createElement("script");
      script.id = "leaflet-js";
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      script.async = true;
      script.onload = () => {
        initializeMap();
      };
      document.body.appendChild(script);
    }

    // Handle window resize
    const handleResize = () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize();
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listeners and map instance
    return () => {
      window.removeEventListener("resize", handleResize);
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [coordinates, address]); // Dependencies

  return (
    <motion.div
      className="w-full h-96 rounded-lg overflow-hidden shadow-md mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 1.5,
        ease: [0.23, 1, 0.32, 1],
        delay: 0.6,
      }}
    >
      <div ref={mapRef} className="w-full h-full bg-gray-100">
        {!isMapLoaded && (
          <div className="flex items-center justify-center h-full">
            <div className="text-gray-500 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600 mx-auto mb-2"></div>
              <p>Φόρτωση χάρτη...</p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
