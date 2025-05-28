import React from "react";
import { styles } from "../../styles";

const ContactItem = ({ icon, label, value, url }) => {
  return (
    <div style={styles.contactItem}>
      <div style={{ ...styles.contactIcon, fontSize: "1.2rem" }}>{icon}</div>
      <div style={styles.contactInfo}>
        <span style={styles.contactLabel}>{label}:</span>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.contactLink}
        >
          {value}
        </a>
      </div>
    </div>
  );
};

export default ContactItem;
