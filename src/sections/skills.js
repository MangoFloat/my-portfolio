import React, { Component, Fragment } from 'react'
import {
  Paper, Typography, Card,
  Grid
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(90deg, rgba(181, 181, 181, 0.07) 0%, rgba(181, 181, 181, 0.07) 55%,rgba(80, 80, 80, 0.07) 55%, rgba(80, 80, 80, 0.07) 100%),linear-gradient(135deg, rgba(251, 251, 251, 0.02) 0%, rgba(251, 251, 251, 0.02) 31%,rgba(131, 131, 131, 0.02) 31%, rgba(131, 131, 131, 0.02) 100%),linear-gradient(45deg, rgba(17, 17, 17, 0.09) 0%, rgba(17, 17, 17, 0.09) 69%,rgba(171, 171, 171, 0.09) 69%, rgba(171, 171, 171, 0.09) 100%),linear-gradient(0deg, rgba(76, 76, 76, 0.06) 0%, rgba(76, 76, 76, 0.06) 48%,rgba(46, 46, 46, 0.06) 48%, rgba(46, 46, 46, 0.06) 100%),linear-gradient(90deg, rgba(65, 65, 65, 0.09) 0%, rgba(65, 65, 65, 0.09) 25%,rgba(98, 98, 98, 0.09) 25%, rgba(98, 98, 98, 0.09) 100%),linear-gradient(45deg, rgba(233, 233, 233, 0.1) 0%, rgba(233, 233, 233, 0.1) 65%,rgba(184, 184, 184, 0.1) 65%, rgba(184, 184, 184, 0.1) 100%),linear-gradient(90deg, rgba(140, 140, 140, 0.03) 0%, rgba(140, 140, 140, 0.03) 39%,rgba(249, 249, 249, 0.03) 39%, rgba(249, 249, 249, 0.03) 100%),linear-gradient(90deg, rgb(0, 0, 0),rgb(2, 2, 2))',
    color: 'white',
    marginTop: 5,
    minHeight: '93vh'
  },
  title: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  skills: {
    marginLeft: 5,
    marginRight: 5
  }
});

function Skills(props) {
  const classes = useStyles();

  return <Fragment>
    <Paper id={props.id} className={classes.root}>
      <Typography className={classes.title} align="center" variant="h3">
        Skills
      </Typography>
    </Paper>
  </Fragment>
}

export default Skills