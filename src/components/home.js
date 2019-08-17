import React, { Component, Fragment } from 'react'
import { Paper, Typography } from '@material-ui/core'

class Home extends Component {


  render(){
    return <Fragment>
      <Paper>
        <Typography align="center" variant="h5">
          Full Stack Developer
        </Typography>
        <Typography align='center' variant="body2">
          Experience in full stack development blah blah blah
          Experience in full stack development blah blah blah
        </Typography>
      </Paper>
    </Fragment>

  }
}

export default Home