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
            service: 'This application allows users to log into Ho[w]asit using an authentication process with a personal email and password. Also allows users to see other users posts and reviews of different movie/tv shows as well as allows them to log out so their account is no longer accessible.',
            imageSrc: './images/howasit1.jpg',
            url: 'https://how-was-it.herokuapp.com/'
        },
        {
            id: 4,
            title: 'Express Note Taker',
            service: 'This project creates a simple Express.js based note app this is able to create, save and delete new notes and exisiting ones. This application uses an express backend and can save and retrieve note data from a JSON file.',
            imageSrc: '',
            url: 'https://sarah-express-note-taker.herokuapp.com/'
        },
        {
            id: 5,
            title: 'Password Generator',
            service: 'This application is being used to generate a random and secure password for a user by using Javascript. In this project HTML, CSS and Javascript was used to create a random password generate and shows how the use of Javascript can make changes to an HTML document. I built this project to show the power of Javascript and the uses it has when linked with CSS and HTML. It solves problems such as user input and uses variables to generate passwords.',
            imageSrc: '',
            url: 'https://sarsieg.github.io/Password-Generator/'
        },
        {
            id: 6,
            title: 'Coding Quiz',
            service: 'Applicate put together using Javascript, CSS and HTML to produce a quiz with questions as well as gather data to gener a score. This application also includes a list of save information from other highscores. As well as the dynamic changes that Javascript can have on a HTML document and utilizes the use of appending HTML pages.',
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