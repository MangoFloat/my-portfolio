import React, { Component, Fragment } from 'react'
import Paper from '@material-ui/core/Paper'

const footerStyles = {

}

export default class Footer extends Component {
  render() {
    return <Fragment>
      <Paper square={true} elevation={3}>
        <h1>Footer</h1>
      </Paper>
    </Fragment>
  }
}
