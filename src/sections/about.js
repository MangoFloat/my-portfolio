import React, { Fragment } from "react"
import {
  Paper, Typography, Container,
  Tooltip, Hidden, SvgIcon,
  Grid, Button, ButtonGroup
} from "@material-ui/core"
import { makeStyles } from '@material-ui/styles'

import tempIcon from '../images/logos/gatsby-icon.webp'

import GetContacts from '../components/contacts'
import BackgroundImageDark from '../images/backgrounds/background2.webp'
import BackgroundImageLight from '../images/backgrounds/background3.webp'
import testImg from '../images/backgrounds/background16.png';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: 165
    },
    backgroundImage: theme.palette.type == 'dark' ? `url(${BackgroundImageDark})` : `url(${BackgroundImageLight})`,
    paddingTop: '1%',
    minHeight: '100vh'
  },
  title: {
    paddingTop: 10,
    paddingBottom: 10,
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
  mainContactContainer: {
    paddingBottom: 10,
  },
  contactContainer: {
    minWidth: 300,
  },
  contactPaper: {
    marginTop: 15,
    backgroundImage: `url(${testImg})`,
    '&:hover': {
      boxShadow: '0 0.1em 0.75em black',
      transform: 'translateY(-0.25em)',
    },
    transition: '0.1s',
  },
  contactButtonIcon: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  contactButtonLink: {
    minWidth: '100%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 0,
    marginBottom: 0,
    borderRadius: '4px 4px 0 0',
  }
}));

function About(props) {
  const classes = useStyles();
  const contacts = GetContacts ();

  return <Fragment>
    <div id='about' className={classes.root}>
      <img className={classes.avatar} src={tempIcon} alt='June Jaictin Logo'/>
      <Typography className={classes.title} align='center' variant='h1'>
        June Jaictin
      </Typography>
      <Typography align='center' variant='h3' className={classes.subTitle}>
        Full Stack Developer
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
                style={{textTransform: 'none'}}>
                {value.name}
              </Typography>
            </Button>
            <hr style={{marginTop: 0, marginBottom: 0}}/>
            <Typography
              variant='body1'
              align='center'>
              {value.title}
            </Typography>
          </Paper>
        </Grid>
      )}
      </Grid>
    </div>
  </Fragment>


}

export default About