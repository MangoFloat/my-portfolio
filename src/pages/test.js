import React, { Component, Fragment } from "react"
import Header from "../components/layouts/Header"
import Footer from "../components/layouts/Footer"
import Index from "../components/exercises/index"

class Test extends Component {
  render() {
    return <Fragment>
      <Header/>
      <Index/>
      <Footer/>
    </Fragment>
  }

}

export default Test