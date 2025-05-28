import React from "react";
import { styles } from "../styles";
import data from "../assets/data.json";
import LocationCard from "../components/Location";
import ContactItem from "../components/Contact";
import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const LocationPage = () => {
  return (
    <section id="location" style={styles.section}>
      <h2 style={styles.sectionTitle}>Hubungi Kami</h2>

      <LocationCard
        image={data.location.image}
        address={data.location.address}
        ecommerceLinks={data.location.ecommerce}
        style={{
          marginBottom: "-2rem",
        }}
      />

      <div style={styles.contactContainer}>
        <ContactItem
          icon={<FaWhatsapp style={{ color: "#25D366" }} />}
          label="WhatsApp"
          value={data.social.whatsapp.number}
          url={data.social.whatsapp.url}
        />
        <ContactItem
          icon={<FaInstagram style={{ color: "#E1306C" }} />}
          label="Instagram"
          value={data.social.instagram.username}
          url={data.social.instagram.url}
        />
        <ContactItem
          icon={<FaEnvelope style={{ color: "#D44638" }} />}
          label="Email"
          value={data.personal.email}
          url={`mailto:${data.personal.email}`}
        />
        <ContactItem
          icon={<FaMapMarkerAlt style={{ color: "#4285F4" }} />}
          label="Alamat"
          value={data.location.address}
          url={data.location.mapUrl}
        />
      </div>
    </section>
  );
};

export default LocationPage;
