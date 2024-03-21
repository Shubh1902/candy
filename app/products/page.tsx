import React, { FormEvent, useCallback, useState } from "react";
import "./index.css";
interface Products {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
const Products = async () => {
  const resp = await fetch("https://dummyjson.com/products");
  const { products }: { products: Products[] } = await resp.json();
  console.log(products);
  return (
    <ul className="product-wrapper">
      {products.map((prod) => {
        return (
          <li className="product" key={prod.id}>
            <div className="card-header">
              <h1>{prod.title}</h1>
            </div>
            <div className="card-content">
              <p>{prod.description}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Products;
