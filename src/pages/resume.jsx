import React from 'react';

function MyResume() {
  const handleResume = () => {
        const resumeUrl = '/my-resume/ShaikhSohel_FullStack.pdf';
        document.getElementsByTagName("title")[0].innerText = "Shaikh Sohel - Resume";
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Sohel-FullStackResume.pdf';

        // Append to body, click, and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
  return (
    <>
      {/* Download Button */}
      <div className="container-fluid bg-light py-2 border-bottom">
        <div className="container">
          <div className="d-flex justify-content-end">
            <a className="btn btn-primary" onClick={()=>{handleResume()}}>
              <i className="fas fa-download me-2"></i>Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <header className="resume-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h1 className="display-5 fw-bold">SHAIKH SOHEL</h1>
              <p className="lead">Full Stack Developer (React.js | Node.js | Laravel)</p>
              <div className="resume-contact mt-3">
                <p className="mb-1">
                  <i className="fas fa-map-marker-alt me-2"></i>Ahmedabad, Gujarat | 
                  <i className="fas fa-phone me-2 ms-2"></i>+91 63546 21866
                </p>
                <p className="mb-1">
                  <i className="fas fa-envelope me-2"></i>shaikhsohai1131@gmail.com
                </p>
                <p className="mb-0">
                  <i className="fab fa-linkedin me-2"></i>
                  <a href="https://www.linkedin.com/in/sohail-shaikh-153467283" className="text-light">LinkedIn</a> &nbsp;|&nbsp;
                  <i className="fab fa-github me-2"></i>
                  <a href="https://github.com/Sohailshaikh5656" className="text-light">GitHub</a> &nbsp;| &nbsp;
                  <i className="fas fa-code me-2"></i>
                  <a href="https://leetcode.com/u/Sohail56/" className="text-light">LeetCode</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container my-5">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-8">
            {/* Professional Profile */}
            <section className="resume-section">
              <h2 className="h4 fw-bold text-primary mb-3">PROFESSIONAL PROFILE</h2>
              <p className="mb-0">MCA graduate with 6 months experience in JavaScript technologies including React.js, Next.js, and Node.js. Built 3+ full-stack projects with RESTful APIs and database optimization. Seeking junior full-stack developer position.</p>
            </section>

            {/* Professional Experience */}
            <section className="resume-section">
              <h2 className="h4 fw-bold text-primary mb-3">PROFESSIONAL EXPERIENCE</h2>
              <div className="resume-timeline">
                <div className="timeline-item">
                  <h5 className="fw-bold mb-1">Full-Stack Developer Intern</h5>
                  <p className="text-muted mb-1">Hyperlink InfoSystem | Jan 2025 - May 2025</p>
                  <ul className="mb-0">
                    <li>Built features using React.js, Next.js, and Node.js, improving delivery speed by 40%</li>
                    <li>Created REST APIs, reducing response time by 30%</li>
                    <li>Improved MySQL schemas and queries, decreasing complexity by 35%</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Technical Projects */}
            <section className="resume-section">
              <h2 className="h4 fw-bold text-primary mb-3">TECHNICAL PROJECTS</h2>
              
              <div className="card mb-4 project-card">
                <div className="card-body">
                  <h5 className="card-title">Music Player Application</h5>
                  <div className="tech-badges mb-3">
                    <span className="skill-badge nextjs">Next.js</span>
                    <span className="skill-badge nodejs">Node.js</span>
                    <span className="skill-badge react">React</span>
                    <span className="skill-badge redux">Redux</span>
                    <span className="skill-badge mysql">MySQL</span>
                    <span className="skill-badge bootstrap">Bootstrap</span>
                  </div>
                  <ul>
                    <li>Built music player handling 50+ songs with playlist creation and management features</li>
                    <li>Reduced authentication errors by 40% using JWT and Google OAuth integration</li>
                    <li>Achieved 100% core functionality completion ahead of project deadline</li>
                  </ul>
                  <a href="https://github.com/Sohalishaikh5656/musicApp" className="btn btn-sm btn-outline-primary">GitHub Repository</a>
                </div>
              </div>
              
              <div className="card mb-4 project-card">
                <div className="card-body">
                  <h5 className="card-title">Social Media Platform</h5>
                  <div className="tech-badges mb-3">
                    <span className="skill-badge nextjs">Next.js</span>
                    <span className="skill-badge nodejs">Node.js</span>
                    <span className="skill-badge react">React</span>
                    <span className="skill-badge redux">Redux</span>
                    <span className="skill-badge mysql">MySQL</span>
                    <span className="skill-badge bootstrap">Bootstrap</span>
                  </div>
                  <ul>
                    <li>Developed full-stack application serving 100+ simulated users with Redux state management</li>
                    <li>Improved page load performance by 25% using Next.js server-side rendering</li>
                    <li>Enhanced SEO scores by 30% through meta tag optimization and SSR implementation</li>
                  </ul>
                  <a href="https://github.com/Sohalishaikh5656/socialNetworking" className="btn btn-sm btn-outline-primary">GitHub Repository</a>
                </div>
              </div>
              
              <div className="card project-card">
                <div className="card-body">
                  <h5 className="card-title">Hire Hub - Job Portal</h5>
                  <div className="tech-badges mb-3">
                    <span className="skill-badge laravel">Laravel</span>
                    <span className="skill-badge php">PHP</span>
                    <span className="skill-badge bootstrap">Bootstrap</span>
                    <span className="skill-badge mysql">MySQL</span>
                  </div>
                  <ul>
                    <li>Developed multi-module portal processing 200+ job listings across three user panels</li>
                    <li>Automated job posting workflow, reducing processing time by 40%</li>
                    <li>Cut manual admin verification tasks by 30% through automated systems</li>
                  </ul>
                  <a href="https://github.com/Sohalishaikh5656/HireHub" className="btn btn-sm btn-outline-primary">GitHub Repository</a>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="col-lg-4">
            {/* Education */}
            <section className="resume-section">
              <h2 className="h4 fw-bold text-primary mb-3">EDUCATION</h2>
              <div className="resume-timeline">
                <div className="timeline-item">
                  <h5 className="fw-bold mb-1">Master of Computer Application (MCA)</h5>
                  <p className="text-muted mb-1">LJ University</p>
                  <p className="mb-0">CGPA: 8.2 | Jul 2023 – Mar 2025</p>
                </div>
                <div className="timeline-item">
                  <h5 className="fw-bold mb-1">Bachelor of Computer Application (BCA)</h5>
                  <p className="text-muted mb-1">K.K. Shastri College</p>
                  <p className="mb-0">CGPA: 6.8 | Jul 2020 – Mar 2023</p>
                </div>
              </div>
            </section>

            {/* Technical Skills */}
            <section className="resume-section">
              <h2 className="h4 fw-bold text-primary mb-3">TECHNICAL SKILLS</h2>
              
              <div className="skill-category mb-3">
                <h6 className="fw-bold mb-2">Languages</h6>
                <div className="tech-badges">
                  <span className="skill-badge javascript">JavaScript</span>
                  <span className="skill-badge python">Python</span>
                  <span className="skill-badge php">PHP</span>
                  <span className="skill-badge java">Java</span>
                </div>
              </div>
              
              <div className="skill-category mb-3">
                <h6 className="fw-bold mb-2">Frontend</h6>
                <div className="tech-badges">
                  <span className="skill-badge react">React.js</span>
                  <span className="skill-badge nextjs">Next.js</span>
                  <span className="skill-badge html">HTML5</span>
                  <span className="skill-badge css">CSS3</span>
                  <span className="skill-badge bootstrap">Bootstrap</span>
                  <span className="skill-badge redux">Redux</span>
                </div>
              </div>
              
              <div className="skill-category mb-3">
                <h6 className="fw-bold mb-2">Backend</h6>
                <div className="tech-badges">
                  <span className="skill-badge nodejs">Node.js</span>
                  <span className="skill-badge express">Express.js</span>
                  <span className="skill-badge django">Django</span>
                  <span className="skill-badge laravel">Laravel</span>
                </div>
              </div>
              
              <div className="skill-category mb-3">
                <h6 className="fw-bold mb-2">Databases & Tools</h6>
                <div className="tech-badges">
                  <span className="skill-badge mysql">MySQL</span>
                  <span className="skill-badge sqlite">SQLite</span>
                  <span className="skill-badge git">Git</span>
                  <span className="skill-badge github">GitHub</span>
                  <span className="skill-badge postman">Postman</span>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section className="resume-section">
              <h2 className="h4 fw-bold text-primary mb-3">CERTIFICATIONS</h2>
              <div className="cert-badges">
                <span className="cert-badge">J.P. Morgan Software Engineering</span>
                <span className="cert-badge">IBM Software Engineering (Coursera)</span>
                <span className="cert-badge">Software Testing - University of Minnesota</span>
                <span className="cert-badge">Agile Development and Scrum</span>
              </div>
            </section>

            {/* Soft Skills */}
            <section className="resume-section">
              <h2 className="h4 fw-bold text-primary mb-3">SOFT SKILLS</h2>
              <div className="soft-skills">
                <span className="soft-skill-item">Debugging</span>
                <span className="soft-skill-item">Fast Learning</span>
                <span className="soft-skill-item">Team Collaboration</span>
                <span className="soft-skill-item">Technical Documentation</span>
                <span className="soft-skill-item">Adaptability</span>
              </div>
            </section>

            {/* Extra-curricular */}
            <section className="resume-section">
              <h2 className="h4 fw-bold text-primary mb-3">EXTRA-CURRICULAR ACTIVITIES</h2>
              <p className="mb-0">Selected among top 50 participants in college hackathon from 1000+ applicants</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyResume;