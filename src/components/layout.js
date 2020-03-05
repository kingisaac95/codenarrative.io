import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
      site {
        siteMetadata {
          social {
            twitter
            github
          }
        }
      }
    }
  `)

  const { social } = data.site.siteMetadata

  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          fontSize: `2rem`,
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
          color: `rgb(51, 94, 119)`,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer style={{ paddingTop: `1.75rem` }}>
        <a href={social.twitter}>twitter</a> •{` `}
        <a href={social.github}>github</a> •{` `}
        <a href={social.linkedin}>linkedin</a>
      </footer>
    </div>
  )
}

export default Layout
