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

          <form
            className="contact-form"
            name="contact"
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            action="/success"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <input
              type="text"
              name="name"
              placeholder="כתוב את שמך"
              className="form-control"
            />
            <input
              type="email"
              name="email"
              placeholder="המייל שלך"
              className="form-control"
            />
            <button type="submit" className="btn form-control">
              הרשם
            </button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default NewsLetter
