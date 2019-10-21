import React, { Fragment } from "react"
import {
  Card, CardContent, Typography,
  CardActions, Button, CardMedia,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles/index"
import backgroundImg from "../images/backgrounds/background16.png"
import GitHubIcon from "../components/custom_icons/github"
import ArrowTooltip from "../components/ArrowTooltip"
import { RemoveRedEyeOutlined } from "@material-ui/icons" // TODO: Add screenshots to this project

const useStyles = makeStyles(theme => ({
  cardContainer: {
    margin: 15,
    minHeight: 200,
    display: "flex",
    backgroundImage: `url(${backgroundImg})`,
    transition: "0.1s",
    "&:hover": {
      boxShadow: "0 0.1em 0.75em black",
      transform: "translateY(-0.25em)",
    },
  },
  cardContent: {
    width: "60%",
  },
  projectDescription: {
    height: 100,
    overflowY: "auto",
  },
  cardMedia: {
    width: "40%",
    marginLeft: 10,
  },
}))

function ProjectBlock(props) {
  const classes = useStyles()

  return <Fragment>
    <Card
      className={classes.cardContainer}>
      <CardContent className={classes.cardContent}>
        <Typography
          variant='h6'>
          {props.title}
        </Typography>
        <Typography
          className={classes.projectDescription}
          variant='body1'>
          {props.description}
        </Typography>
        <CardActions>
          <ArrowTooltip title='See code on GitHub'>
            <Button
              variant='outlined'
              target='_blank'
              href={props.gitHubLink}>
              <GitHubIcon/>
            </Button>
          </ArrowTooltip>
        </CardActions>
      </CardContent>
      <CardMedia
        className={classes.cardMedia}
        image={props.imageSource}
        title={props.imageTitle}>
      </CardMedia>
    </Card>
  </Fragment>
}

export default ProjectBlock