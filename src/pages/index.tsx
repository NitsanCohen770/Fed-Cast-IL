import React from 'react'
import { PageProps } from 'gatsby'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'
const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  )
}

export default IndexPage
