import React, { Fragment } from "react"
import {
  Typography, Grid, Card,
  CardMedia, CardContent, CardActions,
  Button, Tooltip,
} from "@material-ui/core"
import { makeStyles } from '@material-ui/styles'
import { RemoveRedEyeOutlined }from '@material-ui/icons'

import GitHubIcon from "../components/custom_icons/github"
import BackgroundImageDark from '../images/backgrounds/background2.webp'
import BackgroundImageLight from '../images/backgrounds/background3.webp'
import GetProjects from '../components/projects';
import testImg from '../images/backgrounds/background16.png';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: 165
    },
    margin: 'auto',
    backgroundImage: theme.palette.type == 'dark' ? `url(${BackgroundImageDark})` : `url(${BackgroundImageLight})`,
  },
  title: {
    backgroundColor: theme.palette.type == 'dark' ? '#121212' : '#eeeeee',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottom: '1px solid ' + (theme.palette.type == 'dark' ? '#eeeeee' : '#121212'),
    borderTop: '1px solid ' + (theme.palette.type == 'dark' ? '#eeeeee' : '#121212'),
  },
  cardContainer: {
    margin: 15,
    minHeight: 200,
    display: 'flex',
    backgroundImage: `url(${testImg})`,
    transition: '0.1s',
    '&:hover': {
      boxShadow: '0 0.1em 0.75em black',
      transform: 'translateY(-0.25em)',
    },
  },
  cardContent: {
    width: '60%'
  },
  projectDescription: {
    height: 100,
    overflowY: 'auto'
  },
  cardMedia: {
    width: '40%',
    marginLeft: 10
  },
  cardActions: {
    display: 'block',
    height: '100%'
  },
  avatar: {
    backgroundColor: 'black',
  },
}));

function Projects(props) {
  const classes = useStyles();
  const projects = GetProjects();

  return <Fragment>
    <div id='projects' className={classes.root}>
      <Typography
        className={classes.title}
        align="center"
        variant="h2"
        noWrap={true}>
        Projects
      </Typography>
        <Grid
        container
        justify='center'
        alignItems='center'>
        {Object.entries(projects).map(([key, value]) =>
          <Grid
            key={key}
            lg={5}
            item>
            <Card
              className={classes.cardContainer}>
              <CardContent className={classes.cardContent}>
                <Typography
                  variant='h6'>
                  {value.title}
                </Typography>
                <Typography
                  className={classes.projectDescription}
                  variant='body1'>
                  {value.description}
                </Typography>
                <CardActions>
                  {/*<Tooltip title='See more screenshots of the project'>*/}
                    {/*<Button*/}
                      {/*variant='outlined'*/}
                      {/*target='_blank'>*/}
                      {/*<RemoveRedEyeOutlined/>*/}
                    {/*</Button>*/}
                  {/*</Tooltip>*/}
                  <Tooltip title='See code on GitHub'>
                    <Button
                      variant='outlined'
                      target='_blank'
                      href={value.gitHubLink}>
                      <GitHubIcon/>
                    </Button>
                  </Tooltip>
                </CardActions>
              </CardContent>
              <CardMedia
                className={classes.cardMedia}
                image={value.imageSource}
                title={value.imageTitle}>
              </CardMedia>
            </Card>
          </Grid>
        )}
      </Grid>
    </div>
  </Fragment>
}

export default Projects