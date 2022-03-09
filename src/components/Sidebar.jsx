import React from "react"
import ReactGA from 'react-ga'

class Sidebar extends React.Component {

    constructor() {
        super()
        this.state = { 
        }
    }

    clicking = (category, action) => {
        ReactGA.event({
            category: category,
            action: action,
            label: "Link_from_sidebar",
        });
    }
 
    render() {
        return (
        <div className="sidebar" >
            <div>
                <div onClick={() => this.clicking("Link", "Github görüntülendi")} className="social-link">
                    <a href="https://github.com/fatiiates" target="_blank" rel="noopener noreferrer" title="Github">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                            </path>
                        </svg>
                    </a>
                </div>
                <div onClick={() => this.clicking("Link", "Gmail görüntülendi")} className="social-link">
                    <a href="mailto:fatiiates@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                    </a>
                </div>
                <div onClick={() => this.clicking("Link", "Linkedin görüntülendi")} className="social-link">
                    <a href="https://www.linkedin.com/in/fatiiates/" target="_blank" rel="noopener noreferrer" title="Linkedin">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </a>
                </div>
                <div onClick={() => this.clicking("Link", "Stackoverflow görüntülendi")} className="social-link">
                    <a href="https://stackoverflow.com/users/13918352/fatih-ates" target="_blank" rel="noopener noreferrer" title="Stackoverflow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff" stroke="#fff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852l10.48 2.189.451-2.07-10.478-2.187-.453 2.068zm1.359-5.056l9.705 4.53.903-1.95-9.706-4.53-.902 1.936v.014zm2.715-4.785l8.217 6.855 1.359-1.62-8.216-6.853-1.35 1.617-.01.001zM15.751 0l-1.746 1.294 6.405 8.604 1.746-1.294L15.749 0h.002z"></path>
                        </svg>
                    </a>
                </div>
                <div onClick={() => this.clicking("Link", "Özgeçmiş görüntülendi")} className="social-link">
                    <a href="/doc/resume_en.pdf" target="_blank" rel="noopener noreferrer" title="Resume">
                        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" id="Layer_1" fill="#fff" stroke="#fff" viewBox="0 0 512 512" width="30" height="30" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M424.44,147.8c0-.16,0-.33,0-.49a.5.5,0,0,1,0-.12l-.06-.41,0-.11a3.11,3.11,0,0,0-.11-.41.19.19,0,0,0,0-.07c-.05-.15-.1-.29-.16-.43v0a5.2,5.2,0,0,0-1.14-1.69L323,44a5.56,5.56,0,0,0-1.66-1.13l-.07,0-.35-.13-.15-.05-.29-.07-.24-.06-.22,0-.31-.05h0l-.49,0H128.24A40.71,40.71,0,0,0,87.56,83.06V428.94a40.71,40.71,0,0,0,40.68,40.67H383.76a40.71,40.71,0,0,0,40.68-40.67V147.8Zm-99.9-87,81.54,81.69H347A22.51,22.51,0,0,1,324.54,120Zm89.14,368.16a30,30,0,0,1-29.92,29.91H128.24a30,30,0,0,1-29.92-29.91V83.06a30,30,0,0,1,29.92-29.91H313.78V120A33.28,33.28,0,0,0,347,153.23h66.66Z"/>
                            <path d="M150.7,235.43h0a5.38,5.38,0,0,0,5.36-5.4l-.1-22.75a42.23,42.23,0,0,1,42-42.34h.17a42.23,42.23,0,0,1,42.17,42l.08,22.75a5.4,5.4,0,0,0,5.38,5.36h0a5.4,5.4,0,0,0,5.37-5.41l-.09-22.74A53,53,0,0,0,218,158.05a34.16,34.16,0,0,0,4.57-3.87,34.85,34.85,0,0,0-24.75-59.4h-.14a34.84,34.84,0,0,0-19.78,63.43,53,53,0,0,0-32.7,49.11l.09,22.75A5.39,5.39,0,0,0,150.7,235.43Zm47.05-129.88h.09a24.09,24.09,0,0,1,.1,48.17h-.1a24.09,24.09,0,0,1-.09-48.17Z"/>
                            <path d="M276.36,187.54a5.38,5.38,0,0,0,5.38,5.38H361.4a5.39,5.39,0,0,0,0-10.77H281.74A5.38,5.38,0,0,0,276.36,187.54Z"/>
                            <path d="M361.4,224.67H281.74a5.38,5.38,0,0,0,0,10.76H361.4a5.38,5.38,0,0,0,0-10.76Z"/>
                            <path d="M361.4,267.18H150.6a5.39,5.39,0,0,0,0,10.77H361.4a5.39,5.39,0,0,0,0-10.77Z"/>
                            <path d="M361.4,309.71H150.6a5.38,5.38,0,1,0,0,10.76H361.4a5.38,5.38,0,0,0,0-10.76Z"/>
                            <path d="M361.4,352.22H150.6a5.39,5.39,0,0,0,0,10.77H361.4a5.39,5.39,0,0,0,0-10.77Z"/>
                            <path d="M361.4,394.74H150.6a5.38,5.38,0,0,0,0,10.76H361.4a5.38,5.38,0,0,0,0-10.76Z"/>
                        </svg>
                    </a>
                </div>
                <div onClick={() => this.clicking("Link", "Medium görüntülendi")} className="social-link">
                    <a href="https://medium.com/@fatiiates" target="_blank" rel="noopener noreferrer" title="Medium">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 64 64" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="M 18.998047 15 A 17.002 17.002 0 0 0 18.998047 49.003906 A 17.002 17.002 0 0 0 18.998047 15 z M 45.498047 16 A 8.502 16.002 0 0 0 45.498047 48.003906 A 8.502 16.002 0 0 0 45.498047 16 z M 58.5 17 A 3.5 15.002 0 1 0 58.5 47.003906 A 3.5 15.002 0 1 0 58.5 17 z"/></svg>
                    </a> 
                </div>
            </div>
        </div>
        )
    }
}

export default Sidebar