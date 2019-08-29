import React, { Fragment } from 'react'
import makeStyles from '@material-ui/styles/makeStyles'

import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'

import Home from '../sections/home'
import About from '../sections/about'
import Projects from '../sections/projects'
import Skills from '../sections/skills'

import '../css/main.css'

const useStyles = makeStyles({
  root: {
    overflowX: 'hidden'
  }
})

export default function IndexPage() {
  const classes = useStyles();

  return <div className={classes.root}>
    <Header/>
    <Home id='home'/>
    <About id='about'/>
    <Projects id='projects'/>
    <Skills id='skills'/>
    <Footer/>
  </div>
}