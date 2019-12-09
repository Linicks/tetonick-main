import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from "../images/tetonick-logo5.png";

import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem
} from "baseui/header-navigation";
import { StyledLink } from "baseui/link";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `0.45rem`,
      marginTop: '0.45rem'
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 0.55rem 0 0`,
      }}
    >

      <HeaderNavigation>

        <StyledNavigationList $align={ALIGN.left}>
          <StyledNavigationItem>
            <Link to="/">
              <img src={logo} alt="Tetonick Logo" />
            </Link>

          </StyledNavigationItem>
        </StyledNavigationList>


        <StyledNavigationList $align={ALIGN.center} />


        <StyledNavigationList $align={ALIGN.right}>

          <StyledNavigationItem>
            <StyledLink href="/"> Home </StyledLink>
          </StyledNavigationItem>

          <StyledNavigationItem>
            <StyledLink href="/learn/"> Learn  </StyledLink>
          </StyledNavigationItem>

          <StyledNavigationItem>
            <StyledLink href="/about/"> About Us </StyledLink>
          </StyledNavigationItem>
          <StyledNavigationItem>
            
          </StyledNavigationItem>

        </StyledNavigationList>

      </HeaderNavigation>

    </div>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


export default Header
