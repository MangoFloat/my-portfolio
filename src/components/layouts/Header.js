import React, { Component, Fragment } from "react"
import {
  Typography, Button, Paper,
  Grid, SvgIcon, Hidden,
  Menu, MenuItem, Link
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles/index"

import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(231deg, rgba(233, 233, 233, 0.01) 0%, rgba(233, 233, 233, 0.01) 25%,rgba(10, 10, 10, 0.01) 25%, rgba(10, 10, 10, 0.01) 50%,rgba(237, 237, 237, 0.01) 50%, rgba(237, 237, 237, 0.01) 75%,rgba(200, 200, 200, 0.01) 75%, rgba(200, 200, 200, 0.01) 100%),linear-gradient(344deg, rgba(2, 2, 2, 0.03) 0%, rgba(2, 2, 2, 0.03) 20%,rgba(10, 10, 10, 0.03) 20%, rgba(10, 10, 10, 0.03) 40%,rgba(100, 100, 100, 0.03) 40%, rgba(100, 100, 100, 0.03) 60%,rgba(60, 60, 60, 0.03) 60%, rgba(60, 60, 60, 0.03) 80%,rgba(135, 135, 135, 0.03) 80%, rgba(135, 135, 135, 0.03) 100%),linear-gradient(148deg, rgba(150, 150, 150, 0.03) 0%, rgba(150, 150, 150, 0.03) 14.286%,rgba(15, 15, 15, 0.03) 14.286%, rgba(15, 15, 15, 0.03) 28.572%,rgba(74, 74, 74, 0.03) 28.572%, rgba(74, 74, 74, 0.03) 42.858%,rgba(175, 175, 175, 0.03) 42.858%, rgba(175, 175, 175, 0.03) 57.144%,rgba(16, 16, 16, 0.03) 57.144%, rgba(16, 16, 16, 0.03) 71.42999999999999%,rgba(83, 83, 83, 0.03) 71.43%, rgba(83, 83, 83, 0.03) 85.71600000000001%,rgba(249, 249, 249, 0.03) 85.716%, rgba(249, 249, 249, 0.03) 100.002%),linear-gradient(122deg, rgba(150, 150, 150, 0.01) 0%, rgba(150, 150, 150, 0.01) 20%,rgba(252, 252, 252, 0.01) 20%, rgba(252, 252, 252, 0.01) 40%,rgba(226, 226, 226, 0.01) 40%, rgba(226, 226, 226, 0.01) 60%,rgba(49, 49, 49, 0.01) 60%, rgba(49, 49, 49, 0.01) 80%,rgba(94, 94, 94, 0.01) 80%, rgba(94, 94, 94, 0.01) 100%),linear-gradient(295deg, rgba(207, 207, 207, 0.02) 0%, rgba(207, 207, 207, 0.02) 25%,rgba(47, 47, 47, 0.02) 25%, rgba(47, 47, 47, 0.02) 50%,rgba(142, 142, 142, 0.02) 50%, rgba(142, 142, 142, 0.02) 75%,rgba(76, 76, 76, 0.02) 75%, rgba(76, 76, 76, 0.02) 100%),linear-gradient(73deg, rgba(81, 81, 81, 0.03) 0%, rgba(81, 81, 81, 0.03) 12.5%,rgba(158, 158, 158, 0.03) 12.5%, rgba(158, 158, 158, 0.03) 25%,rgba(136, 136, 136, 0.03) 25%, rgba(136, 136, 136, 0.03) 37.5%,rgba(209, 209, 209, 0.03) 37.5%, rgba(209, 209, 209, 0.03) 50%,rgba(152, 152, 152, 0.03) 50%, rgba(152, 152, 152, 0.03) 62.5%,rgba(97, 97, 97, 0.03) 62.5%, rgba(97, 97, 97, 0.03) 75%,rgba(167, 167, 167, 0.03) 75%, rgba(167, 167, 167, 0.03) 87.5%,rgba(22, 22, 22, 0.03) 87.5%, rgba(22, 22, 22, 0.03) 100%),linear-gradient(90deg, hsl(137,0%,23%),hsl(137,0%,23%))',
    color: 'white',
    top: 0,
    position: 'sticky',
    zIndex: 1,
    boxShadow: '0 0.3em 1em black',
  },
  links: {
    margin: 5,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    color: 'white',
    '&:hover': {

    }
  },
  titleHeader: {
    paddingLeft: 15,
    paddingTop: 3
  }
});

function Header(props) {
  const classes = useStyles();

  const links = {
    "home": {
      title: "Home",
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

  function ScrollToSection(elementId) {
    const headerElement = document.getElementById('header');
    const headerOffset = headerElement.clientHeight;

    const elementToScrollTo = document.getElementById(elementId);
    if(elementToScrollTo){
      const elementHeight = elementToScrollTo.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: elementHeight - headerOffset,
        behavior: 'smooth'
      })
    }
    else{
      window.location.href = "/#" + elementId;
    }
    handleClose();
  }

  return <Fragment>
    <Paper id='header' className={classes.root}>
      <Grid container>
        <Grid item xs>
          <Typography className={classes.titleHeader} variant="h4">
            <Link
              color='inherit'
              underline='none'
              style={{cursor: 'pointer'}}
              onClick={() => {ScrollToSection('home')}}>
              June Jaictin
            </Link>
          </Typography>
        </Grid>
        <Hidden xsDown={true}>
          {Object.entries(links).map(([key, value]) =>
            <Grid key={key} item>
              <Typography>
                <Button
                  onClick={() => {ScrollToSection(value.scrollTo)}}
                  className={classes.links}>
                  {value.title}
                </Button>
              </Typography>
            </Grid>,
          )}
        </Hidden>
        <Hidden smUp={true}>
          <Button
            aria-controls='simple-menu'
            onClick={handleClick}>
            <MenuIcon htmlColor='white'/>
          </Button>
          <Menu
            id='simple-menu'
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            {Object.entries(links).map(([key, value]) =>
              <MenuItem
                key={key}
                dense
                onClick={() => {ScrollToSection(value.scrollTo)}}>
                {value.title}
              </MenuItem>
            )}
          </Menu>
        </Hidden>
      </Grid>
    </Paper>
  </Fragment>


}

export default Header
