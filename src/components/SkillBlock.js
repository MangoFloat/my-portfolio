import React, { Fragment } from "react"
import { Card, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles/index"

import backgroundImage from "../images/backgrounds/background16.png"

const useStyles = makeStyles(theme => ({
  skill: {
    minWidth: 130,
    height: 100,
    margin: 7,
    paddingBottom: 10,
    transition: "0.1s",
    backgroundImage: `url(${backgroundImage})`,
    "&:hover": {
      boxShadow: "0 0.1em 0.75em black",
      transform: "translateY(-0.25em)",
    },
  },
  skillIcon: {
    display: "block",
    margin: "auto",
  },
}))

function SkillBlock(props) {
  const classes = useStyles()

  return <Fragment>
    <Card
      className={classes.skill}
      raised={true}>
      <Typography
        align='center'
        variant='h6'>
        {props.title}
      </Typography>
      <hr/>
      <img
        className={classes.skillIcon}
        width={50}
        src={props.icon}
        alt={props.iconAlt}/>
    </Card>
  </Fragment>
}

export default SkillBlock