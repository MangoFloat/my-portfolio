import React, { Fragment } from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'

import Contact from '../components/contact'

import '../css/main.css'

class IndexPage extends React.Component {
  render() {
    return <Fragment>
      <Header CurrentPage='contacts'/>
      <Contact/>
      <Footer/>
    </Fragment>
  }

}

export default IndexPage