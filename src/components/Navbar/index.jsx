import React from "react";
import { styles } from "../../styles";
import NavItem from "./NavItem";
import data from "../../assets/data.json";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <img
          src={data.brand.logo}
          alt={data.brand.name}
          style={styles.logoImage}
        />
      </div>
      <div style={styles.navLinks}>
        <NavItem
          icon={<FaInstagram style={{ color: "#E1306C" }} />}
          url={data.social.instagram.url}
        />
        <NavItem
          icon={<FaWhatsapp style={{ color: "#25D366" }} />}
          url={data.social.whatsapp.url}
        />
      </div>
    </nav>
  );
};

export default Navbar;
