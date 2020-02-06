/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { LightTheme, ThemeProvider } from "baseui"
import { Block } from "baseui/block"
import { H6 } from "baseui/typography"
//import { StyledLink } from "baseui/link"
import twtr from "../images/twitter-icon-34.png"

import Header from "./header"
import "./layout.css"

import { useStyletron } from "baseui"
import { Grid, Cell } from "baseui/layout-grid"

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
          <Block padding="0rem 0.5rem 0rem 0.5rem">
            <main>{children}</main>
          </Block>

          <footer>
            <Outer>
              <Grid>
                <Cell span={[2]}>
                  <Inner>
                    {" "}
                    <a
                      href="https://twitter.com/Tetonick_Tweets"
                      target="_blank"
                      rel="noopener noreferrer"
                      font-size="0px"
                      line-height="0em"
                    >
                      <img
                        src={twtr}
                        alt="Tetonick_Tweets"
                        height="34px"
                        width="34px"
                      />
                    </a>
                  </Inner>
                </Cell>

                <Cell span={[1, 4, 6]}>
                  <Inner>
                    <H6 min-width="350px">
                      Tetonick,© {new Date().getFullYear()}
                    </H6>
                  </Inner>
                </Cell>
              </Grid>
            </Outer>
          </footer>
        </div>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Outer = ({ children }) => {
  const [css, theme] = useStyletron()
  return (
    <div
      className={css({
        background: theme.colors.backgroundLightPositive,
        width: "100%",
        alignItems: "center",
        height: "50px",
      })}
    >
      {children}
    </div>
  )
}
const Inner = ({ children }) => {
  const [css, theme] = useStyletron()
  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        whiteSpace: "nowrap",
        color: theme.colors.accent700,
        padding: ".47rem",
      })}
    >
      {children}
    </div>
  )
}
