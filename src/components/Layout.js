/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Navbar setIsOpen={setIsOpen} />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main>{children}</main>
      {/* <Footer/> */}
    </>
  )
}

export default Layout
