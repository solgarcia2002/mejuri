import React from 'react'
import SectionTitle from "../components/sectionTitle"
import ProductList from '../containers/productList'

export default function Home() {
  return (
    <div className={'homePage'}>
      <SectionTitle title={'Shop All'}/>
      <ProductList
        categorySelected={'shop_all'}/>
    </div>
  )
}
