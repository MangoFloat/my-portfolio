import React, { Component, Fragment } from "react"
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core"
import { List, ListItemText } from "@material-ui/core"

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
            June Jaictin
          </Typography>
          <List style={headerStyles.List}>
            <Button>
              <ListItemText style={headerStyles.ListItemText}>
                Projects
              </ListItemText>
            </Button>
            <Button>
              <ListItemText style={headerStyles.ListItemText}>
                Skills
              </ListItemText>
            </Button>
            <Button>
              <ListItemText style={headerStyles.ListItemText}>
                Contact
              </ListItemText>
            </Button>
          </List>
        </Toolbar>
      </AppBar>
    </Fragment>
  }
}

export default Header
