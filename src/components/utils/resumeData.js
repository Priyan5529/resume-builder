import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default {
    name: "Priyanka ",
    title: "Developer",

    birthday: "22nd octomber 1995",
    email: "priyanka@gmail.com",
    phone: "123 456 7890",
    address: "Tech Pundits INC,53/3 Manikanta Complex, Near Nagarbhavi Bus Stand, Bangalore, Karnataka.",

    socials: {
        Facebook: {
            link: "https://www.facebook.com",
            text: "myFacebook",
            icon: <FacebookIcon />,
        },

        Twitter: {
            link: "https://www.twitter.com",
            text: "myTwitter",
            icon: <TwitterIcon />,
        },
        Linkedin: {
            link: "https://www.linkedin.com",
            text: "myLinkedin",
            icon: <LinkedInIcon />,
        },
    },
    about:
        " Looking for challenging career which demands the best of my professional ability in terms of technical and analytical skills, and helps me in developing my current skill and knowledge. \n\n A competent &amp; Graduate, offering 3yrs of experience in US Mortgage.\n\n Seeking Middle Level assignments in Operations/Migrations/Risk&amp;Quality Management/Training &amp;Development with an organization of high repute.\n\n 3years of experience on US Mortgage associated with KFintech Pvt LTD as a Sr. Process Associate.",

    experiences: [
        {
            title: "Home Loans",
            date: "Jun 2019 - Jun 2022",
            description: "Servicing U.S Home loans for various investors. Provide End to End Solufions for Originating post closing and move to the Under Writer.",
        },
    ],

    educations: [
        {
            title: "B.Tech (E.I.E)",
            date: "2012-2016",
            description: "•	B.Tech (Electronics & Instrumentation Engineering) with an aggregate of 71.78% in Bapatla Engineering college, Bapatla during 2012-2016."
        },

        {
            title: "Intermediate (M.P.C)",
            date: "2010-2012",
            description: "•	Intermediate (M.P.C) with an aggregate of 86.8% from Vignana Bharathi Junior College, Chirala under Board of Intermediate Education A.P."
        },

        {
            title: "SSC (10th Class)",
            date: "2010",
            description: "•	SSC with an aggregate of 84.33% from Vasavi English Medium High School, Chirala under Board of Secondary Education A.P."
        },
    ],

    projects: [
        {
            title: "Design of “RAILWAY GATE AUTOMATION USING PLC AND SCADA “.",
            description: "This project deals with automatic railway gate operation i.e., automatic railway gate control at a level crossing replacing the gates operated by the gate keepers. Mainly it deals with two things,Firstly it deals with the reduction of time for which the gate is being kept closed and Secondly,to provide safety to the road users by reducing the accidents.",
        },

        {
            title: "Todo",
            description: "This project is built using context API",
            link: "https://github.com/Priyan5529/todo",
        },

        {
            title: "Student",
            description: "This project is built and stored in index DB",
            link: "https://github.com/Priyan5529/student",
        },

    ],

    skills: [
        {
            title: 'FRONT END',
            description: [
                "ReactJS",
                "JavaScript",
                "HTML",
                "CSS",
                "Material UI",
            ],
        },
        {
            title: "BACK END",
            description: [
                "Java",
            ],
        },

        {
            title: "CRM Platform",
            description: [
                "Salesfoece",
            ],
        },
        
    ],
};