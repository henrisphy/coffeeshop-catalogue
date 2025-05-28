import React from "react";
import { styles } from "../styles";

const HomePage = () => {
  return (
    <section id="home" style={styles.section}>
      <div style={{ textAlign: "center" }}>
        <img
          src="/images/menucoffee/kopi/bg-1.jpg"
          alt="Kedai"
          style={{
            objectFit: "cover",
            maxWidth: "400px",
            width: "100%",
            margin: "0 auto",
            maxHeight: "100%",
            backgroundColor: "#FFF9F0",
            borderRadius: "20px",
            padding: "0rem",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            display: "flex",
            opacity: "0.3",
          }}
        />
        <h1
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            marginTop: "-6rem",
            color: "#111",
          }}
        >
          Selamat Datang
        </h1>
        <p
          style={{
            fontSize: "clamp(0.8rem, 4vw, 2.5rem)",
            marginTop: "-1.4rem",
            color: "#111",
            opacity: "1",
          }}
        ></p>
      </div>
    </section>
  );
};

export default HomePage;
