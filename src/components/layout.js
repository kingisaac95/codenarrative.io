import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import Toggle from "react-toggle"

import { rhythm } from "../utils/typography"
import "../utils/toggle.css"
import sun from "../assets/sun.png"
import moon from "../assets/moon.png"

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

  const renderHeader = () => {
    const rootPath = `${__PATH_PREFIX__}/`

    if (location.pathname === rootPath) {
      return (
        <h1
          style={{
            fontSize: `2rem`,
            marginTop: 0,
            marginBottom: 0,
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
      return (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
            marginBottom: 0,
            color: `var(--textLink)`,
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
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2.625rem",
        }}
      >
        {renderHeader()}
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <Toggle
              checked={theme === "dark"}
              onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
              icons={{
                checked: (
                  <img
                    alt="moon icon"
                    src={moon}
                    width="16"
                    height="16"
                    role="presentation"
                    style={{ pointerEvents: "none" }}
                  />
                ),
                unchecked: (
                  <img
                    alt="sun icon"
                    src={sun}
                    width="16"
                    height="16"
                    role="presentation"
                    style={{ pointerEvents: "none" }}
                  />
                ),
              }}
            />
          )}
        </ThemeToggler>
      </header>
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
