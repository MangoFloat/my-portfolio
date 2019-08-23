import React, { Fragment } from "react"
import Header from "../components/layouts/Header"
import Footer from "../components/layouts/Footer"

class PageNotFound extends React.Component {
  render() {
    return <Fragment>
      <Header />
        <div>
          Page not found
        </div>
      <Footer/>
    </Fragment>
  }

}

export default PageNotFound