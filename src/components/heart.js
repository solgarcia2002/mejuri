import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components'
export default styled(({isLoved, ...otherProps}) =>
  <FontAwesomeIcon  {...otherProps} icon={faHeart}/>)`
    text-decoration: none;
    font-size: 0.8rem;
    margin: 0;
    float: right;
    color: ${props => props.isLoved ? 'darksalmon': '#CCC'};`

