import React, { Fragment } from 'react'
import {
  Typography, Card, Grid
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import GetSkills from '../components/info_objects/skills'
import BackgroundImageDark from '../images/backgrounds/background2.webp'
import BackgroundImageLight from '../images/backgrounds/background3.webp'
import testImg from '../images/backgrounds/background15.png';
import testImg2 from '../images/backgrounds/background16.png';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: 165
    },
    margin: 'auto',
    paddingBottom: 15,
    backgroundImage: theme.palette.type == 'dark' ? `url(${BackgroundImageDark})` : `url(${BackgroundImageLight})`,
  },
  title: {
    backgroundColor: theme.palette.type == 'dark' ? '#121212' : '#eeeeee',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottom: '1px solid ' + (theme.palette.type == 'dark' ? '#eeeeee' : '#121212'),
    borderTop: '1px solid ' + (theme.palette.type == 'dark' ? '#eeeeee' : '#121212'),
  },
  skillsContainer: {
    backgroundImage: `url(${testImg})`,
    margin: 20,
    marginTop: 20,
    padding: 15,
    marginBottom: 0,
    transition: '0.3s',
  },
  skillsCategory: {
    paddingLeft: 0
  },
  grid: {
    marginTop: 10,
  },
  skill: {
    minWidth: 130,
    height: 100,
    margin: 7,
    paddingBottom: 10,
    transition: "0.1s",
    backgroundImage: `url(${testImg2})`,
    '&:hover': {
      boxShadow: '0 0.1em 0.75em black',
      transform: 'translateY(-0.25em)',
    },
  },
  skillIcon: {
    display: 'block',
    margin: 'auto',
  }
}));

function Skills(props) {
  const classes = useStyles();
  const allSkills = GetSkills();

  return <Fragment>
    <div
      id='skills'
      className={classes.root}>
      <Typography
        className={classes.title}
        align='center'
        variant='h2'
        noWrap={true}>
        Skills
      </Typography>
      {Object.entries(allSkills).map(([skill, skillInfo]) =>
        <Card
          key={skill}
          raised={true}
          className={classes.skillsContainer}>
          <Typography
            className={classes.skillsCategory}
            align='center'
            variant='h4'>
            {skillInfo.title}
          </Typography>
          <hr/>
          <Grid
            className={classes.grid}
            justify='center'
            alignContent='flex-start'
            container>
            {Object.entries(skillInfo.skills).map(([skillInfoKey, skills]) =>
              <Grid
                key={skillInfoKey}
                item>
                <Card
                  className={classes.skill}
                  raised={true}>
                  <Typography
                    align='center'
                    variant='h6'>
                    {skills.title}
                  </Typography>
                  <hr/>
                  <img
                    className={classes.skillIcon}
                    width={50}
                    src={skills.icon}
                    alt={skills.iconAlt}/>
                </Card>
              </Grid>
            )}
          </Grid>
        </Card>
      )}
    </div>
  </Fragment>
}

export default Skills