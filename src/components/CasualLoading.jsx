import React, { useEffect, useState } from "react";
import { FaCoffee, FaCookieBite } from "react-icons/fa";
import data from "../assets/data.json";

const CasualLoading = () => {
  const [activeIcon, setActiveIcon] = useState(0);
  const icons = [
    <FaCoffee key="coffee" style={{ color: "#6F4E37" }} />,
    <FaCookieBite key="cookie" style={{ color: "#D27D46" }} />,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIcon((prev) => (prev + 1) % icons.length);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#FFF9F0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      {/* Ikon Animasi */}
      <div
        style={{
          fontSize: "3rem",
          marginBottom: "0.1rem",
          animation: "bounce 0.8s infinite alternate",
        }}
      >
        {icons[activeIcon]}
      </div>

      {/* Brand Name - Cormorant Garamond */}
      <h2
        style={{
          color: "#5C4A42",
          marginBottom: "0.1rem",
          textAlign: "center",
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 600,
          fontSize: "2rem",
          letterSpacing: "0.6px",
        }}
      >
        {data.brand.name}
      </h2>

      {/* Paragraf - Manrope */}
      <p
        style={{
          color: "#A68A72",
          marginBottom: "1rem",
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 400,
          fontSize: "0.7rem",
          maxWidth: "300px",
          textAlign: "center",
          lineHeight: "1.6",
        }}
      >
        "Menyiapkan pengalaman terbaik untuk Anda..."
      </p>

      <div
        style={{
          width: "200px",
          height: "8px",
          backgroundColor: "#F0E6D2",
          borderRadius: "4px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#C9A66B",
            borderRadius: "4px",
            animation: "progress 3s ease-in-out infinite",
          }}
        ></div>
      </div>

      {/* Tambahkan style animasi dan font */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Manrope:wght@400;500;600&display=swap");

        @keyframes bounce {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-15px);
          }
        }
        @keyframes progress {
          0% {
            transform: translateX(-100%);
            width: 30%;
          }
          50% {
            width: 70%;
          }
          100% {
            transform: translateX(100%);
            width: 30%;
          }
        }
      `}</style>
    </div>
  );
};

export default CasualLoading;
