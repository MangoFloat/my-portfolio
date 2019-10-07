export default function Projects(props){
  return {
    oldPortfolio: {
      title: 'Old Portfolio',
      description: 'An ePortfolio I created for the Web Development ' +
      'unit in my first year university. Written in flat HTML & CSS.',
      gitHubLink: 'https://github.com/MangoFloat/my-old-portfolio',
      imageSource: require('../images/project_images/old_portfolio/home-page.png'),
      imageSourceAlt: 'Old Portfolio home page',
      imageTitle: 'Old Portfolio',
      live: false,
      screenShots: {
        images: [
          {
            image: require('../images/project_images/old_portfolio/home-page.png'),
            imageAlt: 'Old Portfolio home page',
            caption: '',
          },
          {
            image: require('../images/project_images/old_portfolio/info-system.png'),
            imageAlt: 'Old Portfolio Information Systems unit',
            caption: '',
          },
          {
            image: require('../images/project_images/old_portfolio/comp-fundamentals.png'),
            imageAlt: 'Old Portfolio Computer Fundamentals unit',
            caption: '',
          },
          {
            image: require('../images/project_images/old_portfolio/web-design.png'),
            imageAlt: 'Old Portfolio Web Design unit',
            caption: '',
          },
          {
            image: require('../images/project_images/old_portfolio/personal-assessment.png'),
            imageAlt: 'Old Portfolio personal assessment',
            caption: '',
          },
          {
            image: require('../images/project_images/old_portfolio/responsive01.png'),
            imageAlt: 'Old Portfolio responsive short',
            caption: '',
          },
          {
            image: require('../images/project_images/old_portfolio/responsive02.png'),
            imageAlt: 'Old Portfolio responsive short personal assessment',
            caption: '',
          },
          {
            image: require('../images/project_images/old_portfolio/responsive03.png'),
            imageAlt: 'Old Portfolio responsive wide',
            caption: '',
          },
        ]
      }
    },
    project2: {
      title: 'Space Invaders Game',
      description: 'Space Invaders game I created for the Programming unit in my first year university. Initially written ' +
      'using Processing (https://processing.org), ported to Eclipse (Both in Java).',
      gitHubLink: 'https://github.com/MangoFloat/space-invaders',
      imageSource: require('../images/project_images/space-invaders/in-game.png'),
      imageSourceAlt: 'Space Invaders main menu',
      imageTitle: 'Gatsby',
      live: true,
      screenShots: {
        images: [
          {
            image: '',
            imageAlt: '',
            caption: '',
          },
        ]
      }
    }
  }
}