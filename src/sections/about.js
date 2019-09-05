import React, { Fragment } from "react"
import {
  Paper, Typography, Container,
  Tooltip, Hidden, SvgIcon,
  Grid, Button, Fade
} from "@material-ui/core"
import { makeStyles } from '@material-ui/styles'

import tempIcon from '../images/gatsby-icon.png'

import GetContacts from '../components/contacts'
import BackgroundImage from '../images/background2.png'
import testImg from '../images/background5.png'

const useStyles = makeStyles({
  root: {
    backgroundColor: '#2b2b2b',
    backgroundImage: `url(${BackgroundImage})`,
    color: 'white',
    marginLeft: 165,
    paddingTop: 0,
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
    paddingTop: 30,
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
    backgroundColor: '#00211f',
    backgroundImage: `url(${testImg})`,
    paddingTop: 15,
    display: 'grid',
    justifyItems: 'center',
    alignItems: 'center',
    clipPath: 'inset(12% 38% 20% 38%)',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      clipPath: 'inset(0 0 0 0)'
    }
  },
  contactLinksImage: {
    float: 'right',
  },
  contactLinksLink: {
    // TODO: Style link
  },
  contactsGrid: {

  },
  testing1: {
    animationDelay: '2s'
  }
});

function About(props) {
  const classes = useStyles();
  const contacts = GetContacts ();

  return <Fragment>
    <Paper id='about' className={classes.root}>
      <img className={classes.avatar} src={tempIcon} alt='Test'/>
      <Typography className={classes.title} align='center' variant='h1'>
        June Jaictin
      </Typography>
      <Typography align='center' variant='h3' className={classes.subTitle}>
        Full Stack Developer
      </Typography>
      <Typography align='center' variant="body2" className={classes.intro}>
        • Fast learner.. blah blah blah bullshit.
      </Typography>
      <Hidden mdDown={true}>
        <Grid
          container
          justify='space-evenly'
          alignItems='center'>
          {Object.entries(contacts).map(([key, value]) =>
            <Grid key={key} item sm>
              <div className={classes.contactLinksContainer}>
                <Tooltip placement='top' title={value.launchTooltip}>
                  <Button
                    href={value.link}
                    size='large'
                    className={classes.contactLinksImage}
                    color='inherit'>
                    <SvgIcon fontSize='large'>
                      {value.icon}
                    </SvgIcon>
                  </Button>
                </Tooltip>
                <Typography variant='h6'>
                  {value.name}
                </Typography>
                <Typography variant='h6'>
                  {value.title}
                </Typography>
              </div>
            </Grid>
          )}
        </Grid>
      </Hidden>
    </Paper>
  </Fragment>


}

export default About