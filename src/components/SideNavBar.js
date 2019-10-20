import React, { Fragment } from "react"
import {
  Typography, Drawer, Hidden,
  IconButton, Button, SvgIcon,
  Tooltip,
} from "@material-ui/core"

import { Menu } from "@material-ui/icons"
import ScrollSpy from "react-scrollspy"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { makeStyles } from "@material-ui/core/styles/index"

import { Brightness2Sharp, BarChartSharp, FolderSharedSharp, InfoSharp } from "@material-ui/icons"

import BackgroundImage from "../images/backgrounds/background10.webp"
import GetContacts from "./info_objects/contacts"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `url(${BackgroundImage})`,
  },
  drawerContainer: {
    width: 165,
  },
  menuButton: {
    position: "fixed",
    right: 0,
    marginRight: 10,
    marginTop: 8,
    backgroundColor: theme.palette.type === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  linksContainer: {
    margin: 0,
    padding: 0,
  },
  link: {
    padding: 0,
    height: 40,
    transition: "0.1s",
    "&:hover": {
      backgroundColor: theme.palette.type === "dark" ? "#1d1d1d" : "#a8a8a8",
    },
  },
  linkAnchor: {
    boxSizing: "content-box",
    display: "block",
    color: theme.palette.type === "dark" ? "#f0f0f0" : "#1b1b1b",
    textDecoration: "none",
    lineHeight: 3,
  },
  linkI: {
    position: "relative",
    padding: "0 15px",
    top: 5,
  },
  linkSpan: {
    boxSizing: "inherit",
  },
  titleHeader: {
    textAlign: "center",
  },
  active: {
    borderLeft: "3px solid",
    backgroundColor: theme.palette.type === "dark" ? "#1d1d1d" : "#a8a8a8",
  },
  buttons: {
    position: "relative",
    display: "block",
    marginTop: 5,
    marginRight: "auto",
    marginLeft: "auto",
    paddingBottom: 0,
  },
}))

function SideNavBar(props) {
  const classes = useStyles()
  const contacts = GetContacts()

  const { container } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }

  const links = {
    "about": {
      title: "About",
      scrollTo: "about",
      linkIcon: <InfoSharp/>,
    },
    "projects": {
      title: "Projects",
      scrollTo: "projects",
      linkIcon: <FolderSharedSharp/>,
    },
    "skills": {
      title: "Skills",
      scrollTo: "skills",
      linkIcon: <BarChartSharp/>,
    },
  }

  const drawer = <Fragment>
    <Typography
      className={classes.titleHeader}
      variant="h3">
      June Jaictin
    </Typography>

    <div>
      <hr style={{ margin: 0 }}/>
    </div>

    <ScrollSpy
      className={classes.linksContainer}
      items={Object.keys(links)}
      currentClassName={classes.active}
      offset={-1}>
      {Object.entries(links).map(([key, value]) =>
        <li
          key={key}
          onClick={handleDrawerToggle}
          className={classes.link}>
          <AnchorLink
            href={"#" + value.scrollTo}
            className={classes.linkAnchor}>
            <i className={classes.linkI}>{value.linkIcon}</i>
            <span className={classes.linkSpan}>{value.title}</span>
          </AnchorLink>
        </li>,
      )}
    </ScrollSpy>

    <div>
      <hr style={{ margin: 0 }}/>
    </div>

    <Tooltip title="Toggle dark/light theme">
      <Button
        variant='outlined'
        className={classes.buttons}
        aria-label='Toggle theme'
        onClick={props.onToggleTheme}>
        <Brightness2Sharp fontSize='large'/>
      </Button>
    </Tooltip>

    {Object.entries(contacts).map(([key, value]) =>
      <Tooltip title={value.launchTooltip}>
        <Button
          variant='outlined'
          aria-label={value.name}
          className={classes.buttons}
          href={value.link}
          target='_blank'>
          <SvgIcon
            fontSize='large'
            className={classes.contactButtonIcon}>
            {value.icon}
          </SvgIcon>
        </Button>
      </Tooltip>,
    )}
  </Fragment>

  return <div
    className={classes.root}>
    <IconButton
      aria-label='open drawer'
      color='inherit'
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

export default SideNavBar
