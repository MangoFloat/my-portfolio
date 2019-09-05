import React, { Component, Fragment } from "react"
import {
  Typography, Button, Paper,
  Grid, SvgIcon, Hidden,
  Menu, MenuItem, Link,
  Slide
} from "@material-ui/core"
import Scrollspy from 'react-scrollspy'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { makeStyles } from "@material-ui/core/styles/index"
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import BackgroundImage from '../../images/background3.png';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#111111',
    backgroundImage: `url(${BackgroundImage})`,
    color: 'white',
    top: 0,
    left: 0,
    position: 'fixed',
    zIndex: 1,
    height: '100%',
    width: 165,
    boxShadow: '0 0.1em 0.5em black',
  },
  links: {
    color: 'white',
    listStyle: 'none'
  },
  link: {
    paddingLeft: 15,
    paddingRight: 15,
    minWidth: 100,
    color: 'white'
  },
  titleHeader: {
    paddingLeft: 15,
    paddingTop: 3
  },
  active: {
    borderBottom: '5px solid',
  }
});

function Header(props) {
  const classes = useStyles();

  const links = {
    'about': {
      title: 'About',
      scrollTo: 'about',
    },
    'projects': {
      title: 'Projects',
      scrollTo: 'projects',
    },
    'skills': {
      title: 'Skills',
      scrollTo: 'skills',
    }
  }

  return <Fragment>
    <div id='header' className={classes.root}>
      <Typography className={classes.titleHeader} variant="h4">
        <Link
          color='inherit'
          underline='none'
          style={{cursor: 'pointer'}}
          onClick={() => window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })}>
          June Jaictin
        </Link>
      </Typography>
      <Scrollspy
        className={classes.links}
        items={Object.keys(links)}
        currentClassName={classes.active}>
        {Object.entries(links).map(([key, value]) =>
          <li>
            <AnchorLink
              href={'#' + value.scrollTo}
              className={classes.link}>
              {value.title}
            </AnchorLink>
          </li>
        )}
      </Scrollspy>
    </div>
  </Fragment>


}

export default Header
