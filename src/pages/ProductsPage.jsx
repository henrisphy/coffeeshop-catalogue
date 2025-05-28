import React from "react";
import { styles } from "../styles";
import data from "../assets/data.json";
import ProductTypeContainer from "../components/Product";

const ProductsPage = () => {
  return (
    <section id="products" style={styles.section}>
      <h2 style={styles.sectionTitle}>Produk Kami</h2>
      {data.products.categories.map((category, catIndex) => (
        <div key={catIndex}>
          <h3 style={styles.categoryTitle}>{category.name}</h3>
          {category.types.map((type, typeIndex) => (
            <ProductTypeContainer
              key={typeIndex}
              typeName={type.name}
              products={type.products}
            />
          ))}
        </div>
      ))}
    </section>
  );
};

export default ProductsPage;
