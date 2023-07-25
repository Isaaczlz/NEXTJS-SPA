import React from 'react'
import { Card } from 'semantic-ui-react'
import Link from 'next/link'
import * as i from "index"

type ProductListProps = {
  products: i.TProduct[]
}

const mapProductsToCards = (products: i.TProduct[]) =>
  products.map(({ name, id, price, image }) => (
    <Link key={id} href="/product/[id]" as={`/product/${id}`} passHref>
      <Card 
        as="a"
        header={name}
        image={image}
        meta={<Card.Meta style={{ color: 'dimgray' }}>{price}</Card.Meta>}
      />
    </Link>
  ))

const ProductList = ({ products }: ProductListProps) => (
  <Card.Group itemsPerRow={2} stackable>
    {mapProductsToCards(products)}
  </Card.Group>
)

export default ProductList