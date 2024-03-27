"use client";
import React, { FormEvent, useCallback, useEffect, useState } from "react";
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
const Products = () => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((resp) => resp.json())
      .then(({ products }) => setProducts(products));
  }, []);

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
