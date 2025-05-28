import React from "react";
import ProductCard from "./ProductCard";
import { styles } from "../../styles";

const ProductTypeContainer = ({ typeName, products }) => {
  return (
    <div style={styles.productTypeContainer}>
      <h3 style={styles.productTypeTitle}>{typeName}</h3>
      <div style={styles.productsGrid}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductTypeContainer;
