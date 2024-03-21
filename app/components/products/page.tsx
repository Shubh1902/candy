"use client";
import React, { FormEvent, useCallback, useState } from "react";

const Products = () => {
  const [productsList, setProductsList] = useState([]);
  const handleInput = function (event: FormEvent) {
    //get products using the search string
  };
  const formatProductsList = useCallback(() => {
    //Do something with userData
  }, [productsList]);
  return (
    <div>
      <input type="text" onInput={handleInput}></input>
    </div>
  );
};

export default Products;
