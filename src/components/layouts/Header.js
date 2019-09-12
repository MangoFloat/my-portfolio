import React, { Fragment } from "react"
import {
  Typography, Drawer, Hidden,
  IconButton, Button, SvgIcon
} from "@material-ui/core"
import { Menu } from "@material-ui/icons"
import ScrollSpy from "react-scrollspy"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { makeStyles } from "@material-ui/core/styles/index"

import BackgroundImage from "../../images/backgrounds/background10.webp"
import BarChartIcon from "../custom_icons/bar-chart"
import InfoChartIcon from "../custom_icons/info"
import OpenFolderIcon from "../custom_icons/open-folder"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `url(${BackgroundImage})`,
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
    //backgroundColor: theme.palette.type === 'dark' ? '#a8a8a8' : '#212121',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  linksContainer: {
    borderTop: '1px solid',
    borderBottom: '1px solid',
    marginTop: 5,
    marginBottom: 5,
    margin: 0,
    padding: 0,
    display: 'table'
  },
  link: {
    padding: 0,
    height: 45,
    transition: '0.1s',
    '&:hover': {
      backgroundColor: theme.palette.type === 'dark' ? '#1d1d1d' : '#a8a8a8'
    }
  },
  linkAnchor: {
    boxSizing: 'content-box',
    display: 'block',
    color: theme.palette.type === 'dark' ? '#f0f0f0' : '#1b1b1b',
    textDecoration: 'none',
    lineHeight: 3
  },
  linkI: {
    position: 'relative',
    padding: '0 15px'
  },
  linkSpan: {
    boxSizing: 'inherit'
  },
  titleHeader: {
    textAlign: 'center'
  },
  active: {
    borderLeft: '3px solid',
    backgroundColor: theme.palette.type === 'dark' ? '#1d1d1d' : '#a8a8a8'
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
      linkIcon: InfoChartIcon(),
    },
    'projects': {
      title: 'Projects',
      scrollTo: 'projects',
      linkIcon: OpenFolderIcon()
    },
    'skills': {
      title: 'Skills',
      scrollTo: 'skills',
      linkIcon: BarChartIcon()
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
          key={key}
          onClick={handleDrawerToggle}
          className={classes.link}>
          <AnchorLink
            href={'#' + value.scrollTo}
            offset='-1'
            className={classes.linkAnchor}>
            <i className={classes.linkI}>{value.linkIcon}</i>
            <span className={classes.linkSpan}>{value.title}</span>
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

  return <div
    className={classes.root}>
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
        variant='permanent'
        open
        anchor='left'
      >
        {drawer}
      </Drawer>
    </Hidden>
  </div>


}

export default Header
