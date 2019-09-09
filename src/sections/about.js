import React, { Fragment } from "react"
import {
  Paper, Typography, Container,
  Tooltip, Hidden, SvgIcon,
  Grid, Button, ButtonGroup
} from "@material-ui/core"
import { makeStyles } from '@material-ui/styles'

import tempIcon from '../images/gatsby-icon.png'

import GetContacts from '../components/contacts'
import BackgroundImage from '../images/background2.png'
import testImg from '../images/background5.png'

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: 165
    },
    backgroundImage: `url(${BackgroundImage})`,
    paddingTop: '5%',
    minHeight: '100vh'
  },
  title: {
    paddingTop: 10,
    paddingBottom: 10,
    '&:hover': {

    }
  },
  subTitle: {
    paddingBottom: 20,
    //fontSize: '2vh'
  },
  intro: {
    marginBottom: 25
  },
  avatar: {
    height: 200,
    width: 200,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  contactLinks: {
    height: '10vh',
    minWidth: '10vh',
    margin: 'auto'
  },
  contactLinksContainer: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  contactLinksImage: {
    display: 'block',
    leftMargin: 'auto',
    rightMargin: 'auto'
  },
  contactLinksLink: {
    // TODO: Style link
  },
  contactsGrid: {

  },
  testing1: {
    animationDelay: '2s'
  }
}));

function About(props) {
  const classes = useStyles();
  const contacts = GetContacts ();

  return <Fragment>
    <div id='about' className={classes.root}>
      <img className={classes.avatar} src={tempIcon} alt='Test'/>
      <Typography className={classes.title} align='center' variant='h1'>
        June Jaictin
      </Typography>
      <Typography align='center' variant='h3' className={classes.subTitle}>
        Full Stack Developer
      </Typography>
      <Grid
        container
        justify='center'
        alignItems='center'>
      {Object.entries(contacts).map(([key, value]) =>
        <Grid item>
          <Button>
            <SvgIcon fontSize='large'>
              {value.icon}
            </SvgIcon>
          </Button>
        </Grid>
      )}
      </Grid>
    </div>
  </Fragment>


}

export default About