import React from 'react'
import { Link } from 'gatsby'

import * as El from './style.js'

const Header = () => (
  <El.Wrapper>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          My Sample Page
        </Link>
      </h1>
    </div>
  </El.Wrapper>
)

export default Header
