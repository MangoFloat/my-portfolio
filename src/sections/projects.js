import React, { Fragment } from "react"
import {
  Typography, Grid, Card,
  CardMedia, CardContent, CardActions,
  Button, Tooltip,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import ProjectBlock from "../components/ProjectBlock"

import BackgroundImageDark from "../images/backgrounds/background2.webp"
import BackgroundImageLight from "../images/backgrounds/background3.webp"
import GetProjects from "../components/info_objects/projects"

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: 185,
    },
    margin: "auto",
    backgroundImage: theme.palette.type == "dark" ? `url(${BackgroundImageDark})` : `url(${BackgroundImageLight})`,
  },
  title: {
    backgroundColor: theme.palette.type == "dark" ? "#121212" : "#eeeeee",
    paddingTop: 10,
    paddingBottom: 10,
    borderBottom: "1px solid " + (theme.palette.type == "dark" ? "#eeeeee" : "#121212"),
    borderTop: "1px solid " + (theme.palette.type == "dark" ? "#eeeeee" : "#121212"),
  },
}))

function Projects(props) {
  const classes = useStyles()
  const projects = GetProjects()

  return <Fragment>
    <div id='projects' className={classes.root}>
      <Typography
        className={classes.title}
        align="center"
        variant="h2"
        noWrap={true}>
        Projects
      </Typography>
      <Grid
        container
        justify='center'
        alignItems='center'>
        {Object.entries(projects).map(([key, value]) =>
          <Grid
            key={key}
            lg={5}
            item>
            <ProjectBlock {...value} />
          </Grid>,
        )}
      </Grid>
    </div>
  </Fragment>
}

export default Projects