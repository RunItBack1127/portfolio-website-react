import './style/App.scss';
import KeyboardGraphic from "./components/KeyboardGraphic";
import SiteNavigation from "./components/SiteNavigation";
import TechTotem from './components/TechTotem';

import type { Technology } from './util/Technology';
import SkillsSlider from './components/SkillsSlider';
import { Skill } from './util/Skill';

function App() {

  const WEB_DEV_STACK_TECHNOLOGIES: Array<Technology> = [
    {
      name: "Vue.js",
      level: 4
    },
    {
      name: "Typescript",
      level: 4
    },
    {
      name: "Node.js",
      level: 4
    },
    {
      name: "React",
      level: 3
    },
  ];

  const SOFTWARE_DEV_STACK_TECHNOLOGIES: Array<Technology> = [
    {
      name: "Java",
      level: 4
    },
    {
      name: "Python",
      level: 3
    },
    {
      name: "C/C++",
      level: 3
    },
    {
      name: "Rust",
      level: 1
    }
  ];

  const SKILLS: Array<Skill> = [
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
    }
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
                    SKILLS.map((skill) => {
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
      </main>
    </div>
  )
};

export default App;