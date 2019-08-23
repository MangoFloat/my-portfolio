import React, { Fragment } from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'

import About from '../components/about'
import Projects from '../components/projects'
import Skills from '../components/skills'

import '../css/main.css'

class IndexPage extends React.Component {
  render() {
    return <Fragment>
      <Header/>
      <About id='home'/>
      <Projects id='projects'/>
      <Skills id='skills'/>
      <Footer/>
    </Fragment>
  }

}

export default IndexPage