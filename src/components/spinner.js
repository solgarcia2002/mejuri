import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  height: 10rem;
  width: 100%;
  padding: 5rem 50%;
`;
const Spinner = () => {
  return (
    <Wrapper>
      <FontAwesomeIcon icon={faSpinner} size="2x" pulse/>
    </Wrapper>
  )
}

export default Spinner;
