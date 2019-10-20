export default function Skills(props) {
  return {
    languages: {
      title: "Languages",
      description: "",
      skills: {
        cSharp: {
          title: "C#",
          icon: require("../../images/logos/c#-logo.webp"),
          iconAlt: "C#",
          note: "",
        },
        javascript: {
          title: "Javascript",
          icon: require("../../images/logos/javascript-logo.webp"), // https://www.iconfinder.com/Sennerstad
          iconAlt: require("../../images/logos/javascript-logo.svg"),
          note: "",
        },
        html5: {
          title: "HTML5",
          icon: require("../../images/logos/html5-logo.webp"),
          iconAlt: require("../../images/logos/html5-logo.svg"),
          note: "",
        },
        css3: {
          title: "CSS3",
          icon: require("../../images/logos/css3-logo.webp"),
          iconAlt: require("../../images/logos/css3-logo.svg"),
          note: "",
        },
      },
    },
    jsFrameworks: {
      title: "Javascript Frameworks",
      description: "Javascript frameworks",
      skills: {
        angularJS: {
          title: "AngularJS",
          icon: require("../../images/logos/angular-logo.webp"),
          iconAlt: require("../../images/logos/angular-logo.svg"),
          note: "",
        },
        react: {
          title: "React",
          icon: require("../../images/logos/react-logo.webp"),
          iconAlt: require("../../images/logos/react-logo.svg"),
          note: "",
        },
      },
    },
    cssFrameworks: {
      title: "CSS Frameworks",
      description: "CSS frameworks",
      skills: {
        bootstrap: {
          title: "Bootstrap",
          icon: require("../../images/logos/bootstrap-logo.webp"),
          iconAlt: require("../../images/logos/bootstrap-logo.svg"),
          note: "",
        },
        materialUI: {
          title: "Material UI",
          icon: require("../../images/logos/material-ui-logo.webp"),
          iconAlt: require("../../images/logos/material-ui-logo.svg"),
          note: "",
        },
      },
    },
    tools: {
      title: "Tools",
      description: "Tools",
      skills: {
        nodeJs: { // TODO: Handle light theme 🤮
          title: "NodeJs",
          icon: require("../../images/logos/nodejs-logo.png"),
          iconAlt: "",
          note: "",
        },
      },
    },
    other: {
      title: "Other",
      description: "",
      skills: {},
    },
  }
}