import React, { Fragment } from "react"
import {
  Paper, Typography, SvgIcon,
  Grid, Button,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import tempIcon from "../images/panda.webp"
import LargeContactButton from "../components/LargeContactButton"
import GetContacts from "../components/info_objects/contacts"
import BackgroundImageDark from "../images/backgrounds/background2.webp"
import BackgroundImageLight from "../images/backgrounds/background3.webp"
import testImg from "../images/backgrounds/background16.png"

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: 185,
    },
    backgroundImage: theme.palette.type == "dark" ? `url(${BackgroundImageDark})` : `url(${BackgroundImageLight})`,
    paddingTop: "1%",
    minHeight: "100vh",
  },
  title: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  subTitle: {
    paddingBottom: 5,
  },
  intro: {
    marginBottom: 25,
  },
  avatarHolder: {
    height: 230,
    width: 230,
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    borderRadius: "50%",
    overflow: "hidden",
  },
  avatar: {
    width: "auto",
    height: "100%",
    marginLeft: -50,
  },
  mainContactContainer: {
    paddingBottom: 10,
  },
  contactContainer: {
    minWidth: 300,
  },
  contactPaper: {
    marginTop: 15,
    backgroundImage: `url(${testImg})`,
    "&:hover": {
      boxShadow: "0 0.1em 0.75em black",
      transform: "translateY(-0.25em)",
    },
    transition: "0.1s",
  },
  contactButtonIcon: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  contactButtonLink: {
    minWidth: "100%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 0,
    marginBottom: 0,
    borderRadius: "4px 4px 0 0",
  },
}))

function About(props) {
  const classes = useStyles()
  const contacts = GetContacts()

  return <Fragment>
    <div id='about' className={classes.root}>
      <div className={classes.avatarHolder}>
        <img className={classes.avatar} src={tempIcon} alt='June Jaictin Logo'/>
      </div>
      <Typography className={classes.title} align='center' variant='h1'>
        June Jaictin
      </Typography>
      <Typography align='center' variant='h3' className={classes.subTitle}>
        Software Developer
      </Typography>
      <Typography role='separator' align='center' variant='h5' className={classes.subTitle}>
        •
      </Typography>
      <Typography align='center' variant='h3' className={classes.subTitle}>
        Student
      </Typography>
      <Typography role='separator' align='center' variant='h5' className={classes.subTitle}>
        •
      </Typography>
      <Typography align='center' variant='h4' className={classes.subTitle}>
        (WIP)
      </Typography>
      <Grid
        container
        justify='center'
        alignItems='center'
        direction='column'
        className={classes.mainContactContainer}>
        {Object.entries(contacts).map(([key, value]) =>
          <Grid
            item
            key={key}
            className={classes.contactContainer}>
            <LargeContactButton {...value}/>
          </Grid>,
        )}
      </Grid>
    </div>
  </Fragment>


}

export default About