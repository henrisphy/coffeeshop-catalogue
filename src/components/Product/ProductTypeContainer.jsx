import React from "react";
import ProductCard from "./ProductCard";
import { styles } from "../../styles";

const ProductTypeContainer = ({ typeName, products, onAddToCart }) => {
  return (
    <div style={styles.productTypeContainer}>
      <h3 style={styles.productTypeTitle}>{typeName}</h3>
      <div style={styles.productsGrid}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductTypeContainer;
