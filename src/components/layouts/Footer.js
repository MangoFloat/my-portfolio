import React, { Fragment } from 'react'
import {
  Paper, Grid, Link,
  Typography, Tooltip
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import OpenIcon from '@material-ui/icons/Launch'
import Contacts from '../contacts'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.09) 0%, rgba(0, 0, 0, 0.09) 45%,rgba(29, 29, 29, 0.09) 45%, rgba(29, 29, 29, 0.09) 100%),linear-gradient(45deg, rgba(239, 239, 239, 0.07) 0%, rgba(239, 239, 239, 0.07) 41%,rgba(19, 19, 19, 0.07) 41%, rgba(19, 19, 19, 0.07) 100%),linear-gradient(135deg, rgba(12, 12, 12, 0.08) 0%, rgba(12, 12, 12, 0.08) 40%,rgba(153, 153, 153, 0.08) 40%, rgba(153, 153, 153, 0.08) 100%),linear-gradient(45deg, rgba(2, 2, 2, 0.02) 0%, rgba(2, 2, 2, 0.02) 74%,rgba(113, 113, 113, 0.02) 74%, rgba(113, 113, 113, 0.02) 100%),linear-gradient(90deg, rgba(132, 132, 132, 0.03) 0%, rgba(132, 132, 132, 0.03) 22%,rgba(39, 39, 39, 0.03) 22%, rgba(39, 39, 39, 0.03) 100%),linear-gradient(45deg, rgba(34, 34, 34, 0.03) 0%, rgba(34, 34, 34, 0.03) 76%,rgba(98, 98, 98, 0.03) 76%, rgba(98, 98, 98, 0.03) 100%),linear-gradient(90deg, rgb(61, 61, 61),rgb(72, 72, 72))',
    marginTop: 5,
    color: 'white',
    paddingTop: 15,
    paddingBottom: 15
  },
  openLink: {
    color: 'white',
    padding: 15,
  }
});

function Footer(props) {
  const classes = useStyles();
  const contacts = Contacts();

  return <Fragment>
    <Paper className={classes.root}>
      <Grid container
            justify='space-evenly'
            alignItems='center'>
        {Object.entries(contacts).map(([key, value]) =>
          <Grid item>
            <Tooltip className={classes.openLink} title={value.launchTooltip}>
              <Link href={value.link}>
                {value.icon}
              </Link>
            </Tooltip>
          </Grid>
          )}
      </Grid>
    </Paper>
  </Fragment>
}

export default Footer