import { TProduct } from "index";
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);
  useEffect(() => {
    window
      .fetch("/api/avo")
      .then((response) => response.json())
      .then(({ data, length }) => setProductList(data));
  }, []);
  return (
    <div>
      <h1>Hola Mundo soy Isaac</h1>
      {productList.map((prod) => (
        <div>{prod.name}</div>
      ))}
    </div>
  );
};

export default Home;
