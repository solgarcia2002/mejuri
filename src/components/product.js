import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import WishListButton from "./wishListButton";

const ProductName = styled.h3`
  display: none;
  margin-top: -6rem;
  background: pink;
  position: absolute;
  color: white;
  width: 10rem;
`
const Wrapper = styled.section`
  flex: 1;
  display: block;
  padding: 4em;
  background: lavenderblush;
  min-width: 10rem;
  max-width: 10rem;
  padding: 0.5rem;
  margin: 0.25rem;
  &:hover ${ProductName} {
    display: Block;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`

const Product = ({ name, image, id, handleIsLoved, lovedItems }) => {
  return (
    <Wrapper>
      <Image
        id={id}
        src={image}
      />
      <ProductName>{name}</ProductName>
      <WishListButton
        productId={id}
        lovedItems={lovedItems}
        handleIsLoved={handleIsLoved}/>
    </Wrapper>
  )
}

Product.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  image: PropTypes.string,
  handleIsLoved: PropTypes.func,
  lovedItems: PropTypes.array,
};

Product.defaultProps = {
  name: '',
  id: '',
  image: '',
  handleIsLoved: () => {
  },
  lovedItems: [],
};

export default Product;
