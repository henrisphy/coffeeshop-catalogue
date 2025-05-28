import React from "react";
import { styles } from "../../styles";
import data from "../../assets/data.json";
import { FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <p style={styles.copyright}>
          © {new Date().getFullYear()} {data.brand.name}. All rights reserved.
        </p>

        {/* Social Links */}
        <div style={styles.socialLinks}>
          {/* Instagram */}
          <a
            href={data.social.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...styles.socialIcon,
              color: "black",
              fontSize: "1.1rem",

              transition: "all 0.3s ease",
              ":hover": {
                color: styles.colors?.accent || "#C9A66B",
                transform: "translateY(-3px)",
              },
            }}
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          {/* WhatsApp */}
          <a
            href={data.social.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...styles.socialIcon,
              color: "black",
              fontSize: "1.1rem",
              transition: "all 0.3s ease",
              ":hover": {
                color: styles.colors?.accent || "#C9A66B",
                transform: "translateY(-3px)",
              },
            }}
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>

          {/* Email - Jika tersedia */}
          {data.personal?.email && (
            <a
              href={`mailto:${data.personal.email}`}
              style={{
                ...styles.socialIcon,
                color: "black",
                fontSize: "1.1rem",
                transition: "all 0.3s ease",
                ":hover": {
                  color: styles.colors?.accent || "#C9A66B",
                  transform: "translateY(-3px)",
                },
              }}
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
