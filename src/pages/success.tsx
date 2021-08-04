import React from 'react'
import Layout from '../components/Layout'
import { Link, PageProps } from 'gatsby'
const Success: React.FC<PageProps> = () => {
  return (
    <Layout>
      <section className="success-page">
        <div className="page-center">
          <h2>הטופס נשלח בהצלחה!</h2>
          <Link to="/" className="btn">
            חזרה לדף הבית
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default Success
