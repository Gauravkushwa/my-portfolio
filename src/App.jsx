import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/home';
import { Projects } from './components/projects';
import { Skills } from './components/skills';
import { About } from './components/about';
import { Contact } from './components/contact';

function App() {
  return (
    <>
      <nav className='navbar'>
        {/* Navigation Links */}
        <Link to="#home">Home</Link>
        <Link to="#skills">Skills</Link>
        <Link to="#projects">Projects</Link>
        <Link to="#about">About</Link>
        <Link to="#contact">Contact</Link>
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
