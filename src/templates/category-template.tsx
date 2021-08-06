import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'

const CategoryTemplate: React.FC<{}> = props => {
  const {
    data: {
      allMdx: { nodes: posts },
    },
  } = props
  const {
    pageContext: { category },
  } = props
  return (
    <Layout>
      <Hero />
      <Posts posts={posts} title={`קטגוריות/ ${category}`} />
    </Layout>
  )
}

export const query = graphql`
  query GetCategories($category: String) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          author
          category
          slug
          readTime
          date(formatString: "MM/D/YYYY")
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        excerpt(truncate: true)
      }
    }
  }
`

export default CategoryTemplate
