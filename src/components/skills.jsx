import './style.css'
export const Skills = () => {
    return (
        <>
            <div className="skills-container">
                <h2>🚀 Technical Skills</h2>
                 <br />
                {/* Frontend Skills */}
                <h3>🎨 Frontend</h3>
                <div className="skill">
                    <p>
                        <img
                            src="https://skillicons.dev/icons?i=html"
                            alt="HTML logo"
                            className="skill-logo"
                        />
                        HTML <span>90%</span>
                    </p>
                    <div className="progress-bar">
                        <div className="progress html"></div>
                    </div>
                </div>
                <div className="skill">
                    <p>
                        <img
                            src="https://skillicons.dev/icons?i=css"
                            alt="CSS logo"
                            className="skill-logo"
                        />
                        CSS <span>80%</span>
                    </p>
                    <div className="progress-bar">
                        <div className="progress css"></div>
                    </div>
                </div>
                <div className="skill">
                    <p>
                        <img
                            src="https://skillicons.dev/icons?i=javascript"
                            alt="JavaScript logo"
                            className="skill-logo"
                        />
                        JavaScript <span>85%</span>
                    </p>
                    <div className="progress-bar">
                        <div className="progress js"></div>
                    </div>
                </div>
                <div className="skill">
                    <p>
                        <img
                            src="https://skillicons.dev/icons?i=react"
                            alt="React logo"
                            className="skill-logo"
                        />
                        React <span>80%</span>
                    </p>
                    <div className="progress-bar">
                        <div className="progress react"></div>
                    </div>
                </div>
                <div className="skill">
                    <p>
                        <img
                            src="https://skillicons.dev/icons?i=redux"
                            alt="Redux logo"
                            className="skill-logo"
                        />
                        Redux <span>75%</span>
                    </p>
                    <div className="progress-bar">
                        <div className="progress redux"></div>
                    </div>
                </div>

                {/* Backend Skills */}
                <h3>🛠 Backend</h3>
                <div className="skill">
                    <p>
                        <img
                            src="https://skillicons.dev/icons?i=nodejs"
                            alt="Node.js logo"
                            className="skill-logo"
                        />
                        Node.js <span>70%</span>
                    </p>
                    <div className="progress-bar">
                        <div className="progress node"></div>
                    </div>
                </div>
                <div className="skill">
                    <p>
                        <img
                            src="https://skillicons.dev/icons?i=express"
                            alt="Express.js logo"
                            className="skill-logo"
                        />
                        Express.js <span>65%</span>
                    </p>
                    <div className="progress-bar">
                        <div className="progress express"></div>
                    </div>
                </div>
                <div className="skill">
                    <p>
                        <img
                            src="https://skillicons.dev/icons?i=mongodb"
                            alt="MongoDB logo"
                            className="skill-logo"
                        />
                        MongoDB <span>75%</span>
                    </p>
                    <div className="progress-bar">
                        <div className="progress mongo"></div>
                    </div>
                </div>

                {/* Programming Languages */}
                <h3>💻 Programming</h3>
                <div className="skill">
                    <p>
                        <img
                            src="https://skillicons.dev/icons?i=javascript"
                            alt="JavaScript logo"
                            className="skill-logo"
                        />
                        JavaScript <span>85%</span>
                    </p>
                    <div className="progress-bar">
                        <div className="progress js"></div>
                    </div>
                </div>
                <div className="skill">
                    <p>
                        <img
                            src="https://skillicons.dev/icons?i=python"
                            alt="Python logo"
                            className="skill-logo"
                        />
                        Python <span>70%</span>
                    </p>
                    <div className="progress-bar">
                        <div className="progress python"></div>
                    </div>
                </div>

                {/* Tools & Platforms */}
                <h3>🛠 Tools & Platforms</h3>
                <div className="skill">
                    <p>
                        <img
                            src="https://skillicons.dev/icons?i=git"
                            alt="Git logo"
                            className="skill-logo"
                        />
                        Git <span>85%</span>
                    </p>
                    <div className="progress-bar">
                        <div className="progress git"></div>
                    </div>
                </div>
                <div className="skill">
                    <p>
                        <img
                            src="https://skillicons.dev/icons?i=github"
                            alt="GitHub logo"
                            className="skill-logo"
                        />
                        GitHub <span>80%</span>
                    </p>
                    <div className="progress-bar">
                        <div className="progress github"></div>
                    </div>
                </div>
                <div className="skill">
                    <p>
                        <img
                            src="https://skillicons.dev/icons?i=vscode"
                            alt="VS Code logo"
                            className="skill-logo"
                        />
                        VS Code <span>90%</span>
                    </p>
                    <div className="progress-bar">
                        <div className="progress vscode"></div>
                    </div>
                </div>
                <div className="skill">
                    <p>
                        <img
                            src="https://skillicons.dev/icons?i=postman"
                            alt="Postman logo"
                            className="skill-logo"
                        />
                        Postman <span>75%</span>
                    </p>
                    <div className="progress-bar">
                        <div className="progress postman"></div>
                    </div>
                </div>

                {/* Professional Skills (Circular Progress) */}
                <h2>⭐ Professional Skills</h2>
                <div className="circle-container">
                    <div className="circle" data-percent="90">
                        <svg>
                            <circle cx="50" cy="50" r="45"></circle>
                            <circle cx="50" cy="50" r="45" className="progress-circle creativity"></circle>
                        </svg>
                        <p>Creativity</p>
                    </div>
                    <div className="circle" data-percent="75">
                        <svg>
                            <circle cx="50" cy="50" r="45"></circle>
                            <circle cx="50" cy="50" r="45" className="progress-circle problem-solving"></circle>
                        </svg>
                        <p>Problem Solving</p>
                    </div>
                    <div className="circle" data-percent="85">
                        <svg>
                            <circle cx="50" cy="50" r="45"></circle>
                            <circle cx="50" cy="50" r="45" className="progress-circle communication"></circle>
                        </svg>
                        <p>Communication</p>
                    </div>
                    <div className="circle" data-percent="80">
                        <svg>
                            <circle cx="50" cy="50" r="45"></circle>
                            <circle cx="50" cy="50" r="45" className="progress-circle teamwork"></circle>
                        </svg>
                        <p>Teamwork</p>
                    </div>
                </div>
            </div>
        </>
    )
}

