import React from 'react'
import styled from 'styled-components'
import Categories from '../Categories'
import Title from './Title'
const BannerCategories: React.FC<{}> = () => {
  return (
    <Wrapper>
      <Title title="קטגוריות" />
      <Categories />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .category {
    text-align: center;
    font-size: 1rem;
    direction: ltr;
    margin: auto;
    color: var(--clr-grey-5);
    text-transform: capitalize;
    display: block;
    padding: 0.5rem 0 0.5rem 1rem;
    letter-spacing: var(--spacing);
    transition: var(--transition);
    border-radius: var(--radius);
  }
  .category:hover {
    background: var(--clr-grey-10);
  }
`
export default BannerCategories
