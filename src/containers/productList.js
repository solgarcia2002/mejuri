import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { categoryList } from '../services/settings'
import { useParams } from 'react-router-dom'
import Spinner from '../components/spinner'
import Product from '../components/product'

import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-end;
  justify-content: center;
`;
const ProductList = ({ handleIsLoved, lovedItems }) => {
  
  const { categoryId } = useParams();
  const [ isLoading, setIsLoading ] = useState(false)
  const [ products, setProducts ] = useState([])
  
  const fetchProductByCategory = async (categoryId) => {
    setIsLoading(true)
    let products = [];
    const categorySelected = categoryList.find((category) => category.id === categoryId)
    const productsJSON = await fetch(categorySelected.url)
    const productsData = await productsJSON.json()
    productsData.map((productCategory) => {
      products = [ ...products, ...productCategory.products ]
    })
    if (categoryId ==='loved') {
      products = products.filter((product) =>
        lovedItems.find((lovedItem) => lovedItem === product.id))
    }
    setProducts(products)
    setIsLoading(false)
  }
  
  useEffect(() => {
    if (categoryId) {
      fetchProductByCategory(categoryId)
    }
  }, [ categoryId ])
  
  return (
    <Wrapper>
      {isLoading && (<Spinner/>)}
      {products.length > 0 && !isLoading && products.map((product, index) =>
        (<Product
            key={index}
            image={product.variant_images[ 0 ].attachment_url_medium}
            name={product.name}
            handleIsLoved={handleIsLoved}
            lovedItems={lovedItems}
            id={product.id}/>
        )
      )}
    </Wrapper>
  )
}
ProductList.propTypes = {
  lovedItems: PropTypes.array,
  handleIsLoved: PropTypes.func,
};
ProductList.defaultProps = {
  lovedItems: [],
  handleIsLoved: () => {
  },
};

export default ProductList
