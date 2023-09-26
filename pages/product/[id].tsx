import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "@components/Layout/Layout";
import ProductSummary from "@components/ProductSummary/ProductSummary";
import fetch from "isomorphic-unfetch";
import * as i from "index";

const ProductPage = () => {
  const { query } = useRouter();
  const [product, setProduct] = useState<i.TProduct | null>(null);

  useEffect(() => {
    if (query.id) {
      fetch(`/api/avo/${query.id}`)
        .then((response) => response.json())
        .then((data: i.TProduct) => {
          setProduct(data);
        });
    }
  }, [query.id]);

  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  );
};
export default ProductPage;
