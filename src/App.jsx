import React, { useState, useEffect } from "react";
import { styles } from "./styles";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import LocationPage from "./pages/LocationPage";
import Footer from "./components/Footer";
import CasualLoading from "./components/CasualLoading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Loading selama 3 detik

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={styles.body}>
      {isLoading ? (
        <CasualLoading />
      ) : (
        <>
          <Navbar />
          <HomePage />
          <ProductsPage />
          <LocationPage />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
