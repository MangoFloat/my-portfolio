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
import BackgroundImage from '../images/background2.png';
import testImg from '../images/background10.png';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: 165
    },
    margin: 'auto',
    backgroundImage: `url(${BackgroundImage})`
  },
  title: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottom: '5px solid',
    borderTop: '5px solid',
  },
  cardContainer: {
    margin: 50,
    height: 200,
    display: 'flex',
    backgroundImage: `url(${testImg})`,
    transition: "0.1s",
    '&:hover': {
      boxShadow: '0 0.1em 0.75em black',
      transform: 'translateY(-0.25em)',
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
}));

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
  },
  project5: {
    title: 'Gatsby',
    description: 'Gatsby project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
    imageSource: require('../images/gatsby-astronaut.png'),
    imageTitle: 'Gatsby',
  }
}

function Projects(props) {
  const classes = useStyles();

  return <Fragment>
    <div id='projects' className={classes.root}>
      <Typography className={classes.title} align="center" variant="h2">
        Projects
      </Typography>
        <Grid
        container
        justify='center'
        alignItems='center'>
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
    </div>
  </Fragment>
}

export default Projects