import React from "react";
import { styles } from "../../styles";

const LocationCard = ({ image, address, ecommerceLinks }) => {
  return (
    <div style={styles.locationCard}>
      <img src={image} alt="Lokasi Toko" style={styles.locationImage} />
      <p style={styles.address}>{address}</p>
      <div style={styles.ecommerceLinks}>
        {ecommerceLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.ecommerceLink}
          >
            <img src={link.icon} alt={link.name} style={styles.ecommerceIcon} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default LocationCard;
