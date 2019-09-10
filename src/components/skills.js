export default function Skills(props){
  console.log({
    skillProps: props
  });
  return {
    languages: {
      title: 'Languages',
      description: '',
      skills: {
        cSharp: {
          title: 'C#',
          icon: require('../images/c#-logo.webp'),
          iconAlt: require('../images/c#-logo.svg'),
          note: ''
        },
        javascript: {
          title: 'Javascript',
          icon: require('../images/javascript-logo.webp'), // https://www.iconfinder.com/Sennerstad
          iconAlt: require('../images/javascript-logo.svg'),
          note: ''
        },
        html5: {
          title: 'HTML5',
          icon: require('../images/html5-logo.webp'),
          iconAlt: require('../images/html5-logo.svg'),
          note: ''
        },
        css3: {
          title: 'CSS3',
          icon: require('../images/css3-logo.webp'),
          iconAlt: require('../images/css3-logo.svg'),
          note: ''
        }
      }
    },
    jsFrameworks: {
      title: 'Javascript Frameworks',
      description: 'Javascript frameworks',
      skills: {
        angularJS: {
          title: 'AngularJS',
          icon: require('../images/angular-logo.webp'),
          iconAlt: require('../images/angular-logo.svg'),
          note: ''
        },
        react: {
          title: 'React',
          icon: require('../images/react-logo.webp'),
          iconAlt: require('../images/react-logo.svg'),
          note: ''
        }
      }
    },
    cssFrameworks: {
      title: 'CSS Frameworks',
      description: 'CSS frameworks',
      skills: {
        bootstrap: {
          title: 'Bootstrap',
          icon: require('../images/bootstrap-logo.webp'),
          iconAlt: require('../images/bootstrap-logo.svg'),
          note: ''
        },
        materialUI: {
          title: 'Material UI',
          icon: require('../images/material-ui-logo.webp'),
          iconAlt: require('../images/material-ui-logo.svg'),
          note: ''
        }
      }
    },
    tools: {
      title: 'Tools',
      description: 'Tools',
      skills: {
        nodeJs: { // TODO: Handle light theme 🤮
          title: 'NodeJs',
          icon: require('../images/nodejs-logo.png'),
          iconAlt: '',
          note: ''
        }
      }
    },
    other: {
      title: 'Other',
      description: '',
      skills: {

      }
    }
  }
}