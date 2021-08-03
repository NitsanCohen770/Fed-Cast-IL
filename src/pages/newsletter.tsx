import { PageProps } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
const NewsLetter: React.FC<PageProps> = () => {
  return (
    <Layout>
      <section className="newsletter-page">
        <div className="page-center">
          <h2>כל הפוסטים הכי מעניינים ישירות אליך למייל!</h2>
          <h4>בכל מספר שבועות תקבלו מייל עם הכתבות הכי חמות</h4>
        </div>
      </section>
    </Layout>
  )
}

export default NewsLetter
