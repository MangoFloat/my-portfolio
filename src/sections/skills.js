import React, { Component, Fragment } from 'react'
import {
  Paper, Typography, Container
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(219deg, rgba(246, 246, 246, 0.02) 0%, rgba(246, 246, 246, 0.02) 20%,rgba(225, 225, 225, 0.02) 20%, rgba(225, 225, 225, 0.02) 40%,rgba(136, 136, 136, 0.02) 40%, rgba(136, 136, 136, 0.02) 60%,rgba(216, 216, 216, 0.02) 60%, rgba(216, 216, 216, 0.02) 80%,rgba(35, 35, 35, 0.02) 80%, rgba(35, 35, 35, 0.02) 100%),linear-gradient(299deg, rgba(213, 213, 213, 0.02) 0%, rgba(213, 213, 213, 0.02) 20%,rgba(150, 150, 150, 0.02) 20%, rgba(150, 150, 150, 0.02) 40%,rgba(161, 161, 161, 0.02) 40%, rgba(161, 161, 161, 0.02) 60%,rgba(186, 186, 186, 0.02) 60%, rgba(186, 186, 186, 0.02) 80%,rgba(28, 28, 28, 0.02) 80%, rgba(28, 28, 28, 0.02) 100%),linear-gradient(50deg, rgba(157, 157, 157, 0.02) 0%, rgba(157, 157, 157, 0.02) 16.667%,rgba(147, 147, 147, 0.02) 16.667%, rgba(147, 147, 147, 0.02) 33.334%,rgba(42, 42, 42, 0.02) 33.334%, rgba(42, 42, 42, 0.02) 50.001000000000005%,rgba(214, 214, 214, 0.02) 50.001%, rgba(214, 214, 214, 0.02) 66.668%,rgba(34, 34, 34, 0.02) 66.668%, rgba(34, 34, 34, 0.02) 83.33500000000001%,rgba(211, 211, 211, 0.02) 83.335%, rgba(211, 211, 211, 0.02) 100.002%),linear-gradient(278deg, rgba(79, 79, 79, 0.03) 0%, rgba(79, 79, 79, 0.03) 20%,rgba(217, 217, 217, 0.03) 20%, rgba(217, 217, 217, 0.03) 40%,rgba(5, 5, 5, 0.03) 40%, rgba(5, 5, 5, 0.03) 60%,rgba(200, 200, 200, 0.03) 60%, rgba(200, 200, 200, 0.03) 80%,rgba(125, 125, 125, 0.03) 80%, rgba(125, 125, 125, 0.03) 100%),linear-gradient(274deg, rgba(235, 235, 235, 0.03) 0%, rgba(235, 235, 235, 0.03) 12.5%,rgba(100, 100, 100, 0.03) 12.5%, rgba(100, 100, 100, 0.03) 25%,rgba(44, 44, 44, 0.03) 25%, rgba(44, 44, 44, 0.03) 37.5%,rgba(228, 228, 228, 0.03) 37.5%, rgba(228, 228, 228, 0.03) 50%,rgba(36, 36, 36, 0.03) 50%, rgba(36, 36, 36, 0.03) 62.5%,rgba(72, 72, 72, 0.03) 62.5%, rgba(72, 72, 72, 0.03) 75%,rgba(30, 30, 30, 0.03) 75%, rgba(30, 30, 30, 0.03) 87.5%,rgba(109, 109, 109, 0.03) 87.5%, rgba(109, 109, 109, 0.03) 100%),linear-gradient(90deg, hsl(28,0%,14%),hsl(28,0%,14%))',
    color: 'white',
    marginTop: 5
  },
  title: {
    paddingTop: 10,
    paddingBottom: 10,
  }
});

function Skills(props) {
  const classes = useStyles();

  return <Fragment>
    <Paper id={props.id} className={classes.root}>
      <Typography className={classes.title} align="center" variant="h5">
        Skills
      </Typography>
      <Typography align='center' variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus ligula et accumsan finibus.
        Pellentesque pretium ex vel tellus placerat dictum. Quisque nec euismod lacus. Praesent maximus augue ut
        sapien dictum, nec dignissim massa dignissim. Nullam tincidunt ligula ipsum, ut dapibus tellus porttitor eu.
        Mauris vestibulum est ut augue condimentum, in tincidunt nisi commodo. Phasellus vulputate vulputate luctus.
        Nullam fermentum, sapien nec ornare vestibulum, enim urna cursus ipsum, quis vulputate massa urna aliquam
        felis. Donec vitae tortor dolor.
      </Typography>
    </Paper>
  </Fragment>
}

export default Skills