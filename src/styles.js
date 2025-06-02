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

  // Product Card Styles
  productCard: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    marginBottom: "16px",
  },
  productImageContainer: {
    width: "100%",
    height: "180px",
    overflow: "hidden",
  },
  productImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease",
    ":hover": {
      transform: "scale(1.05)",
    },
  },
  productDetails: {
    padding: "12px 16px",
  },
  productName: {
    fontSize: "16px",
    fontWeight: "600",
    margin: "0 0 8px 0",
    color: "#333",
  },
  productDescription: {
    fontSize: "12px",
    color: "#666",
    margin: "0 0 12px 0",
    lineHeight: "1.4",
  },
  priceAndStock: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
  },
  productPrice: {
    fontSize: "14px",
    fontWeight: "700",
    color: "#2e7d32",
  },
  productStock: {
    fontSize: "12px",
    color: "#666",
  },
  quantityContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "6px 12px",
  },
  quantityButton: {
    width: "28px",
    height: "28px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#f5f5f5",
    fontSize: "16px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    ":disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  },
  quantityValue: {
    minWidth: "30px",
    textAlign: "center",
    fontSize: "14px",
    fontWeight: "600",
  },

  // Product Type Container
  productTypeContainer: {
    marginBottom: "24px",
  },
  productTypeTitle: {
    fontSize: "18px",
    fontWeight: "700",
    marginBottom: "16px",
    paddingBottom: "8px",
    borderBottom: "1px solid #eee",
    color: "#333",
  },
  productsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
    gap: "16px",
  },
  addButton: {
    backgroundColor: "#C9A66B",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "8px 12px",
    marginTop: "12px",
    cursor: "pointer",
    width: "100%",
    transition: "background-color 0.3s ease",
    ":hover": {
      backgroundColor: "#B08E5B",
    },
  },
  addButtonDisabled: {
    backgroundColor: "#cccccc",
    cursor: "not-allowed",
    ":hover": {
      backgroundColor: "#cccccc",
    },
  },
  checkoutButton: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#C9A66B",
    color: "white",
    border: "none",
    borderRadius: "50px",
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  invoiceOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  invoiceContainer: {
    backgroundColor: "white",
    borderRadius: "12px",
    width: "90%",
    maxWidth: "600px",
    maxHeight: "90vh",
    overflowY: "auto",
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
  },
  invoiceHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    borderBottom: "1px solid #eee",
    position: "relative",
  },
  invoiceLogo: {
    height: "40px",
  },
  closeButton: {
    background: "none",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
    color: "#666",
    position: "absolute",
    top: "10px",
    right: "10px",
  },
  invoiceContent: {
    padding: "20px",
  },
  cartItems: {
    marginBottom: "20px",
  },
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 0",
    borderBottom: "1px solid #f0f0f0",
  },
  cartItemInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  cartItemActions: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  quantityButton: {
    width: "30px",
    height: "30px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    background: "#f5f5f5",
    cursor: "pointer",
  },
  quantityInput: {
    width: "40px",
    textAlign: "center",
    padding: "4px",
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
  removeButton: {
    background: "#ffebee",
    color: "#c62828",
    border: "none",
    borderRadius: "4px",
    padding: "6px 12px",
    cursor: "pointer",
    fontSize: "12px",
  },
  totalPrice: {
    textAlign: "right",
    marginTop: "16px",
    fontSize: "18px",
    paddingTop: "16px",
    borderTop: "1px solid #eee",
  },
  invoiceForm: {
    marginTop: "20px",
  },
  formGroup: {
    marginBottom: "16px",
  },
  formInput: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    marginTop: "8px",
  },
  submitButton: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#C9A66B",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "16px",
  },

  "@media (min-width: 480px)": {
    productCard: {
      flexDirection: "row",
      height: "100px",
    },
    productImageContainer: {
      width: "40%",
      height: "auto",
    },
    productDetails: {
      width: "60%",
      padding: "12px",
    },
    productsGrid: {
      gridTemplateColumns: "1fr",
    },
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
  // Style Invoice

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
