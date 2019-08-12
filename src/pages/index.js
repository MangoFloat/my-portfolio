import React, { Fragment } from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'

import Home from '../components/home'
import '../css/main.css'

class IndexPage extends React.Component {
  render() {
    return <Fragment>
      <Header CurrentPage='home'/>
      <Home/>
      <Footer/>
    </Fragment>
  }

}

export default IndexPage