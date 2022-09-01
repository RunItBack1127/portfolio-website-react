import './style/App.scss';
import KeyboardGraphic from "./components/KeyboardGraphic";
import SiteNavigation from "./components/SiteNavigation";

function App() {

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
            <article className="aboutMeCard">
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
            <article className="experienceContainer">
              <h1 className="header">Experience</h1>
              <div className="cardContent">
                
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  )
};

export default App;