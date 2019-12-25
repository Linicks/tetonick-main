import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from "../images/tetonick-logo5.png"

import { Block } from "baseui/block"

import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem,
} from "baseui/header-navigation"
import { StyledLink } from "baseui/link"

export const HEADER_BREAKPOINT = "@media screen and (min-width: 607px)"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `0.45rem`,
      marginTop: "0.45rem",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 0 0 0`,
      }}
    >
      <HeaderNavigation>
        <StyledNavigationList $align={ALIGN.left}>
          <StyledNavigationItem>
            <Link to="/">
              <img src={logo} alt="Tetonick Logo" width="90%" height="auto" />
            </Link>
          </StyledNavigationItem>
        </StyledNavigationList>

        <Block
          $as="a"
          overrides={{
            Block: {
              style: {
                display: "none",
                [HEADER_BREAKPOINT]: {
                  display: "block",
                },
              },
            },
          }}
          width="100%"
          padding="1.55rem 0.0rem 0.55rem 0"
        >
          <StyledNavigationList $align={ALIGN.right}>
            <StyledNavigationItem>
              <StyledLink href="/"> Home </StyledLink>
            </StyledNavigationItem>

            <StyledNavigationItem>
              <StyledLink href="/learn/"> Learn </StyledLink>
            </StyledNavigationItem>

            <StyledNavigationItem>
              <StyledLink href="/about/"> About </StyledLink>
            </StyledNavigationItem>

            <StyledNavigationItem></StyledNavigationItem>
          </StyledNavigationList>
        </Block>
      </HeaderNavigation>
    </div>

    <Block
      $as="a"
      overrides={{
        Block: {
          style: {
            display: "block",
            [HEADER_BREAKPOINT]: {
              display: "none",
            },
          },
        },
      }}
      width="100%"
      padding="1.0rem 0.0rem 0.55rem 0.0rem "
      backgroundColor="#eeeeee"
    >
      <StyledNavigationList $align={ALIGN.center}>
        <StyledNavigationItem>
          <StyledLink href="/"> Home </StyledLink>
        </StyledNavigationItem>

        <StyledNavigationItem>
          <StyledLink href="/learn/"> Learn </StyledLink>
        </StyledNavigationItem>

        <StyledNavigationItem>
          <StyledLink href="/about/"> About </StyledLink>
        </StyledNavigationItem>

        <StyledNavigationItem></StyledNavigationItem>
      </StyledNavigationList>
    </Block>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
