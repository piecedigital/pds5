var projects = [
    {
        projectName: ["Guide Magazine Chat App", "A Fully Featured Web App"],
        refName: "gcc-app",
        img: null,
        desc: "This fully featured chat application was created for a small organization by the name of Guide Magazine. They hold weekly chat sessions for their users. I offered my skills to help them out by building a chat application to replace their current Java applet. The app needed to carry over and improve only the necessary parts of their previous app, and also add some nifty new ones. The goal was to create a customized, functional, cross-browser, and touch-friendly web app. Linked below is a video demo of the project (the video may be of the project in an older but stable state).",
        skillsApplied: {
            languages: ["JavaScript", "HTML", "CSS"],
            tools: ["NodeJS", "Sass"],
            libraries: ["JQuery"],
            frameworks: ["ExpressJS"],
            other: ["Ajax", "Responsive Web Design"]
        },
        links: ["[YouTube Video Demo](https://www.youtube.com/watch?v=r3hF3lD0DXY)"]
    },
    {
        projectName: ["LayoutCSS", "A CSS Library"],
        img: null,
        refName: "layoutcss",
        desc: "LayoutCSS is a verbose and semantically literal CSS library, designed to make prototyping web pages a breeze. LayoutCSS started off as my own personal CSS framework for quickly piecing together a website layout. I found it to be very helpful in achieving that goal so decided to release it as an open-source option for those who might like that aspect of a CSS framework.",
        skillsApplied: {
            languages: ["HTML", "CSS"],
            tools: ["Sass"],
            other: ["Web Design"]
        },
        links: ["[View On npm](https://www.npmjs.com/package/layoutcss)", "[View Project Website](http://piecedigital.github.io/layout-css-website/)"]
    },
    {
        projectName: ["TutoPop", "A JavaScript Library"],
        img: null,
        refName: "tutopop",
        desc: "TutoPop is a JavaScript tool for creating simple popup tutorials/tours to introduce your users to the interface of your website or web app! ",
        skillsApplied: {
            languages: ["JavaScript", "JQuery", "HTML", "CSS"],
            other: ["Responsive Web Design"]
        },
        links: ["[View On npm](https://www.npmjs.com/package/tutopop)", "[View Codepen.io Example](http://codepen.io/piecedigital/full/vNdaJm)"]
    },
    {
        projectName: ["ShoehornJS", "A JavaScript Library"],
        refName: "shoehornjs",
        img: null,
        desc: "ShoehornJS is a simple and small JavaScript tool for creating type safety. It insures that your variables are being assigned the correct data types and provides a way of improving your error handling for these datatypes.",
        skillsApplied: {
            languages: ["JavaScript"]
        },
        links: ["[View On npm](https://www.npmjs.com/package/shoehornjs)", "[View Github Repo](http://github.com/piecedigital/shoehorn.js)"]
    },
    {
        projectName: ["Go Bot", "A IRC chat bot for Twitch"],
        refName: "go-bot",
        img: null,
        desc: ["Go Bot is an IRC chat bot that I made for Twitch. I created it specifically for the purpose of learning the Go language. I don't currently have a live example as the set up involves having certain authorization keys, but they're very easy to obtain and I have left an example file that has links to where you can obtain the keys."],
        skillsApplied: {
            languages: ["[Go](https://golang.org/)"],
            libraries: ["[gopkg.in/sorcix/irc.v1](http://gopkg.in/sorcix/irc.v1)",
            "[golang.org/x/net/websocket](http://golang.org/x/net/websocket)"],
        },
        links: [
            "[View On Github](https://www.github.com/piecedigital/go-bot)",
            "[Watch YouTube Demo](https://youtu.be/boSaUGq8N58)"
        ],
        gallery: 0
    },
    {
        projectName: ["Amorrius", "A ReactJS Web App"],
        refName: "amorrius",
        img: "public/images/amorrius-logo.png",
        desc: ["Amorrius is a platform for Twitch users to enjoy the Twitch experience in a better or different way. Twitch streamers and viewers get a better to interact, and the viewing experience is pretty dope as well."],
        skillsApplied: {
            languages: ["JavaScript", "HTML", "CSS"],
            tools: ["NodeJS", "Sass", "Browserify", "Babel", "UglifyJS"],
            libraries: ["ReactJS", "React Router", "Firebase SDK"],
            frameworks: ["ExpressJS"],
            other: ["Ajax", "Responsive Web Design", "[Firebase](https://firebase.google.com)"]
        },
        links: [
            "[View On Github](https://www.github.com/piecedigital/bubble)",
            "[Try It Out!](https://www.amorrius.com)"
        ],
        gallery: 3
    },
    {
        projectName: ["Pixel Box", "Pixel Art Gif Maker"],
        refName: "pixel-box",
        img: null,
        desc: [
            "Pixel Box let you create simple pixel art animations right from your browser",
            "This project was created to explore the HTML5 canvas and learn how to utilize its native tools."
        ],
        skillsApplied: {
            languages: ["HTML", "CSS3", "JavaScript"],
            other: ["Ajax"]

        },
        links: ["[Try It Out!](https://pixel-box.herokuapp.com/)", "[Github](https://Github.com/piecedigital/pixel-art-maker)"],
        gallery: 1,
    },
    {
        projectName: ["3sUP Website", "Commissioned website for 3sUP"],
        refName: "threesup",
        img: null,
        desc: [
            "This website was commissioned by <a href='http://3sup.gg/'>3sUP</a>, and eSports organization. Although it was eventually not used it was still a decent project to test my ability to turn a mock up into working website. It was also an opportunity to become more familiar with PHP and Apache configuration.",
            "The mock up was designed by Tyler Chance of <a href='http://prestigestudios.net/'>Prestige Studios</a>."
        ],
        skillsApplied: {
            languages: ["HTML", "CSS3", "JavaScript", "PHP"],
            other: ["Ajax"]

        },
        links: ["[View It Live](http://pdstesting.x10host.com/)"],
        gallery: 4,
    },
    {
        projectName: ["Larva Shop", "An inventory project made with Laravel"],
        refName: "larva",
        img: null,
        desc: [
            "I created this to learn how Laravel worked, as well as to get familiar with MySQL",
            "With it you can view an inventory, send a message to the seller, and leave a review for an inventory item.",
            "",
            "Designed with <a href='http://designer.io' target='_blank'>Gravit Designer</a>"
        ],
        skillsApplied: {
            languages: ["PHP"],
            tools: [
                "Laravel",
                "MySQL",
                "Sass/SCSS",
                "[Gravit Designer](http://designer.io)",
            ],
            other: ["[DB4Free.net](http://db4free.net)"]
        },
        links: ["[View The Project](https://pds-larva.herokuapp.com/)"],
        gallery: 4,
    },
    {
        projectName: ["Piece Digital CMS", "A CMS created with Node"],
        refName: "p-cms",
        img: null,
        desc: [
            "\"Piece Digital CMS\" is a CMS created using Node/Express/React/Handlebars/MongoDB (NERHM stack!)",
            "Modelled after WordPress, it features the ability to easily add themes and plugins using Handlebars and React"
        ],
        skillsApplied: {
            languages: ["HTML", "CSS", "JavaScript"],
            tools: [
                "Sass",
                "MongoDB",
                "Sass/SCSS",
                "Node",
                "Express",
                "React",
                "Handlebars"
            ]
        },
        links: ["[View The Project](https://github.com/piecedigital/p-cms/)"],
        gallery: 0,
    }
];

projects.map((proj, order) => {
    var reformatted = {
        projectName: proj.projectName.join(", "),
        // projectImage: "false",
        projectDescription: typeof proj.desc === "string" ? proj.desc : proj.desc.join("\r\n"),
        projectSkills: null,
        projectLinks: proj.links.join("\r\n"),
        projectGallery: (proj.gallery || "0").toString(),
        order
    };

    if (proj.img) reformatted.projectImage = "true";

    reformatted.projectSkills = Object.keys(proj.skillsApplied).map(skillName => {
        return `${skillName}: ${proj.skillsApplied[skillName].join(", ")}`;
    }).join("\r\n");

    fetch("/api/pds5/add-project", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reformatted),
            credentials: "same-origin"
        })
        .then(r => {
            if (r.status < 400) {
                console.log("sent", reformatted);
            } else {
                console.log(r.status, r.statusText);
            }
        })
        .catch(e => console.error(e));
});

var experience = [
    {
        jobTitle: "Apprentice",
        jobSite: "http://maxxpotential.com",
        jobName: "Maxx Potential",
        jobStart: "Sep 2018",
        jobEnd: "Current",
        description: [
            "Tech consultancy based on apprenticeship.",
            "Responsibilities include quality assurance, web development/WordPress site management.",
            "Technical skills involved: HTML, CSS/Sass, JavaScript/TypeScript, SQL (Oracle and Microsoft variants), and Selenium",
        ],
        jobTasks: [
            "Quality Assurance",
            "Web Development",
            "WordPress Site Management",
        ],
    },
    {
        jobTitle: "Web Developer",
        jobSite: "http://kuv.io",
        jobName: "Kuvio Creative",
        jobStart: "Jan 2018",
        jobEnd: "Apr 2018",
        description: [
            "My primary responsibilities consisted of adding new features to existing products, completing features, and fixing existing issues with the software.",
            "Technical skills involved: C#, C#.NET, ASP.NET, AngularJS"
        ],
        jobTasks: [
            "Bug fixing",
            "Adding new features and views",
        ],
    },
    {
        jobTitle: "QA Analyst",
        jobSite: "http://www.traderinteractive.com/",
        jobName: "Trader Interactive",
        jobStart: "Sep 2017",
        jobEnd: "Dec 2017",
        description: [
            ""
        ],
        jobTasks: [
            "Verify the quality of customer websites",
            "Website testing",
            "DNS management",
            "Data entry into a SQL database",
            "Collaboration, communication, teamwork",
            "WordPress theme development",
        ],
    },
    {
        jobTitle: "Web Developer",
        jobSite: "https://gaugr.com",
        jobName: "Gaugr Inc.",
        jobStart: "April 2016",
        jobEnd: "March 2017",
        description: [
            "This was a very interesting project to work on as I was put in a position where I needed to learn a lot of new technology, as the solo back-end dev. As a result, I learned a lot about new tech and myself as a dev.",
            "Prior to this experience I had not touched AWS, Firebase, or Digital Ocean, and I ended up being very responsible for these services. I had to setup Ubuntu Linux servers on Digital Ocean, and utilize Amazon S3 and Cloudfront to work with with our needs. I didn't have a lot of time to learn and implement features using these things. so I often had to get something working in a relatively short amount of time, using a lot of quick research to find what I needed to get things done.",
            "Overall I did learn a lot. I learned plenty about the technology and services I was unfamiliar with, and for that I’m much more rich in knowledge, not just in regard available tech but also about my capabilities. I’ve found out just how capable I am when I must work under tight deadlines (in a fresh code base, at least)."
        ],
        jobTasks: [
            "Created various APIs for various features (file uploads, deletion, etc.)",
            "Set up Ubuntu web servers",
            "Collaborated to build and improve database structures",
            "Built new features for the client- and server-side",
            "General consultation for technical decisions and advice",
        ],
    },
    {
        jobTitle: "Web Application Developer",
        jobSite: "#full-project?project=gcc-app",
        jobName: "Guide Magazine",
        jobStart: "Aug 2015",
        jobEnd: "April 2016",
        description: [
            "This project was highly rewarding as a volunteer project. Though very beneficial as a portfolio project, it was rewarding giving a small organization something they needed at no cost to them.",
            "Guide Magazine was an org that I knew about for years since I was a child, back in the day when Flash and Java applet games were the only way to play games on the web at the time. Every week they held these 1 hour chat sessions. This was a Java applet. It worked well at the time.",
            "But these days Java applets, as well as Flash, are going the way of the dodo in practically every area. Until I came along Guide Magazine was still using a Java chat applet to service their weekly chat sessions. I thought that this would be a lovely opportunity to, 1) build my personal portfolio and experience, and 2) do a good deed.",
            "So I contacted the one person I know of that was still there, the lead moderator, I pitched my idea, we talked over Hangouts, and we agreed that the project would be good for them. At first I thought I was in over my head, but I was working with familiar technology so it wasn’t quite as bad. Mostly I learned a lot of “what to do” and “what not to do” (mostly “what not to do”).",
            "At the end of it all they have a nice and functional, responsive and mobile-friendly web app that services all of their needs, using modern technology that should last them for the long term, and I get a portfolio project and experience. Win-win!"
        ],
        jobTasks: [
            "Created a fully featured JavaScript chat application, complete with admin panel: <a data-index='gcc-app' class='go-to-page to-project' href='#full-project?project=gcc-app'>View Project</a>",
            "Designed the app to be touchscreen-friendly and responsive across desktop and mobile",
            "Constructed server code to be modular and efficient",
        ],
    },
    {
        jobTitle: "Freelance Web Developer / Consultant",
        jobSite: "http://mtmlandscaping.com",
        jobName: "MTM Landscaping",
        jobStart: "Mar 2015",
        jobEnd: "May 2015",
        description: [
            "For this project I mostly consulted and added 1/3 of the current site. The primary goal was to keep it light weight, maintain SEO, but also modernize the look."
        ],
        jobTasks: [
            "Assisted in design decisions",
            "Constructed web code for optimal load times",
        ],
    },
    {
        hide: true,
        jobTitle: "Freelance Web Developer / Consultant",
        jobSite: "",
        jobName: "Meraki Natural Hair",
        jobStart: "Oct 2014",
        jobEnd: "May 2015",
        description: [
            "Designed the website to be aesthetically comfortable and pleasing, using wireframes and mockup as guides for implementation",
            "Constructed web code to be manageable and efficient",
        ],
        jobTasks: [
            "Designed the website to be aesthetically comfortable and pleasing, using wireframes and mockup as guides for implementation",
            "Constructed web code to be manageable and efficient",
        ],
    }
];

experience.reverse().map((proj, order) => {
    var isCurrent = proj.jobEnd === "Current";

    var x = new Date(isCurrent ? "5000" : proj.jobEnd);
    var xx = new Date(x.getFullYear(), x.getMonth() + 1);
    var xxx = new Date(xx.getFullYear(), xx.getMonth(), -1);
    var properEndDate = `${xxx.getMonth()} ${xxx.getDate()}, ${xxx.getFullYear()}`;

    var reformatted = {
        jobTitle: proj.jobTitle,
        jobSite: proj.jobSite,
        jobName: proj.jobName,
        jobStartDate: proj.jobStart,
        jobIsCurrent: isCurrent.toString(),
        jobEndDate: properEndDate,
        jobDescription: typeof proj.description === "string" ? proj.description : proj.description.join("\r\n"),
        jobTasks: proj.jobTasks.join("\r\n"),
    };

    fetch("/api/pds5/add-job", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reformatted),
            credentials: "same-origin"
        })
        .then(r => {
            if (r.status < 400) {
                console.log("sent", reformatted);
            } else {
                console.log(r.status, r.statusText);
            }
        })
        .catch(e => console.error(e));
});