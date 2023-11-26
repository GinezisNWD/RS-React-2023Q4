import React from 'react'
import { MainContainer } from '../../src/components/MainContainer'
import { GetServerSidePropsContext } from 'next'
import IProduct from '../../src/models/IProduct'

import { Products } from '../../src/components/Products'

interface SearchProps {
  products: IProduct[]
}

export function Search({ products }: SearchProps) {
  return (
    <MainContainer title='Products'>
      Это страница поиска
      <Products products={products} />
    </MainContainer>
  )
}

export async function getServerSideProps({ params }: GetServerSidePropsContext) {
  if (params === undefined) return
  if (params.name === undefined) return

  const responce = await fetch(`https://api.punkapi.com/v2/beers?&beer_name=${params.name}`)
  const products = await responce.json()
  return {
    props: { products }
  }
}



export default Search
