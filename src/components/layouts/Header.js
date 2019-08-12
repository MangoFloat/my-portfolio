import React, { Component, Fragment } from "react"
import {
  AppBar, Toolbar, Typography,
  Button, Link, List, ListItemText,
  Tabs, Tab } from "@material-ui/core"

const headerStyles = {
  name: {
    flex: 1
  },
  links: {
    margin: 5,
    padding: 10
  },
  active: {

  }
}

class Header extends Component {
  constructor(props){
    super(props);

    const links = {
      'home' : {
        title: 'Home',
        ref: '/',
        active: false
      },
      'projects' : {
        title: 'Projects',
        ref: '/projects',
        active: false
      },
      'skills' : {
        title: 'Skills',
        ref: '/skills',
        active: false
      },
      'contacts' : {
        title: 'Contacts',
        ref: '/contacts',
        active: false
      }
    }

    links[props.CurrentPage].active = true;

    this.state = {
      links: links
    }
  }

  render() {
    return <Fragment>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h4" gutterBottom style={headerStyles.name}>
            <Link href={'/'} underline='none'>
              June Jaictin
            </Link>
          </Typography>
          {
            Object.values(this.state.links).map((link) =>
              <Typography>
                <Link href={link.ref} style={headerStyles.links}>
                  {link.title}
                </Link>
              </Typography>
            )
          }
        </Toolbar>
      </AppBar>
    </Fragment>
  }
}

export default Header
