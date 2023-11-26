import React from 'react'
import { GetServerSidePropsContext } from 'next'
import iProduct from '../../src/models/IProduct'
import { MainContainer } from '../../src/components/MainContainer'

interface ProductPageProps {
  product: iProduct
}

export function ProductPage({ product }: ProductPageProps) {
  return (
    <MainContainer title={product.name} >
      <img src={product.image_url} alt={product.name} />
      <div>{product.name}</div>
      <div>{product.description}</div>
    </MainContainer>
  )
}

export async function getServerSideProps({ params }: GetServerSidePropsContext) {
  if (params === undefined) return
  if (params.id === undefined) return

  const responce = await fetch(`https://api.punkapi.com/v2/beers/${params.id}`)
  const array = await responce.json()
  const product = array[0]


  return {
    props: { product }
  }
}


export default ProductPage
