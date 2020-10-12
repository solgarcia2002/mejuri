import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

function SectionTitle({ title }) {
  const H2 = styled.h2`
    text-align: start;
    width: 100%;
    padding-left: 4rem;
    color: #555;
    display: inline-block;
  `
  return (
    <H2>{title}</H2>
  )
}

SectionTitle.propTypes = {
  title: PropTypes.string,
}

SectionTitle.defaultProps = {
  title: '',
}
export default SectionTitle
