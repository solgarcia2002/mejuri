import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Heart from './heart'

const WishListButton = ({ productId, handleIsLoved, lovedItems }) => {
  
  const isInLovesItems = lovedItems.find((lovedItem) => lovedItem === productId)
  const [ isLoved, setIsLoved ] = useState(isInLovesItems)
  const handleOnClick = (e) => {
    e.preventDefault()
    setIsLoved(true)
    handleIsLoved(productId)
  }
  return (
    <Heart onClick={handleOnClick} isLoved={isLoved}/>
  )
}

WishListButton.propTypes = {
  productId: PropTypes.number,
  lovedItems: PropTypes.array,
  handleIsLoved: PropTypes.func,
};

WishListButton.defaultProps = {
  productId: 0,
  lovedItems: [],
  handleIsLoved: () => {
  },
};

export default WishListButton;
