import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { StickyContainer, Sticky } from 'react-sticky'

const Header = ({ siteTitle }) => (
  <StickyContainer>
    <Sticky>
      {({
          style,

          // the following are also available but unused in this example
          isSticky,
          wasSticky,
          distanceFromTop,
          distanceFromBottom,
          calculatedHeight
        }) => (
        <header
          style={{
            background: `#1d1d1d`,
            marginBottom: `1.45rem`,
          }}
        >
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `1.45rem 1.0875rem`,
            }}
          >
            <h1 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                {siteTitle}
              </Link>
            </h1>
          </div>
        </header>
      )}
    </Sticky>

  </StickyContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
