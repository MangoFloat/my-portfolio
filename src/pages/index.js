import React from "react"
import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

import { Helmet } from "react-helmet"

import SideNavBar from "../components/layouts/SideNavBar"
import About from "../sections/about"
import Projects from "../sections/projects"
import Skills from "../sections/skills"

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
      <Helmet
        title='June Jaictin | Full Stack Developer'
        meta={[
          { name: "description", content: "June Jaictin's Portfolio" },
          { name: "charset", content: "utf-8" },
        ]}>
        <html lang='en'/>
      </Helmet>
      <CssBaseline/>
      <SideNavBar onToggleTheme={toggleTheme}/>
      <About id='about'/>
      <Projects id='projects'/>
      <Skills id='skills'/>
    </ThemeProvider>
  )
}