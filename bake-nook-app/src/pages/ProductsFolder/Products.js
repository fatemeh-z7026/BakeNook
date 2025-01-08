import React, { useEffect, useState } from "react";
import { fetchProductData } from "../../firebase/firebase-product";

export default function Products() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProductData();
      setProducts(data);
    };
    loadProducts();
  }, []);

  if (!products) {
    return <p>Loading products...</p>;
  }

  return (
    <div>
      <h1>Products</h1>
      {Object.keys(products).map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          {Object.keys(products[category]).map((productKey) => {
            const product = products[category][productKey];
            return (
              <div key={productKey}>
                <h3>{product.name}</h3>
                <h3>{product.time}</h3>
                <p>Ingredients: {product.ingredients.join(", ")}</p>
                <p>Price: {product.price}</p>
                <p>Instruction: {product.instruction}</p>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
