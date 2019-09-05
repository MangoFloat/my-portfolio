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
    background: 'linear-gradient(52deg, rgba(163, 163, 163, 0.09) 0%, rgba(163, 163, 163, 0.09) 33.3%,rgba(100, 100, 100, 0.09) 33.3%, rgba(100, 100, 100, 0.09) 66.6%,rgba(162, 162, 162, 0.09) 66.6%, rgba(162, 162, 162, 0.09) 99%),linear-gradient(258deg, rgba(193, 193, 193, 0.06) 0%, rgba(193, 193, 193, 0.06) 33.3%,rgba(169, 169, 169, 0.06) 33.3%, rgba(169, 169, 169, 0.06) 66.6%,rgba(92, 92, 92, 0.06) 66.6%, rgba(92, 92, 92, 0.06) 99%),linear-gradient(129deg, rgba(45, 45, 45, 0.03) 0%, rgba(45, 45, 45, 0.03) 33.3%,rgba(223, 223, 223, 0.03) 33.3%, rgba(223, 223, 223, 0.03) 66.6%,rgba(173, 173, 173, 0.03) 66.6%, rgba(173, 173, 173, 0.03) 99%),linear-gradient(280deg, rgba(226, 226, 226, 0.06) 0%, rgba(226, 226, 226, 0.06) 33.3%,rgba(81, 81, 81, 0.06) 33.3%, rgba(81, 81, 81, 0.06) 66.6%,rgba(186, 186, 186, 0.06) 66.6%, rgba(186, 186, 186, 0.06) 99%),linear-gradient(85deg, rgba(225, 225, 225, 0.04) 0%, rgba(225, 225, 225, 0.04) 33.3%,rgba(95, 95, 95, 0.04) 33.3%, rgba(95, 95, 95, 0.04) 66.6%,rgba(39, 39, 39, 0.04) 66.6%, rgba(39, 39, 39, 0.04) 99%),linear-gradient(128deg, rgba(184, 184, 184, 0.06) 0%, rgba(184, 184, 184, 0.06) 33.3%,rgba(0, 0, 0, 0.06) 33.3%, rgba(0, 0, 0, 0.06) 66.6%,rgba(140, 140, 140, 0.06) 66.6%, rgba(140, 140, 140, 0.06) 99.89999999999999%),linear-gradient(323deg, rgba(40, 40, 40, 0.07) 0%, rgba(40, 40, 40, 0.07) 33.3%,rgba(214, 214, 214, 0.07) 33.3%, rgba(214, 214, 214, 0.07) 66.6%,rgba(190, 190, 190, 0.07) 66.6%, rgba(190, 190, 190, 0.07) 99.89999999999999%),linear-gradient(61deg, rgba(230, 230, 230, 0) 0%, rgba(230, 230, 230, 0) 33.3%,rgba(241, 241, 241, 0) 33.3%, rgba(241, 241, 241, 0) 66.6%,rgba(55, 55, 55, 0) 66.6%, rgba(55, 55, 55, 0) 99%),linear-gradient(0deg, #0a0a0a,#121212)',
    color: 'white',
    marginTop: 15,
    marginLeft: 165,
    margin: 'auto'
  },
  title: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  cardContainer: {
    margin: 50,
    height: 200,
    display: 'flex',
    background: '#2c2c2c',
    color: 'white',
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
    <Paper id='projects' className={classes.root}>
      <Typography className={classes.title} align="center" variant="h3">
        Projects
      </Typography>
      <hr/>
      <Hidden xsDown={true}>
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
      </Hidden>
    </Paper>
  </Fragment>
}

export default Projects