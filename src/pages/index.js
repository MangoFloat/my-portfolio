import React, { Fragment } from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'

import Home from '../sections/home'
import About from '../sections/about'
import Projects from '../sections/projects'
import Skills from '../sections/skills'

import '../css/main.css'

class IndexPage extends React.Component {
  render() {
    return <Fragment>
      <Header/>
      <Home id='home'/>
      <About id='about'/>
      <Projects id='projects'/>
      <Skills id='skills'/>
      <Footer/>
    </Fragment>
  }

}

export default IndexPage