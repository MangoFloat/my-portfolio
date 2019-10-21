import React, { Fragment } from "react"
import {
  Paper, Typography, SvgIcon,
  Grid, Button,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

import tempIcon from "../images/panda.webp"

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
// Test
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
            <Paper
              className={classes.contactPaper}
              elevation={5}>
              <Button
                aria-label={value.name}
                className={classes.contactButtonLink}
                fullWidth={true}
                href={value.link}
                target='_blank'>
                <SvgIcon
                  className={classes.contactButtonIcon}
                  fontSize='large'>
                  {value.icon}
                </SvgIcon>
                <Typography
                  variant='h6'
                  align='center'
                  style={{ textTransform: "none" }}>
                  {value.name}
                </Typography>
              </Button>
              <hr style={{ marginTop: 0, marginBottom: 0 }}/>
              <Typography
                variant='body1'
                align='center'>
                {value.title}
              </Typography>
            </Paper>
          </Grid>,
        )}
      </Grid>
    </div>
  </Fragment>


}

export default About