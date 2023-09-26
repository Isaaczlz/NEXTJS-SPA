import React, { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import Layout from "@components/Layout/Layout";
import KawaiiHeader from "@components/KawaiiHeader/KawaiiHeader";
import ProductList from "@components/ProductList/ProductList";
import * as i from "index";

// export const getStaticProps = async () => { // Static side generation
//   const response = await fetch("/api/avo");
//   const { data: productList }: i.TAPIAvoResponse = await response.json();

//   return {
//     props: { productList },
//   };
// };

// export const getServerSideProps = async () => { // Server side rendered
//   const response = await fetch("/api/avo");
//   const { data: productList }: i.TAPIAvoResponse = await response.json();

//   return {
//     props: { productList },
//   };
// };

// const HomePage = ({ productList }: { productList: i.TProduct[] }) => {

const HomePage = () => {
  const [productList, setProductList] = useState<i.TProduct[]>([]); // Client side rendered
  useEffect(() => {
    window
      .fetch("/api/avo")
      .then((response) => response.json())
      .then(({ data }: i.TAPIAvoResponse) => {
        setProductList(data);
      });
  }, []);

  return (
    <Layout>
      <KawaiiHeader />
      <section style={{ textAlign: "center" }}>
        <Link href="/yes-or-no">
          <h4>¿Deberia comer un avo hoy?</h4>
        </Link>
      </section>
      <ProductList products={productList} />
    </Layout>
  );
};

export default HomePage;
