import React, { Component, Fragment } from "react"
import {
  AppBar, Toolbar, Typography,
  Button, Link, List, ListItem,
  Tabs, Tab, Paper, Grid } from "@material-ui/core"

const headerStyles = {
  name: {

  },
  links: {
    margin: 5,
    padding: 10,
    display: 'flex',
    flexDirection: 'row'
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
        <Paper>
          <Grid container>
            <Grid item xs>
              <Typography variant="h4" gutterBottom style={headerStyles.name}>
                <Link href={'/'} underline='none'>
                  June Jaictin
                </Link>
              </Typography>
            </Grid>
            {Object.values(this.state.links).map((link) =>
                <Grid item>
                <Typography>
                  <Link href={link.ref} style={headerStyles.links}>
                    {link.title}
                  </Link>
                </Typography>
                </Grid>
              )}
          </Grid>
        </Paper>
    </Fragment>
  }
}

export default Header
