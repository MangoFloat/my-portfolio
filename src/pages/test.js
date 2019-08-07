import React, { Fragment } from "react"
import Header from "../components/layouts/Header"
import Footer from "../components/layouts/Footer"

import TicTacToe from "../components/tic-tac-toe"

class Test extends React.Component {
  render() {
    return <Fragment>
      <Header/>
      <TicTacToe/>

      <Footer/>
    </Fragment>
  }

}

export default Test