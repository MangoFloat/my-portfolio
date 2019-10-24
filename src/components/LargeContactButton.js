import React, { Fragment } from "react"
import {
  Paper, SvgIcon, Typography,
  Button,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles/index"
import backgroundImage from "../images/backgrounds/background16.png"

const useStyles = makeStyles(theme => ({
  contactContainer: {
    minWidth: 300,
  },
  contactPaper: {
    marginTop: 15,
    backgroundImage: `url(${backgroundImage})`,
    "&:hover": {
      boxShadow: "0 0.1em 0.75em black",
      transform: "translateY(-0.25em)",
    },
    transition: "0.1s",
  },
  contactButtonIcon: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  contactButtonLink: {
    minWidth: "100%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 0,
    marginBottom: 0,
    borderRadius: "4px 4px 0 0",
  },
}))

function LargeContactButton(props) {
  const classes = useStyles()

  return <Fragment>
    <Paper
      className={classes.contactPaper}
      elevation={5}>
      <Button
        aria-label={props.name}
        className={classes.contactButtonLink}
        fullWidth={true}
        href={props.link}
        target='_blank'>
        <SvgIcon
          className={classes.contactButtonIcon}
          fontSize='large'>
          {props.icon}
        </SvgIcon>
        <Typography
          variant='h6'
          align='center'
          style={{ textTransform: "none" }}>
          {props.name}
        </Typography>
      </Button>
      <hr style={{ marginTop: 0, marginBottom: 0 }}/>
      <Typography
        variant='body1'
        align='center'>
        {props.title}
      </Typography>
    </Paper>
  </Fragment>
}

export default LargeContactButton