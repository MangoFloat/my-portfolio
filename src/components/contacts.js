import React from 'react'
import GitHubIcon from "./custom_icons/github"
import LinkedInIcon from "./custom_icons/linkedIn"
import MailIcon from '@material-ui/icons/Mail'

function EmailIcon(props) {
  return <MailIcon {...props}/>
}

export default function Contacts(props){
  return {
    email: {
      title: 'jaictinjune@gmail.com',
      link: 'mailto:jaictinjune@gmail.com',
      launchTooltip: 'Open default email client',
      icon: EmailIcon(props)
    },
    linkedIn: {
      title: 'https://www.linkedin.com/in/junejaictin',
      link: 'https://www.linkedin.com/in/junejaictin',
      launchTooltip: 'Open LinkedIn',
      icon: LinkedInIcon(props)
    },
    gitHub: {
      title: 'https://github.com/MangoFloat',
      link: 'https://github.com/MangoFloat',
      launchTooltip: 'Open GitHub',
      icon: GitHubIcon(props)
    }
  }
}