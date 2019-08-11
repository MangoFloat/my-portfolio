import React, { Component, Fragment } from 'react'
import { Paper, Typography } from '@material-ui/core'

class Home extends Component {


  render(){
    return <Fragment>
      <Paper>
        <Typography align="center" variant="h5">
          Software Developer
        </Typography>
        <Typography paragraph={true} align="center" variant="body" gutterBottom>
          Experience in full stack development blah blah blah
        </Typography>
        <Typography paragraph={true} align="center" variant="body" gutterBottom>
          Experience in full stack development blah blah blah
        </Typography>
        <Typography paragraph={true} align="center" variant="body" gutterBottom>
          Experience in full stack development blah blah blah
        </Typography>
      </Paper>
    </Fragment>

  }
}

export default Home