import React from "react";
import { styles } from "../../styles";

const ProductCard = ({ product }) => {
  return (
    <div style={styles.productCard}>
      <img src={product.image} alt={product.name} style={styles.productImage} />
      <p style={styles.productName}>{product.name}</p>
    </div>
  );
};

export default ProductCard;
