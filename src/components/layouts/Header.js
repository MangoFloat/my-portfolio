import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

class Header extends React.Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" gutterBottom>
            My Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Header
