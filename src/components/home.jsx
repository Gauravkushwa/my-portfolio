import React, { useEffect, useRef } from "react";
import bg from '../components/images/bg.jpeg';
import Typed from "typed.js";
import './style.css';

export const Home = () => {
    const elementRef = useRef(null); // Reference for Typed.js

    useEffect(() => {
        // Initialize Typed.js on component mount
        const typed = new Typed(elementRef.current, {
            strings: ["Web Developer", "Front-end Developer", "JavaScript Enthusiast"], // List of strings
            typeSpeed: 60,   // Typing speed (ms per character)
            backSpeed: 40,   // Backspacing speed (ms per character)
            loop: true,
            showCursor: true, // Display the cursor
            cursorChar: "|"
        });

        // Cleanup on component unmount
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            <main>
                <section className="firstSection">
                    <div className="leftSection">
                        Hii, My name is <span className='purple'>Gaurav Kushwaha</span>
                        <div>and I am a passionate</div>
                        <div ref={elementRef} className="animated"></div>
                        <div className="button">
                            <a href="https://drive.google.com/file/d/1hVzCkwQYIEawHGG9wB-OpHSSS00YIpNb/view?usp=sharing" download>
                                <button className="resume">
                                    Download Resume
                                </button>
                            </a>
                            <a href="https://github.com/Gauravkushwa" target="_blank" rel="noopener noreferrer">
                                <button>
                                    Visit GitHub
                                </button>
                            </a>
                        </div>

                    </div>
                    <div className="rightSection">
                        <img src={bg} alt="" />
                    </div>

                </section>
                <hr style={{ width: "90%", marginLeft: "5%", marginTop:"120px" }} />
            </main>
        </>
    );
}
