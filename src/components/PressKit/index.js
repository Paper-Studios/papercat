import main from '../../assets/main.jpg';
import ss1 from '../../assets/ss1.jpg';
import ss2 from '../../assets/ss2.jpg';
import ss3 from '../../assets/ss3.jpg';
import ss4 from '../../assets/ss4.png';
import ss5 from '../../assets/ss5.png';
import Image from './Image.js';

function PressKit() {

  return (
    <div className="presskit-content">
      <div className="presskit-sidebar">
        <div>
          <h3>Developer</h3>
          <p>Paper Cat Games</p>
          <p>Based in California, U.S.</p>
        </div>

        <div>
          <h3>Release Date</h3>
          <p>Q1 2024</p>
        </div>

        <div>
          <h3>Platforms</h3>
          <p>Steam</p>
        </div>
      </div>
      <div className="presskit-mainbar">
        <div className="videoWrapper">
          <h1>Trailer</h1>
          <iframe
            src="https://www.youtube.com/embed/mvKB5AkDQko?si=jSEgbFWovtSaBkjB"
            title="Paper Perjury Trailer"
            frameBorder="0"  // Use frameBorder instead of frameborder
            allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </div>

        <div className="mainbar-entry">
          <h1>Description</h1>
          <p>Paper Perjury is a detective mystery game where you solve a series of cases as newly hired police clerk Justina Smith and find out the truth behind a string of suspicious crimes. Work with the energetic detective Ernest Hunt and dig for clues in the paper trail to discover the secrets that paperwork can hide.</p>
        </div>

        <div className="mainbar-entry">
          <h1>History</h1>
          <p>Paper Perjury started because the creator James Acosta wanted to use Ace Attorney mechanics outside of the standard courtroom setting. While originally called Paper Trails, it has been renamed to Paper Perjury to emphasize the core gameplay of catching witnesses in their lies.</p>
        </div>

        <div className="mainbar-entry">
          <h1>Features</h1>
          <ul className="presskit-features">
            <li>Collect evidence from colorful characters, each animated in handcrafted pixel art</li>
            <li>Interview witnesses from all walks of life.</li>
            <li>Use evidence to outwit criminals to catch them in their lies - and shove the truth in their face!</li>
            <li>Explore mysteries with grounded themes centered around the gentrification of an ever-growing city.</li>
            <li>Groove to the game's jazzy soundtrack to truly become a great detective!</li>
            <li>Befriend a cat! (the most important part of any game)</li>
          </ul>
        </div>

        <div className="mainbar-entry">
          <h1>Images</h1>
          <div className="game-images">
            <Image imageUrl={main} fileName={"PaperPerjuryTitleScreen"} />
            <Image imageUrl={ss1} fileName={"PaperPerjuryGameplay1"} />
            <Image imageUrl={ss2} fileName={"PaperPerjuryGameplay2"} />
            <Image imageUrl={ss3} fileName={"PaperPerjuryGameplay3"} />
            <Image imageUrl={ss4} fileName={"PaperPerjuryGameplay4"} />
            <Image imageUrl={ss5} fileName={"PaperPerjuryGameplay5"} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default PressKit;