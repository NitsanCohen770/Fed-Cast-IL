import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { graphql, PageProps } from 'gatsby'
import Posts from '../components/Posts'
const PostsPage: React.FC<PageProps> = ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data
  return (
    <Layout>
      <Hero isBannerVisible={false} />
      <Posts posts={posts} title="כל הפוסטים" />
    </Layout>
  )
}
export const query = graphql`
  {
    allMdx {
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
export default PostsPage
