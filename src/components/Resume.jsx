import React from "react";

class Resume extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className='info-wrapper'>
        <div className='personal'>
          <h1>
            <u>Fa</u>tih ATES
          </h1>
          <p>Hello, I'm just an open source lover.</p>
          <h4>Software Engineer</h4>
        </div>

        <div className='experience'>
          <h3 className="title">
            <u>EX</u>PERIENCE
          </h3>
          <div>
            <ul className='dash'>
              <li className='list'>
                <h3>
                  Software Engineer - Intern — Bursa Metropolitan Municipality
                </h3>
                , Bursa TR
                <div className='indent'>
                  
                </div>
                <br />
              </li>
              <li className='list'>
                <h3>Jr. Content Hacker - Intern — JotForm</h3>, Bursa TR, Remote
                <div className='indent'>
                  I am building an SEO tool for the company. This tool
                  includes crawling and reporting data from the site by depth.
                </div>
                <br />
              </li>
              <li className='list'>
                <h3>Google Summer of Code ’21 - Project Based — CNCF</h3>, Bursa
                TR, Remote
                <div className='indent'>
                  The project provides a pipeline DSL plugin that allows users
                  to use buildpacks while developing a pipeline script in
                  Jenkins.
                </div>
                <br />
              </li>
              <li className='list'>
                <h3>Scholarship Holder - Project Based — Tubitak</h3>, Bursa TR,
                Hybrid
                <div className='indent'>
                  I am developing a web service and managing an Ubuntu server
                  for Professor Turgay Tugay BILGIN’s TUBITAK supported project.
                </div>
                <br />
              </li>
              <li className='list'>
                <h3>Web Developer - Freelance — Cankaya Energy</h3>, Bursa TR,
                Remote
                <div className='indent'>
                  I took on all the tasks from the development of a website to
                  its deployment. This is my first freelance experience.
                </div>
                <br />
              </li>
            </ul>
          </div>
        </div>

        <div className='education'>
          <h3 className="title">
            <u>ED</u>UCATION
          </h3>
          <div>
            <ul className='dash'>
              <li className='list'>
                <h3>Bachelor, Computer Engineering, CGPA: 3.8/4.00</h3>
                <div className='indent'>
                  Bursa Technical University, Bursa TR
                </div>
                <br />
              </li>
              <li className='list'>
                <h3>Bachelor, Computer Engineering, CGPA: 3.82/4.00</h3>
                <div className='indent'>
                  Kutahya Dumlupinar University, Kutahya TR
                </div>
                <br />
              </li>
              <li className='list'>
                <h3>High School, Database Programming/IT, 82.41/100.00</h3>
                <div className='indent'>
                  Tophane Vocational and Technical Anatolian High School, Bursa
                  TR
                </div>
                <br />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
