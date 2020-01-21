import React from "react"
import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

import { Helmet } from "react-helmet"

import SideNavBar from "../components/SideNavBar"
import About from "../sections/about"
import Projects from "../sections/projects"
import Skills from "../sections/skills"

import Favicon from "../images/favicon.ico"

export default function IndexPage() {
  function getTheme(type) {
    return {
      palette: {
        primary: {
          light: "#494949",
          main: "#313131",
          dark: "#171717",
          contrastText: "#fff",
        },
        background: {
          default: type == "dark" ? "#0e0e0e" : "#f9f9f9",
          paper: type == "dark" ? "#313131" : "#f9f9f9",
        },
        type: type,
      },
    }
  }

  const [theme, setTheme] = React.useState(getTheme("dark"))

  const toggleTheme = () => {
    let newPaletteType = theme.palette.type == "light" ? "dark" : "light"
    let newTheme = getTheme(newPaletteType)
    newTheme.palette.type = newPaletteType
    setTheme(newTheme)
  }

  const muiTheme = createMuiTheme(theme)

  return (
    <ThemeProvider theme={muiTheme}>
      <Helmet>
        <html lang='en'/>
        <title>June Jaictin | Software Developer</title>
        <meta property="description" content="June Jaictin's Portfolio" />
        <meta name="author" content="June Jaictin" />
        <link rel="icon" href={Favicon} type="image/x-icon" />
        <link rel="canonical" href="https://www.junejaictin.com/" />
      </Helmet>
      <CssBaseline/>
      <SideNavBar onToggleTheme={toggleTheme}/>
      <About id='about'/>
      <Projects id='projects'/>
      <Skills id='skills'/>
    </ThemeProvider>
  )
}