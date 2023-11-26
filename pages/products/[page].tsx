import React from 'react'
import { GetServerSidePropsContext } from 'next'
import { MainContainer } from '../../src/components/MainContainer'
import { Products } from '../../src/components/Products'
import Pagination from '../../src/components/Pagination';

export function Page({ products }) {
  return (
    <MainContainer title='Products'>
      <Pagination />
      <Products products={products}></Products>
    </MainContainer>
  )
}

export async function getServerSideProps({ params }: GetServerSidePropsContext) {
  if (params === undefined) return
  if (params.page === undefined) return

  const responce = await fetch(`https://api.punkapi.com/v2/beers?page=${params.page}&per_page=25`)
  const products = await responce.json()
  console.log(products)


  return {
    props: { products }
  }
}


export default Page
