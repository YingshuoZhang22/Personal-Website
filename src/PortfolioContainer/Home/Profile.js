import React from 'react'
import Typical from 'react-typical'
import "./Profile.css"

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='https://www.linkedin.com/in/yingshuo-zhang/'>
                                <i className='fa fa-linkedin'></i>
                            </a>
                            <a href='https://github.com/dumd-node'>
                                <i class="fa fa-github-square"></i>
                            </a>
                            <a href='https://www.facebook.com/profile.php?id=100043762609480'>
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href='https://www.instagram.com/dummy_node/'>
                                <i className='fa fa-instagram'></i>
                            </a>
                            {/* <a href='#'>
                                <i className='fa fa-twitter'></i>
                            </a> */}
                        </div>
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className='highlighted-text'>Yingshuo Zhang</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                loop={Infinity}
                                steps={[
                                    "Univerisity of Waterloo 🏫",
                                    1000,
                                    "Full Stack Developer 💻",
                                    1000,
                                    "Database Engineer 📊",
                                    1000,
                                    "Human Computer Interaction 🧑‍💼",
                                    1000,
                                    "MERN Stack Developer 🖥",
                                    1000,
                                ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Build web applications with front end and back end operations.
                            </span>
                        </span>
                    </div>
                    <div className='profile-optins'>
                        <button className='btn primary-btn'>
                            {""}
                            Hire Me{" "}
                        </button>
                        <a href='Yingshuo_Zhang.pdf' download='Yingshuo Zhang.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'></div>
                </div>
            </div>
        </div>
    )
}
