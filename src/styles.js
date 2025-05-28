export const styles = {
  // Global styles
  body: {
    margin: 0,
    padding: 0,
    fontFamily: "'Arial', sans-serif",
    scrollBehavior: "smooth",
    backgroundColor: "#F0E6D2",
    fontFamily: "'Cormorant Garamond', serif",
  },

  // Section styles
  section: {
    padding: "4rem 2rem",
    minHeight: "100vh",
  },
  sectionTitle: {
    textAlign: "center",
    marginBottom: "2rem",
    fontSize: "2rem",
  },

  // Navbar styles
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#FFF9F0",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  logoImage: {
    height: "40px",
  },
  logoText: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  navLinks: {
    display: "flex",
    gap: "1.5rem",
  },
  navIcon: {
    display: "block",
    width: "30px",
    height: "30px",
  },
  iconImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },

  // Product styles
  categoryTitle: {
    fontSize: "1.8rem",
    margin: "2rem 0 1rem",
    color: "#333",
  },
  productTypeContainer: {
    margin: "2rem 0",
  },
  productTypeTitle: {
    fontSize: "1.4rem",
    marginBottom: "1rem",
    color: "#555",
  },
  productsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "1.5rem",
  },
  productCard: {
    backgroundColor: "#FFF9F0",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease",
    ":hover": {
      transform: "translateY(-5px)",
    },
  },
  productImage: {
    width: "100%",
    height: "80%",
    objectFit: "cover",
  },
  productName: {
    fontWeight: "semi-bold",
    fontSize: "1.2rem",
    padding: "1rem",
    textAlign: "center",
    margin: 0,
    color: "#555",
  },

  locationCard: {
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: "#FFF9F0",
    borderRadius: "10px",
    padding: "2rem",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  locationImage: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "1.5rem",
  },
  address: {
    fontSize: "1.1rem",
    textAlign: "center",
    marginBottom: "2rem",
  },
  ecommerceLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
  },
  ecommerceLink: {
    display: "block",
    width: "50px",
    height: "50px",
    transition: "transform 0.3s ease",
    ":hover": {
      transform: "scale(1.1)",
    },
  },
  ecommerceIcon: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },

  footer: {
    backgroundColor: "#C9A66B",
    color: "#fff",
    padding: "1rem",
    textAlign: "center",
  },
  footerContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
  },
  copyright: {
    margin: 0,
    fontSize: "1rem",
  },
  socialLinks: {
    display: "flex",
    gap: "1.5rem",
  },
  socialIcon: {
    width: "24px",
    height: "24px",
    filter: "brightness(0) invert(1)",
    transition: "transform 0.3s ease",
    ":hover": {
      transform: "scale(1.2)",
    },
  },
  // Contact Item styles
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginBottom: "1rem",
    backgroundColor: "#FFF9F0",
    padding: "1rem",
    borderRadius: "8px",
    width: "auto",
    maxWidth: "400px",
  },
  contactIcon: {
    width: "24px",
    height: "24px",
    objectFit: "contain",
  },
  contactInfo: {
    display: "flex",
    flexDirection: "column",
  },
  contactLabel: {
    fontSize: "0.9rem",
    color: "#333",
  },
  contactLink: {
    color: "#666",
    textDecoration: "none",
    fontWeight: "500",
    ":hover": {
      color: "#0066cc",
    },
  },

  // Responsive styles
  "@media (max-width: 768px)": {
    section: {
      padding: "3rem 1rem",
    },
    productsGrid: {
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    },
    locationCard: {
      padding: "1rem",
    },
    ecommerceLinks: {
      gap: "1rem",
    },
    // Tambahkan animasi
    "@keyframes fadeOut": {
      "0%": { opacity: 1 },
      "100%": { opacity: 0, visibility: "hidden" },
    },

    // Style untuk loading screen
    loadingScreen: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "#f9f9f9",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999,
      animation: "fadeOut 0.5s ease-out forwards",
      animationDelay: "1.5s", // Mulai fade out setelah 1.5 detik
    },
    spinner: {
      width: "50px",
      height: "50px",
      border: "5px solid #f5f5f5",
      borderTop: "5px solid #C9A66B",
      borderRadius: "50%",
      animation: "spin 1s linear infinite",
    },
    "@keyframes spin": {
      "0%": { transform: "rotate(0deg)" },
      "100%": { transform: "rotate(360deg)" },
    },
  },
};
