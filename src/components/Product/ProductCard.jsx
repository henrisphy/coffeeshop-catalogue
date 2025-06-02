import React, { useState } from "react";
import { styles } from "../../styles";

const ProductCard = ({ product, onAddToCart }) => {
  // Tambahkan prop onAddToCart
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    if (quantity < product.stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      onAddToCart(product, quantity);
      setQuantity(0); // Reset quantity setelah ditambahkan
    }
  };

  return (
    <div style={styles.productCard}>
      <div style={styles.productImageContainer}>
        <img
          src={product.image}
          alt={product.name}
          style={styles.productImage}
          onError={(e) => {
            e.target.src = "/images/placeholder.png";
          }}
        />
      </div>

      <div style={styles.productDetails}>
        <h3 style={styles.productName}>{product.name}</h3>
        <p style={styles.productDescription}>{product.description}</p>

        <div style={styles.priceAndStock}>
          <span style={styles.productPrice}>
            Rp {product.price.toLocaleString("id-ID")}
          </span>
          <span style={styles.productStock}>Stok: {product.stock}</span>
        </div>

        <div style={styles.quantityContainer}>
          <button
            style={{
              ...styles.quantityButton,
              ...(quantity === 0 && styles.quantityButtonDisabled),
            }}
            onClick={handleDecrement}
            disabled={quantity === 0}
            aria-label="Kurangi jumlah"
          >
            -
          </button>
          <span style={styles.quantityValue}>{quantity}</span>
          <button
            style={{
              ...styles.quantityButton,
              ...(quantity === product.stock && styles.quantityButtonDisabled),
            }}
            onClick={handleIncrement}
            disabled={quantity === product.stock}
            aria-label="Tambah jumlah"
          >
            +
          </button>
        </div>

        {/* TAMBAHKAN TOMBOL INI */}
        <button
          onClick={handleAddToCart}
          disabled={quantity === 0}
          style={{
            ...styles.addButton,
            ...(quantity === 0 && styles.addButtonDisabled),
          }}
        >
          Tambah ke Keranjang
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
