import React from 'react'
import { Paper, Tabs } from '@material-ui/core'
import Tab from '@material-ui/core/Tab'

class Footer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      muscles: props.muscles
    }
  }

  render() {
    console.log(this.state.muscles);
    return (
      <Paper>
        <Tabs
          value={0}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="All" />
          {this.state.muscles.map(group =>
            <Tab label={group} />
          )}
        </Tabs>
      </Paper>
    )
  }
}

export default Footer
