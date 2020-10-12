import React, { useReducer } from 'react'
import { useParams } from 'react-router-dom'
import { categoryList } from '../services/settings'
import ProductList from '../containers/productList'
import SectionTitle from "../components/sectionTitle"

const initialState = { lovedItems: [] }

function reducer(state, action) {
  switch (action.type) {
    case 'addLoved':
      return { lovedItems: [ ...state.lovedItems, action.productId ] }
    default:
      throw new Error()
  }
}

export default function Category() {
  const [ state, dispatch ] = useReducer(reducer, initialState)
  const { categoryId } = useParams()
  const categorySelected = categoryList.find((category) => category.id === categoryId)
  const categoryName = categorySelected ? categorySelected.printableName : 'Shop All'
  const handleIsLoved = (productId) =>
    dispatch({ type: 'addLoved', productId })
  
  return (
    <div className={'page'}>
      <SectionTitle title={categoryName}/>
      <ProductList
        categorySelected={categorySelected}
        handleIsLoved={handleIsLoved}
        lovedItems={state.lovedItems}
      />
    </div>
  )
}
