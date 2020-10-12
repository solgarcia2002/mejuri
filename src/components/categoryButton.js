import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from './linkRoute'
const CategoryButton = ({ label, isSelected, id }) => {

  const Button = styled.li`
    padding: 1rem 2rem;
    flex: 1 1 auto;
    margin: 0.2rem;
    border-radius: 1rem;
    font-size: 1rem;
    font-weight: bold;
    min-width: 5rem; border: ${isSelected ? 'solid 0.2rem palevioletred': 'none'} `
  
  return (
    <Button
      id={id}>
      <Link to={`/${id}`} isSelected={isSelected}>
        {label}
      </Link>
    </Button>
  )
}

CategoryButton.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  isSelected: PropTypes.bool,
};

CategoryButton.defaultProps = {
  label: 'All',
  id: '',
  isSelected: false,
  
};

export default CategoryButton;
