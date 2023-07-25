import React, { useState, useEffect } from 'react'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'
import * as i from "index"

const HomePage = () => {
  const [productList, setProductList] = useState<i.TProduct[]>([])

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data }: i.TAPIAvoResponse) => {
        setProductList(data)
      })
  }, [])

  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  )
}

export default HomePage