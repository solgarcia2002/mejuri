import React from 'react'
import { categoryList } from '../services/settings'
import CategoryButton from '../components/categoryButton'
import { useParams} from 'react-router-dom'
import styled from "styled-components"

const HeaderCategoryList = () => {
  const Ul= styled.ul`
    list-style-type: none;
    display:flex;
    flex-flow: row wrap;
    `
  
  const { categoryId } = useParams();
  return (
    <nav className={'headerCategoryList'}>
      <Ul>
        {categoryList.map((category, index) => (
          <CategoryButton
            key={index+1}
            id={category.id}
            label={category.printableName}
            isSelected={categoryId === category.id}
          />
        ))}
      </Ul>
    </nav>
  )
}

export default HeaderCategoryList
