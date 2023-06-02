import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NavBar from "../../components/NavBar/NavBar";
import { TProduct } from "index";

const ProductItem = () => {
  const [product, setProduct] = useState<TProduct>();

  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    if (id) {
      window
        .fetch(`/api/avo/${id}`)
        .then((response) => response.json())
        .then((data) => setProduct(data));
    }
  }, [id]);

  return (
    <section>
      <h1>Product Item: {product?.name}</h1>
    </section>
  );
};

export default ProductItem;
