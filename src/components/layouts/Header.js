import React, { Component, Fragment } from "react"
import {
  Typography, Drawer, Hidden,
  IconButton, Button
} from "@material-ui/core"
import { Menu } from '@material-ui/icons'
import ScrollSpy from 'react-scrollspy'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { makeStyles } from "@material-ui/core/styles/index"
import BackgroundImage from '../../images/backgrounds/background10.webp';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `url(${BackgroundImage})`,
    position: 'fixed',
    height: '100%',
    width: 165,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: 165,
      flexShrink: 0,
    },
  },
  drawerContainer: {
    width: 165
  },
  menuButton: {
    position: 'fixed',
    right: 0,
    marginRight: 10,
    marginTop: 8,
    color: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    backgroundColor: theme.palette.type === 'dark' ? '#a8a8a8' : '#212121',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  linksContainer: {
    margin: 0,
    padding: 0,
    display: 'table'
  },
  link: {
    color: theme.palette.type === 'dark' ? '#a8a8a8' : '#212121',
    width: '100%',
    minHeight: 50,
    display: 'table',
    textAlign: 'center',
    lineHeight: '150%',
    transition: 'border-width 0.3s ease-in-out, background 0.3s ease-out'
  },
  linkText: {
    display: 'block',
    height: '100%'
  },
  titleHeader: {
    textAlign: 'center'
  },
  active: {
    borderLeft: '5px solid',
    backgroundColor: theme.palette.type === 'dark' ? '#212121' : '#a8a8a8'
  },
  toggleThemeButton: {
    position: 'relative',
    bottom: 0,
    display: 'block',
    marginRight: 'auto',
    marginLeft: 'auto',
    textTransform: 'none'
  }
}));

function Header(props) {
  const classes = useStyles();
  const { container } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

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

  const drawer = <Fragment>
    <Typography
      className={classes.titleHeader}
      onClick={() => window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })}
      variant="h3">
      June Jaictin
    </Typography>
    <ScrollSpy
      className={classes.linksContainer}
      items={Object.keys(links)}
      currentClassName={classes.active}>
      {Object.entries(links).map(([key, value]) =>
        <li
          className={classes.link}
          onClick={handleDrawerToggle}>
          <AnchorLink
            href={'#' + value.scrollTo}
            offset='-1'
            className={classes.link}>
            {value.title}
          </AnchorLink>
        </li>
      )}
    </ScrollSpy>
    <Button
      variant='outlined'
      className={classes.toggleThemeButton}
      aria-label='Toggle theme'
      onClick={props.onToggleTheme}>
      Toggle Theme
    </Button>
  </Fragment>

  return <Fragment>
    <IconButton
      color='inherit'
      aria-label='open drawer'
      edge='start'
      onClick={handleDrawerToggle}
      className={classes.menuButton}>
        <Menu/>
    </IconButton>
    <Hidden smUp>
      <Drawer
        container={container}
        anchor='right'
        variant='temporary'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}>
        {drawer}
      </Drawer>
    </Hidden>
    <Hidden xsDown implementation="css">
      <Drawer
        classes={{
          paper: classes.drawerContainer,
        }}
        variant="permanent"
        open
        anchor='left'
      >
        {drawer}
      </Drawer>
    </Hidden>
  </Fragment>


}

export default Header
