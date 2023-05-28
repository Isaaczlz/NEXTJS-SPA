import React from "react";
import { useRouter } from "next/router";
import NavBar from "../../components/NavBar/NavBar";

const ProductItem = () => {
  const {
    query: { id },
  } = useRouter();
  return (
    <div>
      <NavBar />
      <h1>Product Item: {id}</h1>
    </div>
  );
};

export default ProductItem;
