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
      </main>
    </div>
  )
};

export default App;