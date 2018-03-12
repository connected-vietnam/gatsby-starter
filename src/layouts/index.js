// @flow

import React from 'react'
import Link from 'gatsby-link'
import 'tachyons/css/tachyons.min.css'

import { rhythm, scale } from '../utils/typography'

function Template({ location, children }: *) {
  let header

  let rootPath = '/'
  if (typeof __PREFIX_PATHS__ !== 'undefined' && __PREFIX_PATHS__) {
    rootPath = `${__PATH_PREFIX__}/`
  }

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          }}
          to="/"
        >
          Gatsby Starter Blog
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: 'Montserrat, sans-serif',
          marginTop: 0,
          marginBottom: rhythm(-1),
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          }}
          to="/"
        >
          Gatsby Starter Blog
        </Link>
      </h3>
    )
  }
  return (
    <div className="mw7 center pa3">
      {header}
      {children()}
    </div>
  )
}
export default Template
