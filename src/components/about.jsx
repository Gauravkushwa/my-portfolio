import './style/about.css'
export const About = () => {
    return (
        <>
            <section id="about">
                <div class="about-container">
                    <h2>👋 Hi, I'm <span class="highlight">Gaurav Kushwaha</span> !</h2>
                    <p>
                        A passionate <strong>student & aspiring web developer</strong> who loves building interactive
                        and user-friendly websites. I'm currently learning <span style={{color: "blue"}}>Full-Stack Development</span> and improving
                        my <span style={{color:"#7FFFD4"}}>Problem-Solving Skills</span> through various projects.
                    </p>

                    <div class="about-info">
                        <div class="info-box">
                            <h3>💻 Tech Skills</h3>
                            <p>HTML, CSS, JavaScript, React</p>
                        </div>

                        <div class="info-box">
                            <h3>🚀 Currently Learning</h3>
                            <p>Currentely focusing on DSA</p>
                        </div>

                        <div class="info-box">
                            <h3>🎯 Future Goal</h3>
                            <p>To become a <span class="highlight">Full-Stack Developer</span> and build innovative projects.</p>
                        </div>
                    </div>

                    <div class="extra-info">
                        <div class="info-box">
                            <h3>🏆 Achievements</h3>
                            <p>Completed Backend Projects with MongoDB DataBase, participated in coding challenges.</p>
                        </div>

                        <div class="info-box">
                            <h3>🌐 Certifications</h3>
                            <p>Completed online courses in Web Development.</p>
                        </div>

                        <div class="info-box">
                            <h3>💡 Hobbies</h3>
                            <p>Coding, UI/UX Design, play Chess, Exploring AI.</p>
                        </div>
                    </div>

                    <p class="fun-fact">✨ Fun Fact: I enjoy experimenting with web animations & UI effects! 🎨</p>
                </div>
            </section>
        </>
    )
}