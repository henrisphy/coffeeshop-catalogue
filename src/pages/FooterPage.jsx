import React from "react";
import { styles } from "../styles";

const FooterPage = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Nama Brand. All rights reserved.</p>
    </footer>
  );
};

export default FooterPage;
