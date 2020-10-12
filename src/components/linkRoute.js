import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
export default styled(({...otherProps}) =>
  <Link  {...otherProps} />)`
    text-decoration: none;
    font-size: 0.8rem;
    color:#333;`
