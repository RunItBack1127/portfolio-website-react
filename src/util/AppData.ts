import type { Technology } from "./Technology";
import type { Skill } from "./Skill";
import type { Project } from "./Project";

import javaIcon from '../assets/java-icon.png';
import flaskIcon from '../assets/flask-icon.png';
import redisIcon from '../assets/redis-icon.svg';

const SECTION_NAMES_TO_ELEMENTS = new Map();

function UPDATE_SECTION_ELEMENTS() {
    SECTION_NAMES_TO_ELEMENTS.set("Skills",
        document.querySelector("section.skillsSection")
    );
    SECTION_NAMES_TO_ELEMENTS.set("Portfolio",
        document.querySelector("section.portfolioSection")
    );
    SECTION_NAMES_TO_ELEMENTS.set("Contact",
        document.querySelector("section.contactSection")
    );
}

function SCROLL_TO_SECTION(section: string) {
    if( section === "Home" ) {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }
    else {
        const sectionElement: HTMLElement = SECTION_NAMES_TO_ELEMENTS.get(section);
        const topCoord = sectionElement.getBoundingClientRect().top + window.scrollY;
        window.scroll({
            top: Math.max(0, topCoord - 100),
            behavior: 'smooth'
        });
    }
}

const WEB_DEV_STACK_TECHNOLOGIES: Array<Technology> = [
{
    name: "Vue.js",
    level: 4,
    logo: undefined
},
{
    name: "Typescript",
    level: 4,
    logo: undefined
},
{
    name: "Node.js",
    level: 4,
    logo: undefined
},
{
    name: "React",
    level: 3,
    logo: undefined
},
];

const SOFTWARE_DEV_STACK_TECHNOLOGIES: Array<Technology> = [
{
    name: "Java",
    level: 4,
    logo: undefined
},
{
    name: "Python",
    level: 3,
    logo: undefined
},
{
    name: "C/C++",
    level: 3,
    logo: undefined
},
{
    name: "Rust",
    level: 1,
    logo: undefined
}
];

const EXPERIENCE_SKILLS: Array<Skill> = [
{
    description: "REST API Development",
    proficiency: 80
},
{
    description: "Version Control",
    proficiency: 75
},
{
    description: "Containerization",
    proficiency: 70
},
{
    description: "Microservices",
    proficiency: 65
},
{
    description: "Unit Testing",
    proficiency: 50
},
{
    description: "UI/UX Design",
    proficiency: 50
}
];

const BACKEND_SKILLS: Array<Technology> = [
{
    name: "Java",
    level: 4,
    logo: javaIcon
},
{
    name: "Python",
    level: 3,
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"

},
{
    name: "C++",
    level: 3,
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
},
{
    name: "C",
    level: 3,
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png"
},
{
    name: "Rust",
    level: 1,
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg"
}
];

const FRONTEND_SKILLS: Array<Technology> = [
{
    name: "Vue.js",
    level: 4,
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
},
{
    name: "Typescript",
    level: 4,
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
},
{
    name: "Node.js",
    level: 4,
    logo: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
},
{
    name: "React",
    level: 3,
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
},
{
    name: "HTML5",
    level: 4,
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
},
{
    name: "CSS3",
    level: 3,
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
}
]

const MISC_SKILLS: Array<Technology> = [
{
    name: "Flask",
    level: 3,
    logo: flaskIcon
},
{
    name: "Django",
    level: 2,
    logo: "https://static.djangoproject.com/img/logos/django-logo-positive.png"
},
{
    name: "Spring MVC",
    level: 2,
    logo: "https://spring.io/images/spring-logo-9146a4d3298760c2e7e49595184e1975.svg"
},
{
    name: "Redis",
    level: 3,
    logo: redisIcon
},
{
    name: "Docker",
    level: 3,
    logo: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png.webp"
},
{
    name: "PostgreSQL",
    level: 3,
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
}
]

const PORTFOLIO_PROJECTS: Array<Project> = [
{
    name: "Proton 3D Viewer",
    description: "Minimal web app for viewing 3D model files in the browser, supporting a variety of file formats with the ability to extend for others - inspired by the Online3DViewer project.",
    githubLink: "https://github.com/RunItBack1127/Proton3DViewer",
    technologiesUsed: [
    {
        name: "Vue.js",
        level: undefined,
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
    },
    {
        name: "Typescript",
        level: undefined,
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
    },
    {
        name: "Three.js",
        level: undefined,
        logo: "https://global.discourse-cdn.com/standard17/uploads/threejs/optimized/2X/e/e4f86d2200d2d35c30f7b1494e96b9595ebc2751_2_992x1000.png"
    }
    ]
},
{
    name: "AutoCV Cover Letter Generator",
    description: "Automation engine for generating cover letters with metadata specified from the end user, utilizing Chromium for rendering the cover letter PDF through the Puppeteer library.",
    githubLink: "https://github.com/RunItBack1127/autocv-unix",
    technologiesUsed: [
    {
        name: "Python",
        level: undefined,
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
    },
    {
        name: "Flask",
        level: undefined,
        logo: flaskIcon
    },
    {
        name: "Vue.js",
        level: undefined,
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
    }
    ]
},
{
    name: "Sidekick Basketball API",
    description: "REST API endpoint for retrieving the current season games, win/loss record, opponents, location, and other stats for both the NC State Men's and Women's Basketball teams.",
    githubLink: "https://github.com/RunItBack1127",
    technologiesUsed: [
    {
        name: "Node.js",
        level: undefined,
        logo: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
    },
    {
        name: "Typescript",
        level: undefined,
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
    },
    {
        name: "PostgreSQL",
        level: undefined,
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
    }
    ]
}
]

const FBF_SKILLS: Array<Array<Technology>> = [
    FRONTEND_SKILLS,
    BACKEND_SKILLS,
    MISC_SKILLS
];

export {
    UPDATE_SECTION_ELEMENTS as UPDATE_SECTION_COORDINATES,
    SCROLL_TO_SECTION,
    SECTION_NAMES_TO_ELEMENTS as SECTION_NAMES_TO_SELECTORS,
    WEB_DEV_STACK_TECHNOLOGIES,
    SOFTWARE_DEV_STACK_TECHNOLOGIES,
    EXPERIENCE_SKILLS,
    PORTFOLIO_PROJECTS,
    FBF_SKILLS
};