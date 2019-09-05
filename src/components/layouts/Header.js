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

import MenuIcon from '@material-ui/icons/Menu'

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(231deg, rgba(233, 233, 233, 0.01) 0%, rgba(233, 233, 233, 0.01) 25%,rgba(10, 10, 10, 0.01) 25%, rgba(10, 10, 10, 0.01) 50%,rgba(237, 237, 237, 0.01) 50%, rgba(237, 237, 237, 0.01) 75%,rgba(200, 200, 200, 0.01) 75%, rgba(200, 200, 200, 0.01) 100%),linear-gradient(344deg, rgba(2, 2, 2, 0.03) 0%, rgba(2, 2, 2, 0.03) 20%,rgba(10, 10, 10, 0.03) 20%, rgba(10, 10, 10, 0.03) 40%,rgba(100, 100, 100, 0.03) 40%, rgba(100, 100, 100, 0.03) 60%,rgba(60, 60, 60, 0.03) 60%, rgba(60, 60, 60, 0.03) 80%,rgba(135, 135, 135, 0.03) 80%, rgba(135, 135, 135, 0.03) 100%),linear-gradient(148deg, rgba(150, 150, 150, 0.03) 0%, rgba(150, 150, 150, 0.03) 14.286%,rgba(15, 15, 15, 0.03) 14.286%, rgba(15, 15, 15, 0.03) 28.572%,rgba(74, 74, 74, 0.03) 28.572%, rgba(74, 74, 74, 0.03) 42.858%,rgba(175, 175, 175, 0.03) 42.858%, rgba(175, 175, 175, 0.03) 57.144%,rgba(16, 16, 16, 0.03) 57.144%, rgba(16, 16, 16, 0.03) 71.42999999999999%,rgba(83, 83, 83, 0.03) 71.43%, rgba(83, 83, 83, 0.03) 85.71600000000001%,rgba(249, 249, 249, 0.03) 85.716%, rgba(249, 249, 249, 0.03) 100.002%),linear-gradient(122deg, rgba(150, 150, 150, 0.01) 0%, rgba(150, 150, 150, 0.01) 20%,rgba(252, 252, 252, 0.01) 20%, rgba(252, 252, 252, 0.01) 40%,rgba(226, 226, 226, 0.01) 40%, rgba(226, 226, 226, 0.01) 60%,rgba(49, 49, 49, 0.01) 60%, rgba(49, 49, 49, 0.01) 80%,rgba(94, 94, 94, 0.01) 80%, rgba(94, 94, 94, 0.01) 100%),linear-gradient(295deg, rgba(207, 207, 207, 0.02) 0%, rgba(207, 207, 207, 0.02) 25%,rgba(47, 47, 47, 0.02) 25%, rgba(47, 47, 47, 0.02) 50%,rgba(142, 142, 142, 0.02) 50%, rgba(142, 142, 142, 0.02) 75%,rgba(76, 76, 76, 0.02) 75%, rgba(76, 76, 76, 0.02) 100%),linear-gradient(73deg, rgba(81, 81, 81, 0.03) 0%, rgba(81, 81, 81, 0.03) 12.5%,rgba(158, 158, 158, 0.03) 12.5%, rgba(158, 158, 158, 0.03) 25%,rgba(136, 136, 136, 0.03) 25%, rgba(136, 136, 136, 0.03) 37.5%,rgba(209, 209, 209, 0.03) 37.5%, rgba(209, 209, 209, 0.03) 50%,rgba(152, 152, 152, 0.03) 50%, rgba(152, 152, 152, 0.03) 62.5%,rgba(97, 97, 97, 0.03) 62.5%, rgba(97, 97, 97, 0.03) 75%,rgba(167, 167, 167, 0.03) 75%, rgba(167, 167, 167, 0.03) 87.5%,rgba(22, 22, 22, 0.03) 87.5%, rgba(22, 22, 22, 0.03) 100%),linear-gradient(90deg, hsl(0, 0%, 7%),hsl(0, 0%, 10%))',
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
