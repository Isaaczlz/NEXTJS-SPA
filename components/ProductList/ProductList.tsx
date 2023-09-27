import React from "react";
import { Card } from "semantic-ui-react";
import Link from "next/link";
import Image from "next/image";
import * as i from "index";

type ProductListProps = {
  products: i.TProduct[];
};

const mapProductsToCards = (products: i.TProduct[]) =>
  products.map(({ name, id, price, image }) => (
    <Link key={id} href={`/product/${id}`} passHref>
      <Card
        as="a"
        header={name}
        image={image}
        // La linea de abajo es la creación de la imagen con la nueva versión de NextJs
        // image={<Image src={image} alt="img" width={280} height={280} />}
        meta={<Card.Meta style={{ color: "dimgray" }}>{price}</Card.Meta>}
      />
    </Link>
  ));

const ProductList = ({ products }: ProductListProps) => (
  <Card.Group itemsPerRow={2} stackable>
    {mapProductsToCards(products)}
  </Card.Group>
);

export default ProductList;
