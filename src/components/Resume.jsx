import React from "react"
import Link from './Link'

class Resume extends React.Component {
  constructor() {
    super()
    this.state = {}
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
                <h3>Software Engineer - Intern(Scholarship) — <Link url="https://www.tubitak.gov.tr/en" title="TUBITAK" /></h3>
                <span className="chip primary">
                Hybrid
                </span>
                <span className="chip danger animate-fade">
                Currently
                </span>
                <div className='indent'>
                  I am working as a software engineer intern in Professor Turgay Tugay BILGIN's project on educational technologies.
                  I also manage an Ubuntu server and a small team.
                </div>
                <br />
              </li>

              <li className='list'>
                <h3>Software Engineer - Intern — <Link url="https://www.bursa.bel.tr/" title="Bursa Metropolitan Municipality"/></h3>
                <div className='indent'>
                  I carried out POC processes by finding open source alternatives for applications that meet the needs of the municipality.
                  It was a good internship period where I did R&D studies mainly on Linux, Docker and various open source projects.
                </div>
                <br />
              </li>

              <li className='list'>
                <h3>Google Summer of Code ’21 - Project Based — <Link url="https://www.cncf.io/" title="CNCF" /></h3> 
                <span className="chip secondary">
                Remote
                </span>
                <div className='indent'>
                  The project provides a pipeline DSL plugin that allows users
                  to use buildpacks while developing a pipeline script in
                  Jenkins.
                </div>
                <br />
              </li>

              <li className='list'>
                <h3>Jr. Content Hacker - Intern — <Link url="https://www.jotform.com/" title="JotForm" /></h3>
                <span className="chip secondary">
                Remote
                </span>
                <div className='indent'>
                  I am building an SEO tool for the company. This tool
                  includes crawling and reporting data from the site by depth.
                </div>
                <br />
              </li>

              <li className='list'>
                <h3>Web Developer - Freelance — <Link url="https://cankayaenerji.com/" title="Cankaya Energy"/></h3>
                <span className="chip secondary">
                Remote
                </span>
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
                <span className="chip danger animate-fade">
                Currently
                </span>
                <div className='indent'>
                  <Link url="https://btu.edu.tr/" title="Bursa Technical University" />, Bursa TR
                </div>
                <br />
              </li>
              <li className='list'>
                <h3>Bachelor, Computer Engineering, CGPA: 3.82/4.00</h3>
                <div className='indent'>
                  <Link url="https://www.dpu.edu.tr/" title="Kutahya Dumlupinar University"/>, Kutahya TR
                </div>
                <br />
              </li>
              <li className='list'>
                <h3>High School, Database Programming/IT, 82.41/100.00</h3>
                <div className='indent'>
                  <Link url="https://tophanemtal.meb.k12.tr/tema/" title="Tophane Vocational and Technical Anatolian High School"/>, Bursa TR
                </div>
                <br />
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Resume
