import React, { Fragment } from "react"
import {
  Typography, Card, Grid,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import GetSkills from "../components/info_objects/skills"
import BackgroundImageDark from "../images/backgrounds/background2.webp"
import BackgroundImageLight from "../images/backgrounds/background3.webp"
import testImg from "../images/backgrounds/background15.png"

import SkillBlock from "../components/SkillBlock";


const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: 165,
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
  skillsContainer: {
    backgroundImage: `url(${testImg})`,
    margin: 20,
    marginTop: 20,
    padding: 15,
    marginBottom: 0,
    transition: "0.3s",
  },
  skillsCategory: {
    paddingLeft: 0,
  },
  grid: {
    marginTop: 10,
  }
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
        <Card
          key={skill}
          raised={true}
          className={classes.skillsContainer}>
          <Typography
            className={classes.skillsCategory}
            align='center'
            variant='h4'>
            {skillInfo.title}
          </Typography>
          <hr/>
          <Grid
            className={classes.grid}
            justify='center'
            alignContent='flex-start'
            container>
            {Object.entries(skillInfo.skills).map(([skillInfoKey, skills]) =>
              <Grid
                key={skillInfoKey}
                item>
                <SkillBlock {...skills} />
              </Grid>,
            )}
          </Grid>
        </Card>,
      )}
    </div>
  </Fragment>
}

export default Skills