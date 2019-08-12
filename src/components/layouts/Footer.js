import React, { Component, Fragment } from 'react'
import { Paper, Grid, Typography } from '@material-ui/core'

export default class Footer extends Component {
  render() {
    return <Fragment>
      <Paper square={true} elevation={3}>
        <Grid container style={{textAlign: 'center'}}>

          <Grid item xs style={{padding: 5}}>
            <Typography variant='body2' align='right'>
              +44 7710 393505
            </Typography>
            <Typography variant='body2' align='right'>
              jaictinjune@gmail.com
            </Typography>
            <Typography variant='body2' align='right'>
              https://www.linkedin.com/in/junejaictin
            </Typography>
            <Typography variant='body2' align='right'>
              https://github.com/MangoFloat
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Fragment>
  }
}
