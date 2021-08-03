import React from 'react'
import { Link, PageProps } from 'gatsby'
import Layout from '../components/Layout'

const NotFoundPage: React.FC<PageProps> = () => (
  <Layout>
    <section className="error-page">
      <div className="page-center">
        <span>404</span>
        <h3>מתנצלים! העמוד שביקשתם לא נמצא.</h3>
        <Link to="/" className="btn">
          חזרה לדף הבית
        </Link>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
