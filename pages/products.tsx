import React from 'react'
import { MainContainer } from '../src/components/MainContainer'
import { Products } from '../src/components/Products'


export function ProductsPage({ products }) {
  return (
    <MainContainer title='Products'>
      <Products products={products}></Products>
    </MainContainer>
  )
}

export default ProductsPage


export async function getStaticProps() {
  const responce = await fetch('https://api.punkapi.com/v2/beers?page=1&per_page=25')
  const products = await responce.json()
  return {
    props: { products }
  }
}
