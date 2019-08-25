import React, { Component, Fragment } from "react"
import {
  Typography, Button, Paper,
  Grid, SvgIcon, Hidden,
  Menu, MenuItem
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles/index"

import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(200deg, rgba(213, 213, 213, 0.01) 0%, rgba(213, 213, 213, 0.01) 14.286%,rgba(140, 140, 140, 0.01) 14.286%, rgba(140, 140, 140, 0.01) 28.572%,rgba(52, 52, 52, 0.01) 28.572%, rgba(52, 52, 52, 0.01) 42.858%,rgba(38, 38, 38, 0.01) 42.858%, rgba(38, 38, 38, 0.01) 57.144%,rgba(159, 159, 159, 0.01) 57.144%, rgba(159, 159, 159, 0.01) 71.42999999999999%,rgba(71, 71, 71, 0.01) 71.43%, rgba(71, 71, 71, 0.01) 85.71600000000001%,rgba(88, 88, 88, 0.01) 85.716%, rgba(88, 88, 88, 0.01) 100.002%),linear-gradient(337deg, rgba(25, 25, 25, 0.01) 0%, rgba(25, 25, 25, 0.01) 12.5%,rgba(150, 150, 150, 0.01) 12.5%, rgba(150, 150, 150, 0.01) 25%,rgba(84, 84, 84, 0.01) 25%, rgba(84, 84, 84, 0.01) 37.5%,rgba(85, 85, 85, 0.01) 37.5%, rgba(85, 85, 85, 0.01) 50%,rgba(188, 188, 188, 0.01) 50%, rgba(188, 188, 188, 0.01) 62.5%,rgba(80, 80, 80, 0.01) 62.5%, rgba(80, 80, 80, 0.01) 75%,rgba(73, 73, 73, 0.01) 75%, rgba(73, 73, 73, 0.01) 87.5%,rgba(219, 219, 219, 0.01) 87.5%, rgba(219, 219, 219, 0.01) 100%),linear-gradient(203deg, rgba(233, 233, 233, 0.01) 0%, rgba(233, 233, 233, 0.01) 25%,rgba(114, 114, 114, 0.01) 25%, rgba(114, 114, 114, 0.01) 50%,rgba(164, 164, 164, 0.01) 50%, rgba(164, 164, 164, 0.01) 75%,rgba(228, 228, 228, 0.01) 75%, rgba(228, 228, 228, 0.01) 100%),linear-gradient(317deg, rgba(139, 139, 139, 0.02) 0%, rgba(139, 139, 139, 0.02) 16.667%,rgba(44, 44, 44, 0.02) 16.667%, rgba(44, 44, 44, 0.02) 33.334%,rgba(166, 166, 166, 0.02) 33.334%, rgba(166, 166, 166, 0.02) 50.001000000000005%,rgba(2, 2, 2, 0.02) 50.001%, rgba(2, 2, 2, 0.02) 66.668%,rgba(23, 23, 23, 0.02) 66.668%, rgba(23, 23, 23, 0.02) 83.33500000000001%,rgba(21, 21, 21, 0.02) 83.335%, rgba(21, 21, 21, 0.02) 100.002%),linear-gradient(328deg, rgba(3, 3, 3, 0.03) 0%, rgba(3, 3, 3, 0.03) 12.5%,rgba(116, 116, 116, 0.03) 12.5%, rgba(116, 116, 116, 0.03) 25%,rgba(214, 214, 214, 0.03) 25%, rgba(214, 214, 214, 0.03) 37.5%,rgba(217, 217, 217, 0.03) 37.5%, rgba(217, 217, 217, 0.03) 50%,rgba(68, 68, 68, 0.03) 50%, rgba(68, 68, 68, 0.03) 62.5%,rgba(118, 118, 118, 0.03) 62.5%, rgba(118, 118, 118, 0.03) 75%,rgba(200, 200, 200, 0.03) 75%, rgba(200, 200, 200, 0.03) 87.5%,rgba(198, 198, 198, 0.03) 87.5%, rgba(198, 198, 198, 0.03) 100%),linear-gradient(97deg, rgba(195, 195, 195, 0.03) 0%, rgba(195, 195, 195, 0.03) 16.667%,rgba(177, 177, 177, 0.03) 16.667%, rgba(177, 177, 177, 0.03) 33.334%,rgba(170, 170, 170, 0.03) 33.334%, rgba(170, 170, 170, 0.03) 50.001000000000005%,rgba(158, 158, 158, 0.03) 50.001%, rgba(158, 158, 158, 0.03) 66.668%,rgba(121, 121, 121, 0.03) 66.668%, rgba(121, 121, 121, 0.03) 83.33500000000001%,rgba(146, 146, 146, 0.03) 83.335%, rgba(146, 146, 146, 0.03) 100.002%),linear-gradient(268deg, rgba(103, 103, 103, 0.03) 0%, rgba(103, 103, 103, 0.03) 25%,rgba(112, 112, 112, 0.03) 25%, rgba(112, 112, 112, 0.03) 50%,rgba(4, 4, 4, 0.03) 50%, rgba(4, 4, 4, 0.03) 75%,rgba(227, 227, 227, 0.03) 75%, rgba(227, 227, 227, 0.03) 100%),linear-gradient(90deg, hsl(98,0%,0%),hsl(98,0%,0%))',
    color: 'white',
    top: 0,
    position: 'sticky',
    marginBottom: 5
  },
  links: {
    margin: 5,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    color: 'white'
  },
  titleHeader: {
    paddingLeft: 15,
    paddingTop: 3,
    borderRight: 2
  }
});

function PandaIcon(props ) {
  return <SvgIcon {...props}>
    <path
      d='M12,3C13.74,3 15.36,3.5 16.74,4.35C17.38,3.53 18.38,3 19.5,3A3.5,3.5 0 0,1 23,6.5C23,8 22.05,9.28 20.72,9.78C20.9,10.5 21,11.23 21,12A9,9 0 0,1 12,21A9,9 0 0,1 3,12C3,11.23 3.1,10.5 3.28,9.78C1.95,9.28 1,8 1,6.5A3.5,3.5 0 0,1 4.5,3C5.62,3 6.62,3.53 7.26,4.35C8.64,3.5 10.26,3 12,3M12,5A7,7 0 0,0 5,12A7,7 0 0,0 12,19A7,7 0 0,0 19,12A7,7 0 0,0 12,5M16.19,10.3C16.55,11.63 16.08,12.91 15.15,13.16C14.21,13.42 13.17,12.54 12.81,11.2C12.45,9.87 12.92,8.59 13.85,8.34C14.79,8.09 15.83,8.96 16.19,10.3M7.81,10.3C8.17,8.96 9.21,8.09 10.15,8.34C11.08,8.59 11.55,9.87 11.19,11.2C10.83,12.54 9.79,13.42 8.85,13.16C7.92,12.91 7.45,11.63 7.81,10.3M12,14C12.6,14 13.13,14.19 13.5,14.5L12.5,15.5C12.5,15.92 12.84,16.25 13.25,16.25A0.75,0.75 0 0,0 14,15.5A0.5,0.5 0 0,1 14.5,15A0.5,0.5 0 0,1 15,15.5A1.75,1.75 0 0,1 13.25,17.25C12.76,17.25 12.32,17.05 12,16.72C11.68,17.05 11.24,17.25 10.75,17.25A1.75,1.75 0 0,1 9,15.5A0.5,0.5 0 0,1 9.5,15A0.5,0.5 0 0,1 10,15.5A0.75,0.75 0 0,0 10.75,16.25A0.75,0.75 0 0,0 11.5,15.5L10.5,14.5C10.87,14.19 11.4,14 12,14Z'/>
  </SvgIcon>
}

function ScrollToSection(elementId) {
  const headerElement = document.getElementById('header');
  const headerOffset = headerElement.clientHeight;

  const elementToScrollTo = document.getElementById(elementId);
  const elementHeight = elementToScrollTo.getBoundingClientRect().top + window.pageYOffset;

  window.scrollTo({
    top: elementHeight - headerOffset,
    behavior: 'smooth'
  })
}

function Header(props) {
  const classes = useStyles();

  const links = {
    "home": {
      title: "About",
      active: false,
      scrollTo: 'home',
      viewHeight: 0
    },
    "projects": {
      title: "Projects",
      active: false,
      scrollTo: 'projects',
      viewHeight: 1
    },
    "skills": {
      title: "Skills",
      active: false,
      scrollTo: 'skills',
      viewHeight: 2
    }
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event){
    setAnchorEl(event.currentTarget)
  }

  function handleClose(){
    setAnchorEl(null);
  }

  return <Fragment>
    <Paper id='header' className={classes.root}>
      <Grid container>
        <Grid item xs>
          <Typography className={classes.titleHeader} variant="h4">
              June Jaictin
          </Typography>
        </Grid>
        <Hidden xsDown={true}>
          {Object.values(links).map((link) =>
            <Grid item>
              <Typography>
                <Button onClick={() => {ScrollToSection(link.scrollTo)}} className={classes.links}>
                  {link.title}
                </Button>
              </Typography>
            </Grid>,
          )}
        </Hidden>
        <Hidden smUp={true}>
          <Button aria-controls='simple-menu' onClick={handleClick}>
            <MenuIcon htmlColor='white'/>
          </Button>
          <Menu
            id='simple-menu'
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            {Object.values(links).map((link) =>
              <MenuItem onClick={() => {ScrollToSection(link.scrollTo)}}>
                {link.title}
              </MenuItem>
            )}
          </Menu>
        </Hidden>
      </Grid>
    </Paper>
  </Fragment>


}

export default Header
