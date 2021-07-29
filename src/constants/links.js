import React from 'react'
import { Link } from 'gatsby'
const Links = ({ styleClass, children }) => {
  return (
    <ul className={styleClass}>
      <li>
        <Link to="/" className="page-link">
          דף הבית
        </Link>
      </li>
      <li>
        <Link to="/posts" className="page-link">
          פוסטים
        </Link>
        {children}
      </li>
      <li>
        <Link to="/newsletter" className="page-link">
          עלון
        </Link>
      </li>
      <li>
        <Link to="/post" className="page-link">
          שלח פוסט
        </Link>
      </li>
    </ul>
  )
}

export default Links
