/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { LightTheme, ThemeProvider } from 'baseui';
import { Block } from 'baseui/block';
import { H6 } from "baseui/typography"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider theme={LightTheme}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0rem 0.5rem 0.5rem`,
            paddingTop: 0,
          }}
        >
          <Block padding='0rem 0.5rem 0rem 0.5rem'><main>{children}</main></Block>

          <Block paddingTop="50px">
            <hr />
            <footer >
              <center> <H6>Tetonick,© {new Date().getFullYear()} </H6></center>
            </footer>
          </Block>

        </div>
      </ThemeProvider>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

