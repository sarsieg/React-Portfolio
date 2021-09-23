export default {

    name: 'Sarah Siegel',
    headerTagline: [
        'I am Sarah Siegel',
        'a full stack web developer',
        'from Minneapolis Minnesota.'
    ],

    contactEmail: 'sarah.ac.siegel@gmail.com',
    resume: '../src/pdf/Resume.pdf',
    abouttext: "I am a 24 year old living in Minnesota who is currently working as a server while studying web development at the University of Minnesota. I have been working since I was 15 years old and have a dedicated learner my whole life. I am looking to expand my knowledge in web development and am currently looking for a job within the web developing field.",
    aboutImage: '',
    ShowAboutImage: true,

    projects: [{
            id: 1,
            title: 'Food Finders',
            service: 'This application allows the user to search a server-side database (through Edamam) for both food and drink recipes through another server-side API.',
            imageSrc: '../foodfinders.png',
            url: 'https://claholla.github.io/Food-Finders/'
        },
        {
            id: 2,
            title: 'Weather App',
            service: 'When creating this app my motivation was to showcase the power and amazing things that server-side APIs, Javascript, Bootstrap, CSS and HTML have when working together. You can connect so many different sources of information to run through your site, the options are endless.',
            imageSrc: '',
            url: 'https://sarsieg.github.io/Weather-Dashboard/'
        },
        {
            id: 3,
            title: 'Ho[w]asit',
            service: 'Reviews from those you trust',
            imageSrc: './images/howasit1.jpg',
            url: 'https://how-was-it.herokuapp.com/'
        },
        {
            id: 4,
            title: 'Express Note Taker',
            service: 'Express.js based note app that is able to create, save and delete new and exisiting notes.',
            imageSrc: '',
            url: 'https://sarah-express-note-taker.herokuapp.com/'
        },
        {
            id: 5,
            title: 'Password Generator',
            service: 'Application used to generate a random and secure passwork for the user.',
            imageSrc: '',
            url: 'https://sarsieg.github.io/Password-Generator/'
        },
        {
            id: 6,
            title: 'Coding Quiz',
            service: 'Applicate put together using Javascript, CSS and HTML to produce a quiz with questions as well as gather data to gener a score. This application also includes a list of save information from other highscores.',
            imageSrc: '',
            url: 'https://sarsieg.github.io/Web-APIs-Code-Quiz/'
        },
    ],
    social: [{
            name: 'Github',
            url: 'https://github.com/sarsieg'
        },
        {
            name: 'Linkedin',
            url: 'https://www.linkedin.com/in/sarah-siegel-a68191204/'
        }
    ]
}