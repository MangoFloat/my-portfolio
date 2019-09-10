import React, { Component, Fragment } from 'react'
import {
  Paper, Typography, Card,
  Grid
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import GetSkills from '../components/skills'
import BackgroundImageDark from '../images/background2.webp'
import BackgroundImageLight from '../images/background3.webp'
import testImg from '../images/background8.webp';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: 165
    },
    margin: 'auto',
    backgroundImage: theme.palette.type == 'dark' ? `url(${BackgroundImageDark})` : `url(${BackgroundImageLight})`,
  },
  title: {
    backgroundColor: theme.palette.type == 'dark' ? '#252525' : '#c9c9c9',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottom: '1px solid ' + (theme.palette.type == 'dark' ? '#c9c9c9' : '#252525'),
    borderTop: '1px solid ' + (theme.palette.type == 'dark' ? '#c9c9c9' : '#252525'),
  },
  skillsContainer: {
    backgroundImage: `url(${testImg})`,
    margin: 25,
    padding: 25,
    transition: '0.3s',
  },
  skillsCategory: {
    paddingLeft: 0
  },
  grid: {
    marginTop: 10,
  },
  skill: {
    minWidth: 160,
    height: 150,
    margin: 7,
    paddingBottom: 10,
    transition: "0.1s",
    '&:hover': {
      boxShadow: '0 0.1em 0.75em black',
      transform: 'translateY(-0.25em)',
    },
  },
  skillIcon: {
    display: 'block',
    margin: 'auto',
  }
}));

function Skills(props) {
  const classes = useStyles();
  const allSkills = GetSkills();

  return <Fragment>
    <div
      id='skills'
      className={classes.root}>
      <Typography
        className={classes.title}
        align='center'
        variant='h3'>
        Skills
      </Typography>
      {Object.entries(allSkills).map(([skill, skillInfo]) =>
        <Card
          raised={true}
          className={classes.skillsContainer}>
          <Typography
            className={classes.skillsCategory}
            align='center'
            variant='h4'>
            {skillInfo.title}
          </Typography>
          <hr/>
          <Grid
            className={classes.grid}
            justify='center'
            alignContent='flex-start'
            container>
            {Object.entries(skillInfo.skills).map(([skillInfoKey, skills]) =>
              <Grid
                item>
                <Card
                  className={classes.skill}
                  raised={true}>
                  <Typography
                    align='center'
                    variant='h5'>
                    {skills.title}
                  </Typography>
                  <hr/>
                  <img className={classes.skillIcon} width={100} src={skills.icon} alt={require('../images/gatsby-icon.png')}/>
                </Card>
              </Grid>
            )}
          </Grid>
        </Card>
      )}
      <Typography variant='body2'>
        Test
      </Typography>
    </div>
  </Fragment>
}

export default Skills