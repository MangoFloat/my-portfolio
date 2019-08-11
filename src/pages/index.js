import React, { Fragment } from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'

import Home from '../components/home'
import Skills from '../components/skills'
import Projects from '../components/projects'
import Contact from '../components/contact'

import '../css/main.css'

class IndexPage extends React.Component {
  render() {
    return <Fragment>
      <Header/>
      <Home/>
      <Footer/>
    </Fragment>
  }

}

export default IndexPage