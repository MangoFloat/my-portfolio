import React, { Fragment } from "react"
import { Card, Typography, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles/index"

import backgroundImage from "../images/backgrounds/background15.png"
import SkillBlock from "../components/SkillBlock"

const useStyles = makeStyles(theme => ({
  title: {
    backgroundColor: theme.palette.type == "dark" ? "#121212" : "#eeeeee",
    paddingTop: 10,
    paddingBottom: 10,
    borderBottom: "1px solid " + (theme.palette.type == "dark" ? "#eeeeee" : "#121212"),
    borderTop: "1px solid " + (theme.palette.type == "dark" ? "#eeeeee" : "#121212"),
  },
  skillsContainer: {
    //backgroundImage: `url(${backgroundImage})`,
    margin: 20,
    marginTop: 20,
    padding: 15,
    marginBottom: 0,
    transition: "0.3s",
  },
  skillsCategory: {
    borderBottom: '1px solid ' + (theme.palette.type == "dark" ? "#eeeeee" : "#121212")
  },
  grid: {
    marginTop: 10,
  },
}))

function SkillGrid(props) {
  const classes = useStyles()
  return <Fragment>
    <div
      className={classes.skillsContainer}>
      <Typography
        className={classes.skillsCategory}
        align='center'
        variant='h4'>
        {props.skillInfo.title}
      </Typography>
      <Grid
        className={classes.grid}
        justify='center'
        alignContent='flex-start'
        container>
        {Object.entries(props.skillInfo.skills).map(([skillInfoKey, skills]) =>
          <Grid
            key={skillInfoKey}
            item>
            <SkillBlock {...skills} />
          </Grid>,
        )}
      </Grid>
    </div>
  </Fragment>
}

export default SkillGrid