import React, { Fragment } from 'react'
import { Button } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from "@material-ui/core/CssBaseline";

import { grey } from '@material-ui/core/colors'

import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import About from '../sections/about'
import Projects from '../sections/projects'
import Skills from '../sections/skills'

export default function IndexPage() {
  let theme = createMuiTheme({
    palette: {
      primary: {
        light: '#6a6a6a',
        main: '#131313',
        dark: '#0b0b0b',
        contrastText: '#fff',
      },
      background: {
      },
      type: 'dark'
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header/>
      <About id='about'/>
      <Projects id='projects'/>
      <Skills id='skills'/>
    </ThemeProvider>
  )
}