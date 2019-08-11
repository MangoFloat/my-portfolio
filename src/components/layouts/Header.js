import React, { Component, Fragment } from "react"
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core"
import { Link, List, ListItemText, Tabs, Tab } from "@material-ui/core"

const headerStyles = {
  List: {
    display: "flex",
    flexDirection: "row",
    padding: 0,
  },
  ListItemText: {
    padding: 10,
  },
}

class Header extends Component {
  render() {
    return <Fragment>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h4" gutterBottom style={{ flex: 1 }}>
            <Link href={'/'} underline='none'>
              June Jaictin
            </Link>
          </Typography>
          <Tabs value={0}>
            <Tab label="Home">

            </Tab>
            <Tab label="Projects">

            </Tab>
            <Tab label="Skills">

            </Tab>
            <Tab label="Contact">

            </Tab>
          </Tabs>
        </Toolbar>
      </AppBar>
    </Fragment>
  }
}

export default Header
