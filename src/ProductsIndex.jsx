import { useState, useEffect } from "react";
import axios from "axios";

export function ProductsIndex() {
  const [products, setProducts] = useState([]);
  const handleIndexProducts = () => {
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response);
      setProducts(response.data);
    });
  };

  useEffect(handleIndexProducts, []);

  return (
    <div id="product-index">
      <h1>All Products</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product.id}>
            <h2>Instrument Name: {product.name}</h2>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
            <p>Supplier: {product.supplier.name}</p>
            <p>Categories: {product.categories.map((category) => category.name)}</p>
            <p>
              {product.images.map((image) => (
                <img src={image.url} />
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
