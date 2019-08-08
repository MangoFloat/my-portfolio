import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import RightPane from './RightPane'
import LeftPane from './LeftPane'

const styles = {
  Paper: { padding: 20, margin: 10 }
}

class Index extends Component {
  render(){
    return (
      <Grid container>
        <Grid item xs>
          <LeftPane styles={styles}/>
        </Grid>
        <Grid item xs>
          <RightPane styles={styles}/>
        </Grid>
      </Grid>
    )
  }
}

export default Index;