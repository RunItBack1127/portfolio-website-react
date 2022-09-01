import './style/App.scss';
import KeyboardGraphic from "./components/KeyboardGraphic";
import SiteNavigation from "./components/SiteNavigation";
import TechTotem from './components/TechTotem';
import SkillsSlider from './components/SkillsSlider';
import SkillCard from './components/SkillCard';
import PortfolioCard from './components/PortfolioCard';
import ContactCard from './components/ContactCard';
import SiteFooter from './components/SiteFooter';
import SideBarMenu from './components/SideBarMenu';

import {
  UPDATE_SECTION_COORDINATES,
  WEB_DEV_STACK_TECHNOLOGIES,
  SOFTWARE_DEV_STACK_TECHNOLOGIES,
  EXPERIENCE_SKILLS,
  PORTFOLIO_PROJECTS,
  FBF_SKILLS,
  SCROLL_TO_SECTION
} from './util/AppData';

import React from 'react';
import talleyWireframe from './assets/talley-wireframe.png';

interface IProps {};
interface IState {
  skillIndex: number,
  isValidEmail: boolean
}

class App extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      skillIndex: 0,
      isValidEmail: false
    };

    document.querySelector("body")?.classList.add("sideBarComponent");
  }

  componentDidMount() {
    UPDATE_SECTION_COORDINATES();
  }

  updateSkillIndex(skillIndex: number) {
    this.setState({ skillIndex: skillIndex });
      
    const currentSelectedSkill = document.querySelector( "button.currentSelection" );
    const nextSelectedSkill = document.querySelector( `section.skillsSection .skillsInner .selectorContainer button:nth-child(${ skillIndex + 1 })` );

    currentSelectedSkill?.classList.remove( "currentSelection" );
    nextSelectedSkill?.classList.add( "currentSelection" );
  }

  render() {
    return (
      <div className="App">
        <SiteNavigation />
        <main className="sideBarComponent">
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
                <button onClick={() => SCROLL_TO_SECTION('Portfolio')}>See My Work</button>
                <button onClick={() => SCROLL_TO_SECTION('Contact')} className="contact">Contact Me</button>
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
                      <img src={ talleyWireframe } />
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
                          <SkillsSlider key={ `${skill.description}` } skill={ skill } />
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
                <button onClick={() => { this.updateSkillIndex( 0 ) } }className="currentSelection">Front End</button>
                <button onClick={() => { this.updateSkillIndex( 1 ) } }>Back End</button>
                <button onClick={() => { this.updateSkillIndex( 2 ) } }>Additional</button>
              </div>
              <div className="skillsContainer">
                {
                  FBF_SKILLS[this.state.skillIndex].map((tech) => {
                    return (
                      <SkillCard key={ `${tech.name}` } technology={ tech } />
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
                      <PortfolioCard key={ project.name } project={ project } />
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
                <form onKeyDown={ (e) => {
                  if( e.key.toUpperCase() === "TAB" ) {
                    const focusedElement = document.activeElement;

                    // @ts-ignore
                    if( focusedElement?.value === "" ) {
                      focusedElement?.classList.add( "emptyField" );
                    }
                    else {
                      focusedElement?.classList.remove( "emptyField" );
                    }
                  }
                } } className="contactForm preventSend preventClear">
                  <div className="nameEmailContainer">
                    <section className="fieldContainer">
                      <label htmlFor="nameField">Name</label>
                      <input onInput={ (e) => {
                        const formFields = [ ...document.querySelectorAll( "section.fieldContainer input" ),
                                              ...document.querySelectorAll( "section.fieldContainer textarea" ) ];
                        const contactForm = document.querySelector( "form.contactForm" );

                        // @ts-ignore
                        if( e.target.value === "" ) {
                          contactForm?.classList.add( "preventSend" );
                          
                          // @ts-ignore
                          e.target.classList.add( "emptyField" );

                          // @ts-ignore
                          if( !formFields.some((field) => field.value !== "") ) {
                            contactForm?.classList.add( "preventClear" );
                          }
                        }
                        else {
                          contactForm?.classList.remove( "preventClear" );

                          // @ts-ignore
                          if( !formFields.some((field) => field.value === "") && this.state.isValidEmail ) {
                            contactForm?.classList.remove( "preventSend" );
                          }

                          // @ts-ignore
                          e.target.classList.remove( "emptyField" );
                        }
                      } } className="emptyField" type="text" name="nameField" />
                    </section>
                    <section className="fieldContainer">
                      <label htmlFor="emailField">Email</label>
                      <input onInput={ (e) => {

                        /**
                         * Simple email validation regex
                         */
                        function isValidEmail(email: string) {
                          return email.match(new RegExp("^(.+)@(.+)$")) != null;
                        }

                        const formFields = [ ...document.querySelectorAll( "section.fieldContainer input" ),
                                              ...document.querySelectorAll( "section.fieldContainer textarea" ) ];
                        const contactForm = document.querySelector( "form.contactForm" );
                        const emailContainer = document.querySelector( "form.contactForm .nameEmailContainer" );

                        // @ts-ignore
                        if( e.target.value === "" ) {
                          contactForm?.classList.add( "preventSend" );

                          // @ts-ignore
                          e.target.classList.remove("invalidEmail");

                          // @ts-ignore
                          e.target.classList.add( "emptyField" );

                          // @ts-ignore
                          if( !formFields.some((field) => field.value !== "") ) {
                            contactForm?.classList.add( "preventClear" );
                          }
                        }
                        else {
                          contactForm?.classList.remove( "preventClear" );
                          
                          // @ts-ignore
                          if( isValidEmail( e.target.value ) ) {

                            // @ts-ignore
                            if( !formFields.some((field) => field.value === "") ) {
                              contactForm?.classList.remove( "preventSend" );
                            }
                            emailContainer?.classList.remove( "invalidEmail" );
                            this.setState({ isValidEmail: true });
                          }
                          else {
                            emailContainer?.classList.add( "invalidEmail" );
                            this.setState({ isValidEmail: false });
                          }

                          // @ts-ignore
                          e.target.classList.remove( "emptyField" );
                        }
                      } } className="emptyField" type="text" name="emailField" />
                    </section>
                  </div>
                  <section className="subjectContainer fieldContainer">
                    <label htmlFor="subjectField">Subject</label>
                    <input onInput={ (e) => {
                        const formFields = [ ...document.querySelectorAll( "section.fieldContainer input" ),
                                              ...document.querySelectorAll( "section.fieldContainer textarea" ) ];
                        const contactForm = document.querySelector( "form.contactForm" );
                        
                        // @ts-ignore
                        if( e.target.value === "" ) {
                          contactForm?.classList.add( "preventSend" );
                          
                          // @ts-ignore
                          e.target.classList.add( "emptyField" );

                          // @ts-ignore
                          if( !formFields.some((field) => field.value !== "") ) {
                            contactForm?.classList.add( "preventClear" );
                          }
                        }
                        else {
                          contactForm?.classList.remove( "preventClear" );

                          // @ts-ignore
                          if( !formFields.some((field) => field.value === "") && this.state.isValidEmail ) {
                            contactForm?.classList.remove( "preventSend" );
                          }

                          // @ts-ignore
                          e.target.classList.remove( "emptyField" );
                        }
                      } } className="emptyField" type="text" name="subjectField" />
                  </section>
                  <section className="messageContainer fieldContainer">
                    <label htmlFor="messageField">Message</label>
                    <textarea onInput={ (e) => {
                        const formFields = [ ...document.querySelectorAll( "section.fieldContainer input" ),
                                              ...document.querySelectorAll( "section.fieldContainer textarea" ) ];
                        const contactForm = document.querySelector( "form.contactForm" );

                        // @ts-ignore
                        if( e.target.value === "" ) {
                          contactForm?.classList.add( "preventSend" );

                          // @ts-ignore
                          e.target.classList.add( "emptyField" );

                          // @ts-ignore
                          if( !formFields.some((field) => field.value !== "") ) {
                            contactForm?.classList.add( "preventClear" );
                          }
                        }
                        else {
                          contactForm?.classList.remove( "preventClear" );

                          // @ts-ignore
                          if( !formFields.some((field) => field.value === "") && this.state.isValidEmail ) {
                            contactForm?.classList.remove( "preventSend" );
                          }

                          // @ts-ignore
                          e.target.classList.remove( "emptyField" );
                        }
                      } } className="emptyField" name="messageField" />
                  </section>
                  <div className="clearSubmitContainer">
                    <button onClick={ (e) => {
                      e.preventDefault();
                      const formFields = [ ...document.querySelectorAll( "section.fieldContainer input" ),
                                            ...document.querySelectorAll( "section.fieldContainer textarea" ) ];
                      formFields.map((field) => {

                        // @ts-ignore
                        field.value = "";

                        field.classList.add( "emptyField" );
                      });

                      const contactForm = document.querySelector( "form.contactForm" );
                      contactForm?.classList.add( "preventClear" );
                      contactForm?.classList.add( "preventSend" );

                      const emailContainer = document.querySelector( "form.contactForm .nameEmailContainer" );
                      emailContainer?.classList.remove( "invalidEmail" );
                      this.setState({ isValidEmail: false });

                    } } className="clearButton">Clear</button>
                    <button onClick={ (e) => {
                      e.preventDefault();
                    } } className="sendButton">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </section>
          <SiteFooter />
          <div className="sideBarObfuscator sideBarComponent" />
        </main>
        <SideBarMenu />
      </div>
    );
  }
};

export default App;