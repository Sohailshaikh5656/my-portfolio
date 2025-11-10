import React from 'react';

function Skills() {
  document.getElementsByTagName("title")[0].innerText = "Shaikh Sohel - Skills";
  const skillsData = {
    frontend: [
      { name: "React", level: 90, icon: "fab fa-react", color: "#61DAFB" },
      { name: "Next.js", level: 85, icon: "fas fa-cloud", color: "#000000" },
      { name: "Flutter", level: 75, icon: "fab fa-flutter", color: "#02569B" },
      { name: "HTML5", level: 95, icon: "fab fa-html5", color: "#E34F26" },
      { name: "CSS3", level: 90, icon: "fab fa-css3-alt", color: "#1572B6" },
      { name: "JavaScript", level: 88, icon: "fab fa-js-square", color: "#F7DF1E" },
      { name: "Bootstrap", level: 92, icon: "fab fa-bootstrap", color: "#7952B3" },
      { name: "Redux", level: 80, icon: "fas fa-code-branch", color: "#764ABC" }
    ],
    
    backend: [
      { name: "Node.js", level: 85, icon: "fab fa-node-js", color: "#339933" },
      { name: "Express.js", level: 82, icon: "fas fa-server", color: "#000000" },
      { name: "Laravel", level: 78, icon: "fab fa-laravel", color: "#FF2D20" },
      { name: "Django", level: 70, icon: "fab fa-python", color: "#092E20" },
      { name: "REST API", level: 88, icon: "fas fa-code", color: "#FF6B6B" },
      { name: "GraphQL", level: 65, icon: "fas fa-project-diagram", color: "#E10098" }
    ],
    
    databases: [
      { name: "MySQL", level: 85, icon: "fas fa-database", color: "#4479A1" },
      { name: "MongoDB", level: 75, icon: "fas fa-leaf", color: "#47A248" },
      { name: "SQLite", level: 80, icon: "fas fa-database", color: "#003B57" },
      { name: "PostgreSQL", level: 70, icon: "fas fa-elephant", color: "#336791" }
    ],
    
    tools: [
      { name: "Git", level: 90, icon: "fab fa-git-alt", color: "#F05032" },
      { name: "GitHub", level: 88, icon: "fab fa-github", color: "#181717" },
      { name: "Postman", level: 85, icon: "fas fa-cloud", color: "#FF6C37" },
      { name: "Vercel", level: 80, icon: "fas fa-rocket", color: "#000000" },
      { name: "Netlify", level: 80, icon: "fas fa-globe", color: "#00C7B7" },
      { name: "VS Code", level: 95, icon: "fas fa-code", color: "#007ACC" },
      { name: "Docker", level: 65, icon: "fab fa-docker", color: "#2496ED" },
      { name: "AWS", level: 60, icon: "fab fa-aws", color: "#FF9900" }
    ],
    
    methodologies: [
      { name: "Agile/Scrum", level: 85, icon: "fas fa-users", color: "#FF6B6B" },
      { name: "RESTful Design", level: 88, icon: "fas fa-code", color: "#4ECDC4" },
      { name: "MVC Architecture", level: 82, icon: "fas fa-sitemap", color: "#45B7D1" },
      { name: "Test Driven Dev", level: 70, icon: "fas fa-vial", color: "#96CEB4" },
      { name: "CI/CD", level: 75, icon: "fas fa-sync-alt", color: "#FFEAA7" }
    ]
  };

  const SkillCategory = ({ title, skills, icon }) => (
    <div className="card border-0 shadow-sm mb-4">
      <div className="card-body p-4">
        <h3 className="h4 fw-bold text-dark mb-4 d-flex align-items-center">
          <i className={`${icon} me-3`} style={{ fontSize: '1.5rem' }}></i>
          {title}
        </h3>
        <div className="row g-4">
          {skills.map((skill, index) => (
            <div key={index} className="col-lg-6">
              <div className="d-flex align-items-center mb-3">
                <i 
                  className={`${skill.icon} me-3`} 
                  style={{ 
                    fontSize: '1.5rem', 
                    color: skill.color,
                    width: '30px'
                  }}
                ></i>
                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="fw-semibold text-dark">{skill.name}</span>
                    <span className="text-muted small">{skill.level}%</span>
                  </div>
                  <div className="progress" style={{ height: '8px' }}>
                    <div 
                      className="progress-bar"
                      role="progressbar"
                      style={{ 
                        width: `${skill.level}%`,
                        backgroundColor: skill.color
                      }}
                      aria-valuenow={skill.level}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="container my-5">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold text-primary mb-3">Technical Skills</h1>
        <p className="lead text-muted mb-4">
          A comprehensive overview of my technical expertise and proficiency levels
        </p>
      </div>

      {/* Skills Grid */}
      <div className="row">
        <div className="col-12">
          <SkillCategory 
            title="Frontend Development" 
            skills={skillsData.frontend} 
            icon="fas fa-palette text-primary"
          />
          
          <SkillCategory 
            title="Backend Development" 
            skills={skillsData.backend} 
            icon="fas fa-server text-success"
          />
          
          <SkillCategory 
            title="Databases" 
            skills={skillsData.databases} 
            icon="fas fa-database text-warning"
          />
          
          <SkillCategory 
            title="Tools & Platforms" 
            skills={skillsData.tools} 
            icon="fas fa-tools text-info"
          />
          
          <SkillCategory 
            title="Methodologies" 
            skills={skillsData.methodologies} 
            icon="fas fa-project-diagram text-purple"
          />
        </div>
      </div>

      {/* Additional Badges Section */}
      <div className="row mt-5">
        <div className="col-lg-6 mb-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4 text-center">
              <div className="mb-3">
                <i className="fas fa-code text-warning" style={{ fontSize: '3rem' }}></i>
              </div>
              <h4 className="fw-bold text-dark mb-3">LeetCode Profile</h4>
              <p className="text-muted mb-4">
                Check out my problem-solving skills and coding challenges on LeetCode
              </p>
              <a 
                href="https://leetcode.com/u/Sohali56/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-warning btn-lg"
              >
                <i className="fas fa-external-link-alt me-2"></i>
                View LeetCode Profile
              </a>
            </div>
          </div>
        </div>
        
        <div className="col-lg-6 mb-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4 text-center">
              <div className="mb-3">
                <i className="fab fa-github text-dark" style={{ fontSize: '3rem' }}></i>
              </div>
              <h4 className="fw-bold text-dark mb-3">GitHub Contributions</h4>
              <p className="text-muted mb-4">
                Explore my coding activity, repositories, and contribution graph
              </p>
              <a 
                href="https://github.com/Sohalishaikh5656" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-dark btn-lg"
              >
                <i className="fab fa-github me-2"></i>
                View GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* GitHub Contribution Graph Placeholder */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 text-center">
              <h4 className="fw-bold text-dark mb-4">
                <i className="fab fa-github me-2"></i>
                GitHub Contribution Graph
              </h4>
              <div className="bg-light rounded p-5">
                <p className="text-muted mb-3">
                  GitHub contribution graph would be displayed here
                </p>
                <div className="d-flex justify-content-center mb-3">
                  {/* Mock contribution squares */}
                  {[...Array(7)].map((_, i) => (
                    <div key={i} className="d-flex flex-column me-1">
                      {[...Array(10)].map((_, j) => (
                        <div 
                          key={j}
                          className="contrib-square m-1"
                          style={{
                            width: '12px',
                            height: '12px',
                            backgroundColor: `rgba(37, 99, 235, ${Math.random() * 0.8 + 0.2})`,
                            borderRadius: '2px'
                          }}
                        ></div>
                      ))}
                    </div>
                  ))}
                </div>
                <small className="text-muted">
                  This is a placeholder. Actual GitHub contributions would show here.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Summary */}
      <div className="row mt-5">
        <div className="col-12">
          <div className="card border-0 bg-primary text-white">
            <div className="card-body p-5 text-center">
              <h3 className="h2 fw-bold mb-3">Always Learning, Always Growing</h3>
              <p className="lead mb-4 opacity-90">
                I'm constantly exploring new technologies and improving my skills to stay at the forefront of web development.
              </p>
              <div className="row justify-content-center">
                <div className="col-auto">
                  <div className="d-flex flex-wrap justify-content-center gap-5">
                    <div className="text-center">
                      <h4 className="fw-bold display-6 mb-1">{skillsData.frontend.length}+</h4>
                      <small>Frontend Technologies</small>
                    </div>
                    <div className="text-center">
                      <h4 className="fw-bold display-6 mb-1">{skillsData.backend.length}+</h4>
                      <small>Backend Technologies</small>
                    </div>
                    <div className="text-center">
                      <h4 className="fw-bold display-6 mb-1">
                        {Object.values(skillsData).flat().length}+
                      </h4>
                      <small>Total Skills</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal CSS */}
      <style jsx>{`
        .progress-bar {
          transition: width 1.5s ease-in-out;
          border-radius: 4px;
        }
        
        .card {
          border-radius: 12px;
        }
        
        .btn {
          border-radius: 8px;
          font-weight: 500;
        }
        
        .text-purple {
          color: #6f42c1 !important;
        }
        
        .contrib-square {
          transition: transform 0.2s ease;
        }
        
        .contrib-square:hover {
          transform: scale(1.2);
        }
        
        .bg-purple {
          background-color: #6f42c1 !important;
        }
        
        /* Animation for progress bars when they come into view */
        @keyframes slideIn {
          from {
            width: 0%;
          }
          to {
            width: attr(data-level);
          }
        }
      `}</style>
    </div>
  );
}

export default Skills;