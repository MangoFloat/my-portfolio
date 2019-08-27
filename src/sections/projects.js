import React, { Fragment } from "react"
import {
  Paper, Typography, Grid,
  Container, Card, CardHeader,
  CardMedia, CardContent, Avatar,
  IconButton
} from "@material-ui/core"
import { makeStyles } from '@material-ui/styles'
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(50deg, rgba(146, 146, 146, 0.02) 0%, rgba(146, 146, 146, 0.02) 25%,rgba(82, 82, 82, 0.02) 25%, rgba(82, 82, 82, 0.02) 50%,rgba(217, 217, 217, 0.02) 50%, rgba(217, 217, 217, 0.02) 75%,rgba(41, 41, 41, 0.02) 75%, rgba(41, 41, 41, 0.02) 100%),linear-gradient(252deg, rgba(126, 126, 126, 0.01) 0%, rgba(126, 126, 126, 0.01) 25%,rgba(117, 117, 117, 0.01) 25%, rgba(117, 117, 117, 0.01) 50%,rgba(219, 219, 219, 0.01) 50%, rgba(219, 219, 219, 0.01) 75%,rgba(41, 41, 41, 0.01) 75%, rgba(41, 41, 41, 0.01) 100%),linear-gradient(272deg, rgba(166, 166, 166, 0.01) 0%, rgba(166, 166, 166, 0.01) 20%,rgba(187, 187, 187, 0.01) 20%, rgba(187, 187, 187, 0.01) 40%,rgba(238, 238, 238, 0.01) 40%, rgba(238, 238, 238, 0.01) 60%,rgba(204, 204, 204, 0.01) 60%, rgba(204, 204, 204, 0.01) 80%,rgba(5, 5, 5, 0.01) 80%, rgba(5, 5, 5, 0.01) 100%),linear-gradient(86deg, rgba(143, 143, 143, 0.02) 0%, rgba(143, 143, 143, 0.02) 12.5%,rgba(36, 36, 36, 0.02) 12.5%, rgba(36, 36, 36, 0.02) 25%,rgba(23, 23, 23, 0.02) 25%, rgba(23, 23, 23, 0.02) 37.5%,rgba(223, 223, 223, 0.02) 37.5%, rgba(223, 223, 223, 0.02) 50%,rgba(101, 101, 101, 0.02) 50%, rgba(101, 101, 101, 0.02) 62.5%,rgba(94, 94, 94, 0.02) 62.5%, rgba(94, 94, 94, 0.02) 75%,rgba(148, 148, 148, 0.02) 75%, rgba(148, 148, 148, 0.02) 87.5%,rgba(107, 107, 107, 0.02) 87.5%, rgba(107, 107, 107, 0.02) 100%),linear-gradient(25deg, rgba(2, 2, 2, 0.02) 0%, rgba(2, 2, 2, 0.02) 16.667%,rgba(51, 51, 51, 0.02) 16.667%, rgba(51, 51, 51, 0.02) 33.334%,rgba(26, 26, 26, 0.02) 33.334%, rgba(26, 26, 26, 0.02) 50.001000000000005%,rgba(238, 238, 238, 0.02) 50.001%, rgba(238, 238, 238, 0.02) 66.668%,rgba(128, 128, 128, 0.02) 66.668%, rgba(128, 128, 128, 0.02) 83.33500000000001%,rgba(21, 21, 21, 0.02) 83.335%, rgba(21, 21, 21, 0.02) 100.002%),linear-gradient(325deg, rgba(95, 95, 95, 0.03) 0%, rgba(95, 95, 95, 0.03) 14.286%,rgba(68, 68, 68, 0.03) 14.286%, rgba(68, 68, 68, 0.03) 28.572%,rgba(194, 194, 194, 0.03) 28.572%, rgba(194, 194, 194, 0.03) 42.858%,rgba(51, 51, 51, 0.03) 42.858%, rgba(51, 51, 51, 0.03) 57.144%,rgba(110, 110, 110, 0.03) 57.144%, rgba(110, 110, 110, 0.03) 71.42999999999999%,rgba(64, 64, 64, 0.03) 71.43%, rgba(64, 64, 64, 0.03) 85.71600000000001%,rgba(31, 31, 31, 0.03) 85.716%, rgba(31, 31, 31, 0.03) 100.002%),linear-gradient(90deg, hsl(80,0%,14%),hsl(80,0%,14%))',
    color: 'white',
    marginTop: 5
  },
  title: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  avatar: {
    backgroundColor: 'black',
  },
});

// TODO: Add projects here.
const projects = {
  project1: {
    title: 'Gatsby',
    description: 'Gatsby project',
    imageSource: require('../images/gatsby-astronaut.png'),
    imageTitle: 'Gatsby',
  }
}

function Projects(props) {
  const classes = useStyles();

  return <Fragment>
    <Paper id={props.id} className={classes.root}>
      <Typography className={classes.title} align="center" variant="h5">
        Projects
      </Typography>
      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={1}>
        {Object.values(projects).map((project) =>
          <Grid lg={2} item>
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar className={classes.avatar}>
                    K
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon/>
                  </IconButton>
                }
                title='Project 1'>
              </CardHeader>
              <CardMedia
                className={classes.media}
                image={project.imageSource}
                title={project.imageTitle}>
              </CardMedia>
              <CardContent>
                <Typography variant='h5' gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant='body1'>
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
      <Typography align='center' variant='body2'>
        Projects above are blah blah blah...
      </Typography>
    </Paper>
  </Fragment>
}

export default Projects