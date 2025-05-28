import React from "react";
import { styles } from "../../styles";

const NavItem = ({ icon, url, label, value }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.1vw",
        textDecoration: "none",
        color: styles.colors?.text || "#333",
        padding: "5px 0px",
        borderRadius: "2px",
        transition: "all 0.3s ease",
        ":hover": {
          backgroundColor: "rgba(0,0,0,0.05)",
        },
      }}
    >
      <span style={{ fontSize: "1.2rem" }}>{icon}</span>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: "0.8rem", opacity: 0.7 }}>{label}</span>
        <span style={{ fontWeight: "500" }}>{value}</span>
      </div>
    </a>
  );
};

export default NavItem;
