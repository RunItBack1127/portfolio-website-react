import './style/App.scss';
import KeyboardGraphic from "./components/KeyboardGraphic";
import SiteNavigation from "./components/SiteNavigation";
import TechTotem from './components/TechTotem';
import SkillsSlider from './components/SkillsSlider';
import SkillCard from './components/SkillCard';

import { Skill } from './util/Skill';

import type { Technology } from './util/Technology';

import { useState } from 'react';
import { Project } from './util/Project';
import PortfolioCard from './components/PortfolioCard';
import ContactCard from './components/ContactCard';

function App() {

  const [skillIndex, setSkillIndex] = useState<number>(0);

  function updateSkillIndex( skillIndex: number ) {
    setSkillIndex( skillIndex );
    
    const currentSelectedSkill = document.querySelector( "button.currentSelection" );
    const nextSelectedSkill = document.querySelector( `section.skillsSection .skillsInner .selectorContainer button:nth-child(${ skillIndex + 1 })` );

    currentSelectedSkill?.classList.remove( "currentSelection" );
    nextSelectedSkill?.classList.add( "currentSelection" );
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
      logo: "https://cdn-icons-png.flaticon.com/512/226/226777.png"
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
      logo: "https://cdn.icon-icons.com/icons2/2389/PNG/512/flask_logo_icon_145276.png"
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
      logo: "https://cdn.worldvectorlogo.com/logos/redis.svg"
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
      name: "EcoPRT Website Redesign",
      description: "Leveraged a variety of technologies and cloud-based services for improving and upgrading the previous web domain for the lab to a modern and polished fully-featured web application.",
      githubLink: "https://github.com/RunItBack1127",
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
          name: "Docker",
          level: undefined,
          logo: "https://iconape.com/wp-content/files/fr/370801/svg/docker-icon-logo-icon-png-svg.png"
        }
      ]
    },
    {
      name: "AutoCV Cover Letter Generator",
      description: "Automation engine for generating cover letters with metadata specified from the end user, utilizing Chromium for rendering the cover letter PDF through the Puppeteer library.",
      githubLink: "https://github.com/RunItBack1127",
      technologiesUsed: [
        {
          name: "Python",
          level: undefined,
          logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
        },
        {
          name: "Flask",
          level: undefined,
          logo: "https://cdn.icon-icons.com/icons2/2389/PNG/512/flask_logo_icon_145276.png"
        },
        {
          name: "React",
          level: undefined,
          logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
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

  return (
    <div className="App">
      <SiteNavigation />
      <main>
        <div className="keyboardContainer">
          <KeyboardGraphic />
        </div>
        <section className="siteIntro">
          <div className="introContent">
            <div className="nameContainer">
              <p>Hi, my name is</p>
              <h1 name-align="left">Weston</h1>
              <h1 name-align="right">Greene</h1>
            </div>
            <p className="introMessage">Focused and determined <b>front end</b> and <b>back end</b> developer based in the Raleigh area, looking for new and innovative opportunities.</p>
            <div className="workContactContainer">
              <button>See My Work</button>
              <button className="contact">Contact Me</button>
            </div>
          </div>
        </section>
        <section className="introExperienceContainer">
          <div className="introExperienceInner">
            <article className="introExperienceCard aboutMeCard">
              <h1 className="header">About Me</h1>
              <div className="cardContent">
                <div className="educationContainer">
                  <h1 className="innerHeader">Education</h1>
                  <div className="talleyInfoContainer">
                    <img src="https://westonpgreene.com/assets/talley-wireframe.png" />
                    <div className="talleyInfo">
                      <h1>North Carolina State University</h1>
                      <p className="major">Bachelor of Computer Science</p>
                      <p>Minor of Mathematics</p>
                      <p>August 2018 - August 2022</p>
                    </div>
                  </div>
                  <h1 className="taglineHeader">Who Is Weston?</h1>
                  <div className="taglineContainer">
                    <p className="tagline">I taught myself how to type pretty young, and things got out of control from there. I've always had a good passion for astronomy, automobiles, and making music with other people - somehow that all culminated into wanting to be a web developer.</p>
                    <p className="tagline">I consider myself to be a thorough and clean coder, with a strong ability to learn fast and work productively and efficiently. Far and away, the self-learning aspect of myself never really left as I got older. Of course, this applies to all I currently know about web development.</p>
                  </div>
                </div>
              </div>
            </article>
            <article className="introExperienceCard experienceContainer">
              <h1 className="header">Experience</h1>
              <div className="cardContent">
                <div className="experienceCardContainer">
                  <div className="cardInner">
                    <TechTotem title="Web Dev Stack" technologies={ WEB_DEV_STACK_TECHNOLOGIES } />
                  </div>
                  <div className="cardInner">
                    <TechTotem title="Software Dev Stack" technologies={ SOFTWARE_DEV_STACK_TECHNOLOGIES } />
                  </div>
                </div>
                <div className="skillsContainer">
                  <h1 className="skillsHeader">Skills</h1>
                  {
                    EXPERIENCE_SKILLS.map((skill) => {
                      return (
                        <SkillsSlider skill={ skill } />
                      );
                    })
                  }
                </div>
              </div>
            </article>
          </div>
        </section>
        <section className="skillsSection outlinedSection">
          <div className="skillsInner outlinedSectionInner">
            <h1 className="header">Skills</h1>
            <hr></hr>
            <div className="selectorContainer">
              <button onClick={(prop) => { updateSkillIndex( 0 ) }} className="currentSelection">Front End</button>
              <button onClick={() => { updateSkillIndex( 1 ) }}>Back End</button>
              <button onClick={() => { updateSkillIndex( 2 ) }}>Additional</button>
            </div>
            <div className="skillsContainer">
              {
                FBF_SKILLS[skillIndex].map((tech) => {
                  return (
                    <SkillCard technology={ tech } />
                  )
                })
              }
            </div>
          </div>
        </section>
        <section className="portfolioSection outlinedSection">
          <div className="portfolioSectionInner outlinedSectionInner">
            <h1 className="header">Portfolio</h1>
            <hr></hr>
            <div className="portfolioContainer">
              {
                PORTFOLIO_PROJECTS.map((project) => {
                  return (
                    <PortfolioCard project={ project } />
                  )
                })
              }
            </div>
          </div>
        </section>
        <section className="contactSection outlinedSection">
          <div className="contactInner outlinedSectionInner">
            <h1 className="header">Contact</h1>
            <hr></hr>
            <div className="contactContainer">
              <ContactCard />
              <form className="contactForm emptyForm">
                <div className="nameEmailContainer">
                  <section className="fieldContainer">
                    <label htmlFor="nameField">Name</label>
                    <input type="text" name="nameField" />
                  </section>
                  <section className="fieldContainer">
                    <label htmlFor="emailField">Email</label>
                    <input type="text" name="emailField" />
                  </section>
                </div>
                <section className="subjectContainer fieldContainer">
                  <label htmlFor="subjectField">Subject</label>
                  <input type="text" name="subjectField" />
                </section>
                <section className="messageContainer fieldContainer">
                  <label htmlFor="messageField">Message</label>
                  <textarea name="messageField" />
                </section>
                <div className="clearSubmitContainer">
                  <button className="clearButton">Clear</button>
                  <button className="sendButton">Send</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
};

export default App;