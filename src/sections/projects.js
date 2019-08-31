import React, { Fragment } from "react"
import {
  Paper, Typography, Grid,
  Container, Card, CardHeader,
  CardMedia, CardContent, CardActionArea,
  CardActions, Hidden
} from "@material-ui/core"
import { makeStyles } from '@material-ui/styles'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import GitHubIcon from "../components/custom_icons/github"

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(135deg, rgba(47, 47, 47, 0.08) 0%, rgba(47, 47, 47, 0.08) 90%,rgba(75, 75, 75, 0.08) 90%, rgba(75, 75, 75, 0.08) 100%),linear-gradient(45deg, rgba(172, 172, 172, 0.1) 0%, rgba(172, 172, 172, 0.1) 65%,rgba(18, 18, 18, 0.1) 65%, rgba(18, 18, 18, 0.1) 100%),linear-gradient(90deg, rgba(157, 157, 157, 0.04) 0%, rgba(157, 157, 157, 0.04) 83%,rgba(198, 198, 198, 0.04) 83%, rgba(198, 198, 198, 0.04) 100%),linear-gradient(0deg, rgba(189, 189, 189, 0.07) 0%, rgba(189, 189, 189, 0.07) 22%,rgba(127, 127, 127, 0.07) 22%, rgba(127, 127, 127, 0.07) 100%),linear-gradient(0deg, rgba(79, 79, 79, 0.03) 0%, rgba(79, 79, 79, 0.03) 34%,rgba(96, 96, 96, 0.03) 34%, rgba(96, 96, 96, 0.03) 100%),linear-gradient(135deg, rgba(54, 54, 54, 0.05) 0%, rgba(54, 54, 54, 0.05) 68%,rgba(192, 192, 192, 0.05) 68%, rgba(192, 192, 192, 0.05) 100%),linear-gradient(0deg, rgba(62, 62, 62, 0.08) 0%, rgba(62, 62, 62, 0.08) 99%,rgba(114, 114, 114, 0.08) 99%, rgba(114, 114, 114, 0.08) 100%),linear-gradient(0deg, rgba(227, 227, 227, 0.07) 0%, rgba(227, 227, 227, 0.07) 83%,rgba(129, 129, 129, 0.07) 83%, rgba(129, 129, 129, 0.07) 100%),linear-gradient(45deg, rgba(27, 27, 27, 0.1) 0%, rgba(27, 27, 27, 0.1) 27%,rgba(58, 58, 58, 0.1) 27%, rgba(58, 58, 58, 0.1) 100%),linear-gradient(90deg, rgb(0, 0, 0),rgb(0, 0, 0))',
    color: 'white',
    marginTop: 5,
    minHeight: '93vh'
  },
  title: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  cardContainer: {
    margin: 50,
    height: 200,
    display: 'flex',
    background: '#303030',
    color: 'white',
    transition: "0.1s",
    '&:hover': {
      boxShadow: '0 0.3em 2em black',
      transform: 'translateY(-0.75em)',
    },
  },
  cardContent: {
    width: '40%'
  },
  cardMedia: {
    width: '40%',
    margin: 10,
  },
  cardActions: {
    width: '20%',
    position: 'relative'
  },
  cardAction: {
    width: '20%'
  },
  cardActionIcon: {
    margin: 'auto'
  },
  avatar: {
    backgroundColor: 'black',
  },
});

// TODO: Add projects here.
const projects = {
  project1: {
    title: 'Gatsby',
    description: 'Gatsby project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
    imageSource: require('../images/gatsby-icon.png'),
    imageTitle: 'Gatsby',
  },
  project2: {
    title: 'Gatsby',
    description: 'Gatsby project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
    imageSource: require('../images/gatsby-astronaut.png'),
    imageTitle: 'Gatsby',
  },
  project3: {
    title: 'Gatsby',
    description: 'Gatsby project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
    imageSource: require('../images/gatsby-icon.png'),
    imageTitle: 'Gatsby',
  },
  project4: {
    title: 'Gatsby',
    description: 'Gatsby project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
    imageSource: require('../images/gatsby-astronaut.png'),
    imageTitle: 'Gatsby',
  }
}

function Projects(props) {
  const classes = useStyles();

  return <Fragment>
    <Paper id={props.id} className={classes.root}>
      <Typography className={classes.title} align="center" variant="h3">
        Projects
      </Typography>
      <Hidden xsDown={true}>
        <Grid
        container
        justify="center"
        alignItems="center">
        {Object.entries(projects).map(([key, value]) =>
          <Grid key={key} lg={4} item>
            <Card className={classes.cardContainer}>
              <CardContent className={classes.cardContent}>
                <Typography variant='h6'>
                  {value.title}
                </Typography>
                <Typography variant='body1'>
                  {value.description}
                </Typography>
              </CardContent>
              <CardMedia
                className={classes.cardMedia}
                image={value.imageSource}
                title='TEST!'>
              </CardMedia>
            </Card>
          </Grid>
        )}
      </Grid>
      </Hidden>
      <Typography align='center' variant='body2'>
        Projects above are blah blah blah...
      </Typography>
    </Paper>
  </Fragment>
}

export default Projects