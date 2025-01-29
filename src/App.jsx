import './App.css';
import { Home } from './components/home';
import { Projects } from './components/projects';
import { Skills } from './components/skills';
import { About } from './components/about';
import { Contact } from './components/contact';

function App() {
  return (
    <>
      <nav className="navbar">
        {/* "My Portfolio" label on the left */}
        <div className="portfolio-logo">
          <a href="#home">My Portfolio</a>
        </div>
        
        {/* Navigation Links */}
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div className="content">
        {/* Home Section */}
        <section id="home">
          <Home />
        </section>

        {/* Skills Section */}
        <section id="skills">
          <Skills />
        </section>

        {/* Projects Section */}
        <section id="projects">
          <Projects />
        </section>

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
