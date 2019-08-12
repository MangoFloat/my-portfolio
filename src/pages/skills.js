import React, { Fragment } from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'

import Skills from '../components/skills'
import '../css/main.css'

class IndexPage extends React.Component {
  render() {
    return <Fragment>
      <Header CurrentPage='skills'/>
      <Skills/>
      <Footer/>
    </Fragment>
  }

}

export default IndexPage