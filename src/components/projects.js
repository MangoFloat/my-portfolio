import React, { Component, Fragment } from "react"
import { Grid, Paper, Tabs, Tab } from "@material-ui/core"


class Projects extends Component {
  render() {
    return <Fragment>
      <Grid container>
        <Grid item xs={12}>
          <Paper>
            <Tabs value={0}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="scrollable"
                  scrollButtons="auto"
                  centered>
              <Tab label="Project1">

              </Tab>
              <Tab label="Project2">

              </Tab>
              <Tab label="Project3">

              </Tab>
              <Tab label="Project3">

              </Tab>
              <Tab label="Project3">

              </Tab>
              <Tab label="Project3">

              </Tab>
              <Tab label="Project3">

              </Tab>
            </Tabs>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            More info about the project here!
          </Paper>
        </Grid>
      </Grid>
    </Fragment>

  }
}

export default Projects