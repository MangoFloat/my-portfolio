import React, { Fragment } from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'

import Projects from '../components/projects'
import '../css/main.css'

class IndexPage extends React.Component {
  render() {
    return <Fragment>
      <Header CurrentPage='projects'/>
      <Projects/>
      <Footer/>
    </Fragment>
  }

}

export default IndexPage