import React, { Component, Fragment } from 'react'
import {
  Paper, Typography, Card,
  Grid
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import GetSkills from '../components/skills'
import BackgroundImage from '../images/background2.png';
import testImg from '../images/background5.png';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#2b2b2b',
    backgroundImage: `url(${BackgroundImage})`,
    color: 'white',
    marginTop: 15,
    marginLeft: 165,
    margin: 'auto'
  },
  title: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  skillsContainer: {
    backgroundColor: '#001716',
    backgroundImage: `url(${testImg})`,
    margin: 25,
    padding: 25,
    color: 'white',
    transition: '0.3s',
    '&:hover': {
      backgroundColor: '#001e1d',
    },
  },
  skillsCategory: {
    paddingLeft: 15
  },
  grid: {
    marginTop: 25,
  },
  skill: {
    backgroundColor: '#002927',
    color: 'white',
    minWidth: 200,
    margin: 5,
    transition: "0.1s",
    '&:hover': {
      boxShadow: '0 0.1em 0.75em black',
      transform: 'translateY(-0.25em)',
      backgroundColor: '#00312f',
    },
  },
  skillIcon: {
    display: 'block',
    margin: 'auto'
  }
});

function Skills(props) {
  const classes = useStyles();
  const allSkills = GetSkills();

  return <Fragment>
    <Paper
      id='skills'
      className={classes.root}>
      <Typography
        className={classes.title}
        align='center'
        variant='h3'>
        Skills
      </Typography>
      <hr/>
      {Object.entries(allSkills).map(([skill, skillInfo]) =>
        <Card
          raised={true}
          className={classes.skillsContainer}>
          <Typography
            className={classes.skillsCategory}
            variant='h4'>
            {skillInfo.title}
          </Typography>
          <hr/>
          <Grid
            className={classes.grid}
            justify='space-evenly'
            alignItems='center'
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
                  <img className={classes.skillIcon} width={100} src={require('../images/gatsby-icon.png')}/>
                </Card>
              </Grid>
            )}
          </Grid>
        </Card>
      )}
      <Typography variant='body2'>
        Test
      </Typography>
    </Paper>
  </Fragment>
}

export default Skills