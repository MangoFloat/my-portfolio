import React, { Component, Fragment } from 'react'
import {
  Paper, Typography, Card,
  Grid
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import GetSkills from '../components/skills'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(90deg, rgba(181, 181, 181, 0.07) 0%, rgba(181, 181, 181, 0.07) 55%,rgba(80, 80, 80, 0.07) 55%, rgba(80, 80, 80, 0.07) 100%),linear-gradient(135deg, rgba(251, 251, 251, 0.02) 0%, rgba(251, 251, 251, 0.02) 31%,rgba(131, 131, 131, 0.02) 31%, rgba(131, 131, 131, 0.02) 100%),linear-gradient(45deg, rgba(17, 17, 17, 0.09) 0%, rgba(17, 17, 17, 0.09) 69%,rgba(171, 171, 171, 0.09) 69%, rgba(171, 171, 171, 0.09) 100%),linear-gradient(0deg, rgba(76, 76, 76, 0.06) 0%, rgba(76, 76, 76, 0.06) 48%,rgba(46, 46, 46, 0.06) 48%, rgba(46, 46, 46, 0.06) 100%),linear-gradient(90deg, rgba(65, 65, 65, 0.09) 0%, rgba(65, 65, 65, 0.09) 25%,rgba(98, 98, 98, 0.09) 25%, rgba(98, 98, 98, 0.09) 100%),linear-gradient(45deg, rgba(233, 233, 233, 0.1) 0%, rgba(233, 233, 233, 0.1) 65%,rgba(184, 184, 184, 0.1) 65%, rgba(184, 184, 184, 0.1) 100%),linear-gradient(90deg, rgba(140, 140, 140, 0.03) 0%, rgba(140, 140, 140, 0.03) 39%,rgba(249, 249, 249, 0.03) 39%, rgba(249, 249, 249, 0.03) 100%),linear-gradient(90deg, rgb(0, 0, 0),rgb(2, 2, 2))',
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
    margin: 25,
    padding: 25,
    background: '#393939',
    color: 'white',
    transition: '0.3s',
    '&:hover': {
      background: '#3e3e3e',
    },
  },
  skillsCategory: {
    paddingLeft: 15
  },
  grid: {
    marginTop: 25,
  },
  skill: {
    background: '#2c2c2c',
    color: 'white',
    minWidth: 200,
    margin: 5,
    transition: "0.1s",
    '&:hover': {
      boxShadow: '0 0.1em 0.75em black',
      transform: 'translateY(-0.25em)',
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