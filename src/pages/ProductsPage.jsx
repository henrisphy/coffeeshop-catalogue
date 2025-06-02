import React, { useState } from "react";
import { styles } from "../styles";
import data from "../assets/data.json";
import ProductTypeContainer from "../components/Product";

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [showInvoice, setShowInvoice] = useState(false);
  const [formData, setFormData] = useState({
    paymentMethod: "cash",
    tableNumber: "",
    customerName: "",
  });

  // Fungsi untuk menambah produk ke keranjang
  const handleAddToCart = (product, quantity) => {
    if (quantity > 0) {
      setCart((prevCart) => {
        const existingItem = prevCart.find((item) => item.id === product.id);
        if (existingItem) {
          return prevCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        } else {
          return [...prevCart, { ...product, quantity }];
        }
      });
    }
  };

  // Fungsi untuk menghapus item dari keranjang
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Fungsi untuk mengupdate quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Hitung total harga
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Handle form change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Proses pembayaran di sini
    console.log("Order submitted:", { ...formData, items: cart, totalPrice });
    alert("Pesanan berhasil diproses!");
    setCart([]);
    setShowInvoice(false);
    setFormData({
      paymentMethod: "cash",
      tableNumber: "",
      customerName: "",
    });
  };

  return (
    <section id="products" style={styles.section}>
      <h1 style={styles.sectionTitle}>Menu {data.brand.name}</h1>

      {data.products.categories.map((category) => (
        <div key={category.name || "uncategorized"}>
          {category.name && (
            <h2
              style={{
                ...styles.sectionTitle,
                fontSize: "1.5rem",
                margin: "1.5rem 0",
                textAlign: "left",
              }}
            >
              {category.name}
            </h2>
          )}

          {category.types.map((type) => (
            <ProductTypeContainer
              key={type.name}
              typeName={type.name}
              products={type.products || [type]}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      ))}

      {/* Tombol Keranjang */}
      {cart.length > 0 && (
        <button
          onClick={() => setShowInvoice(true)}
          style={styles.checkoutButton}
        >
          Beli Sekarang ({cart.reduce((sum, item) => sum + item.quantity, 0)})
        </button>
      )}

      {/* Pop-up Invoice */}
      {showInvoice && (
        <div style={styles.invoiceOverlay}>
          <div style={styles.invoiceContainer}>
            <div style={styles.invoiceHeader}>
              <img
                src={data.brand.logo}
                alt={data.brand.name}
                style={styles.invoiceLogo}
              />
              <h2>Invoice Pembelian</h2>
              <button
                onClick={() => setShowInvoice(false)}
                style={styles.closeButton}
              >
                &times;
              </button>
            </div>

            <div style={styles.invoiceContent}>
              <div style={styles.cartItems}>
                <h3>Pesanan Anda:</h3>
                {cart.map((item) => (
                  <div key={item.id} style={styles.cartItem}>
                    <div style={styles.cartItemInfo}>
                      <span>{item.name}</span>
                      <span>
                        Rp {item.price.toLocaleString("id-ID")} ×{" "}
                        {item.quantity}
                      </span>
                    </div>
                    <div style={styles.cartItemActions}>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        style={styles.quantityButton}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value) || 0)
                        }
                        min="1"
                        style={styles.quantityInput}
                      />
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        style={styles.quantityButton}
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        style={styles.removeButton}
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                ))}
                <div style={styles.totalPrice}>
                  <strong>
                    Total: Rp {totalPrice.toLocaleString("id-ID")}
                  </strong>
                </div>
              </div>

              <form onSubmit={handleSubmit} style={styles.invoiceForm}>
                <div style={styles.formGroup}>
                  <label>Metode Pembayaran:</label>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleInputChange}
                    style={styles.formInput}
                  >
                    <option value="cash">Tunai</option>
                    <option value="qris">QRIS</option>
                    <option value="bankTransfer">Transfer Bank</option>
                  </select>
                </div>

                <div style={styles.formGroup}>
                  <label>Nomor Meja:</label>
                  <input
                    type="text"
                    name="tableNumber"
                    value={formData.tableNumber}
                    onChange={handleInputChange}
                    style={styles.formInput}
                    required
                  />
                </div>

                <div style={styles.formGroup}>
                  <label>Nama Pembeli:</label>
                  <input
                    type="text"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleInputChange}
                    style={styles.formInput}
                    required
                  />
                </div>

                <button type="submit" style={styles.submitButton}>
                  Konfirmasi Pembelian
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductsPage;
