import React, { Fragment } from "react"
import {
  Paper, Typography, Container,
  Tooltip, Hidden, SvgIcon,
  Grid, Button, Fade
} from "@material-ui/core"
import { makeStyles } from '@material-ui/styles'

import tempIcon from '../images/gatsby-icon.png'

import GetContacts from '../components/contacts'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.09) 0%, rgba(0, 0, 0, 0.09) 45%,rgba(29, 29, 29, 0.09) 45%, rgba(29, 29, 29, 0.09) 100%),linear-gradient(45deg, rgba(239, 239, 239, 0.07) 0%, rgba(239, 239, 239, 0.07) 41%,rgba(19, 19, 19, 0.07) 41%, rgba(19, 19, 19, 0.07) 100%),linear-gradient(135deg, rgba(12, 12, 12, 0.08) 0%, rgba(12, 12, 12, 0.08) 40%,rgba(153, 153, 153, 0.08) 40%, rgba(153, 153, 153, 0.08) 100%),linear-gradient(45deg, rgba(2, 2, 2, 0.02) 0%, rgba(2, 2, 2, 0.02) 74%,rgba(113, 113, 113, 0.02) 74%, rgba(113, 113, 113, 0.02) 100%),linear-gradient(90deg, rgba(132, 132, 132, 0.03) 0%, rgba(132, 132, 132, 0.03) 22%,rgba(39, 39, 39, 0.03) 22%, rgba(39, 39, 39, 0.03) 100%),linear-gradient(45deg, rgba(34, 34, 34, 0.03) 0%, rgba(34, 34, 34, 0.03) 76%,rgba(98, 98, 98, 0.03) 76%, rgba(98, 98, 98, 0.03) 100%),linear-gradient(90deg, rgb(45, 45, 45),rgb(13, 13, 13))',
    color: 'white',
    marginLeft: 165,
    marginTop: 0,
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
    paddingTop: 15,
    display: 'grid',
    justifyItems: 'center',
    alignItems: 'center',
    clipPath: 'inset(10% 44% 30% 40%)',
    background: '#666666',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      clipPath: 'inset(0 0 0 0)'
    }
  },
  contactLinksImage: {
    float: 'right',
    marginRight: '4%',
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
                <Typography variant='h6' className={classes.contactLinksLink}>
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