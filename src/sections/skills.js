import React, { Fragment } from "react"
import {
  Typography, Card, Grid,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import GetSkills from "../components/info_objects/skills"
import BackgroundImageDark from "../images/backgrounds/background2.webp"
import BackgroundImageLight from "../images/backgrounds/background3.webp"

import SkillGrid from "../components/SkillGrid"

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: 185,
    },
    margin: "auto",
    paddingBottom: 15,
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

function Skills(props) {
  const classes = useStyles()
  const allSkills = GetSkills()

  return <Fragment>
    <div
      id='skills'
      className={classes.root}>
      <Typography
        className={classes.title}
        align='center'
        variant='h2'
        noWrap={true}>
        Skills
      </Typography>
      {Object.entries(allSkills).map(([skill, skillInfo]) =>
        <SkillGrid skill={skill} skillInfo={skillInfo}/>,
      )}
    </div>
  </Fragment>
}

export default Skills