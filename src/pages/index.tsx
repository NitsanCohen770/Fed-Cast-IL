import React from 'react'
import { PageProps } from 'gatsby'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'
const IndexPage: React.FC<PageProps> = ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data
  return (
    <Layout>
      <Hero isBannerVisible />
      <Posts posts={posts} title="פוסטים אחרונים" />
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(limit: 5, sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
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
export default IndexPage
