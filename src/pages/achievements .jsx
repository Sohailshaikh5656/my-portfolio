import React from 'react';

function Achievements() {
  // Certificates data from your resume

  document.getElementsByTagName("title")[0].innerText = "Shaikh Sohel - Achievements";
  const certificates = [
    {
      id: 1,
      name: "J.P. Morgan Software Engineering Virtual Experience",
      issuer: "J.P. Morgan",
      date: "2024",
      url: "#",
      icon: "fas fa-building"
    },
    {
      id: 2,
      name: "IBM Software Engineering",
      issuer: "Coursera",
      date: "2024",
      url: "#",
      icon: "fas fa-laptop-code"
    },
    {
      id: 3,
      name: "Introduction to Software Testing",
      issuer: "University of Minnesota",
      date: "2024",
      url: "#",
      icon: "fas fa-vial"
    },
    {
      id: 4,
      name: "Introduction to Agile Development and Scrum",
      issuer: "IBM",
      date: "2024",
      url: "#",
      icon: "fas fa-users"
    }
  ];

  // LeetCode stats based on your info (100 questions solved)
  const leetcodeStats = {
    username: "Sohali56",
    problemsSolved: 88,
    easy: 60,
    medium: 26,
    hard: 2,
    ranking: "Rank 1,495,309",
    consistency: "85%"
  };

  // GitHub stats
  const githubStats = {
    username: "Sohalishaikh5656",
    repositories: 15,
    stars: 0,
    followers: 0,
    contributions: 0
  };

  return (
    <div className="container my-5">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold text-primary mb-3">Achievements & Coding Profiles</h1>
        <p className="lead text-muted">
          Showcasing my coding journey, problem-solving skills, and continuous learning efforts
        </p>
      </div>

      {/* LeetCode Section */}
      <div className="row mb-5">
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <div className="row align-items-center mb-4">
                <div className="col-md-8">
                  <h2 className="h3 fw-bold text-dark mb-2 d-flex align-items-center">
                    <i className="fas fa-code text-warning me-3"></i>
                    LeetCode Profile
                  </h2>
                  <p className="text-muted mb-0">
                    Regular problem-solving to enhance algorithmic thinking and coding skills
                  </p>
                </div>
                <div className="col-md-4 text-md-end">
                  <a 
                    href="https://leetcode.com/u/Sohail56/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-warning btn-lg"
                  >
                    <i className="fas fa-external-link-alt me-2"></i>
                    Visit Profile
                  </a>
                </div>
              </div>

              {/* LeetCode Stats */}
              <div className="row g-4">
                <div className="col-lg-8">
                  <div className="card bg-light border-0">
                    <div className="card-body p-4">
                      <h4 className="fw-bold text-dark mb-4">Progress Overview</h4>
                      
                      {/* Total Problems Solved */}
                      <div className="text-center mb-4">
                        <div className="display-4 fw-bold text-warning">
                          {leetcodeStats.problemsSolved}
                        </div>
                        <p className="text-muted mb-0">Problems Solved</p>
                      </div>

                      {/* Difficulty Breakdown */}
                      <div className="row text-center">
                        <div className="col-4">
                          <div className="border-end">
                            <div className="h4 fw-bold text-success">{leetcodeStats.easy}</div>
                            <small className="text-muted">Easy</small>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="border-end">
                            <div className="h4 fw-bold text-warning">{leetcodeStats.medium}</div>
                            <small className="text-muted">Medium</small>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="h4 fw-bold text-danger">{leetcodeStats.hard}</div>
                          <small className="text-muted">Hard</small>
                        </div>
                      </div>

                      {/* Progress Bars */}
                      <div className="mt-4">
                        <div className="mb-3">
                          <div className="d-flex justify-content-between mb-2">
                            <span className="fw-semibold">Easy</span>
                            <span className="text-muted">{leetcodeStats.easy}%</span>
                          </div>
                          <div className="progress" style={{ height: '10px' }}>
                            <div 
                              className="progress-bar bg-success" 
                              style={{ width: `${(leetcodeStats.easy / leetcodeStats.problemsSolved) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div className="mb-3">
                          <div className="d-flex justify-content-between mb-2">
                            <span className="fw-semibold">Medium</span>
                            <span className="text-muted">{leetcodeStats.medium}%</span>
                          </div>
                          <div className="progress" style={{ height: '10px' }}>
                            <div 
                              className="progress-bar bg-warning" 
                              style={{ width: `${(leetcodeStats.medium / leetcodeStats.problemsSolved) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div className="mb-3">
                          <div className="d-flex justify-content-between mb-2">
                            <span className="fw-semibold">Hard</span>
                            <span className="text-muted">{leetcodeStats.hard}%</span>
                          </div>
                          <div className="progress" style={{ height: '10px' }}>
                            <div 
                              className="progress-bar bg-danger" 
                              style={{ width: `${(leetcodeStats.hard / leetcodeStats.problemsSolved) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-4">
                  <div className="card bg-warning text-white border-0 h-100">
                    <div className="card-body p-4 d-flex flex-column justify-content-center text-center">
                      <i className="fas fa-trophy display-1 mb-3"></i>
                      <h4 className="fw-bold mb-3">Current Ranking</h4>
                      <div className="display-6 fw-bold mb-2">{leetcodeStats.ranking}</div>
                      <p className="mb-3">Global Ranking</p>
                      <div className="mt-auto">
                        <div className="small opacity-90">
                          <i className="fas fa-fire me-1"></i>
                          Consistency: {leetcodeStats.consistency}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GitHub Section */}
      <div className="row mb-5">
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <div className="row align-items-center mb-4">
                <div className="col-md-8">
                  <h2 className="h3 fw-bold text-dark mb-2 d-flex align-items-center">
                    <i className="fab fa-github text-dark me-3"></i>
                    GitHub Profile
                  </h2>
                  <p className="text-muted mb-0">
                    Active development and contribution to open source projects
                  </p>
                </div>
                <div className="col-md-4 text-md-end">
                  <a 
                    href="https://github.com/Sohalishaikh5656" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-dark btn-lg"
                  >
                    <i className="fab fa-github me-2"></i>
                    Visit Profile
                  </a>
                </div>
              </div>

              {/* GitHub Stats */}
              <div className="row g-4">
                <div className="col-md-3 col-6 text-center">
                  <div className="card border-0 bg-light h-100">
                    <div className="card-body p-4">
                      <i className="fas fa-code-branch text-primary display-6 mb-3"></i>
                      <div className="h3 fw-bold text-dark">{githubStats.repositories}</div>
                      <p className="text-muted mb-0">Repositories</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-3 col-6 text-center">
                  <div className="card border-0 bg-light h-100">
                    <div className="card-body p-4">
                      <i className="fas fa-star text-warning display-6 mb-3"></i>
                      <div className="h3 fw-bold text-dark">{githubStats.stars}</div>
                      <p className="text-muted mb-0">Stars</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-3 col-6 text-center">
                  <div className="card border-0 bg-light h-100">
                    <div className="card-body p-4">
                      <i className="fas fa-users text-info display-6 mb-3"></i>
                      <div className="h3 fw-bold text-dark">{githubStats.followers}</div>
                      <p className="text-muted mb-0">Followers</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-3 col-6 text-center">
                  <div className="card border-0 bg-light h-100">
                    <div className="card-body p-4">
                      <i className="fas fa-code text-success display-6 mb-3"></i>
                      <div className="h3 fw-bold text-dark">{githubStats.contributions}</div>
                      <p className="text-muted mb-0">Contributions</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* GitHub Contribution Graph Placeholder */}
              {/* <div className="mt-4">
                <div className="card border-0 bg-dark text-white">
                  <div className="card-body p-4 text-center">
                    <h5 className="fw-bold mb-3">GitHub Contribution Graph</h5>
                    <div className="bg-dark rounded p-3">
                      <div className="d-flex justify-content-center mb-3">
                        {/* Mock contribution calendar */}
                        {/* {[...Array(52)].map((_, weekIndex) => (
                          <div key={weekIndex} className="d-flex flex-column me-1">
                            {[...Array(7)].map((_, dayIndex) => (
                              <div 
                                key={dayIndex}
                                className="contrib-day m-1"
                                style={{
                                  width: '12px',
                                  height: '12px',
                                  backgroundColor: `rgba(46, 164, 79, ${Math.random() * 0.8 + 0.2})`,
                                  borderRadius: '2px'
                                }}
                              ></div>
                            ))}
                          </div>
                        ))} */}
                      {/* </div>
                      <small className="text-muted opacity-75">
                        This shows coding activity throughout the year. Darker green indicates more contributions.
                      </small>
                    </div>
                  </div>
                </div>
              </div> */} 
            </div>
          </div>
        </div>
      </div>

      {/* Certificates Section */}
      <div className="row mb-5">
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h2 className="h3 fw-bold text-dark mb-4 d-flex align-items-center">
                <i className="fas fa-certificate text-primary me-3"></i>
                Certificates & Learning
              </h2>
              
              <div className="row g-4">
                {certificates.map((cert) => (
                  <div key={cert.id} className="col-lg-6">
                    <div className="card border-0 bg-light h-100">
                      <div className="card-body p-4">
                        <div className="d-flex">
                          <div className="flex-shrink-0">
                            <i className={`${cert.icon} text-primary display-6`}></i>
                          </div>
                          <div className="flex-grow-1 ms-4">
                            <h5 className="fw-bold text-dark mb-2">{cert.name}</h5>
                            <p className="text-muted mb-2">
                              <i className="fas fa-building me-2"></i>
                              {cert.issuer}
                            </p>
                            <p className="text-muted mb-3">
                              <i className="fas fa-calendar me-2"></i>
                              {cert.date}
                            </p>
                            {cert.url && (
                              <a href={cert.url} className="btn btn-outline-primary btn-sm">
                                View Certificate
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hackathon Achievement */}
      <div className="row">
        <div className="col-12">
          <div className="card border-0 bg-primary text-white">
            <div className="card-body p-5 text-center">
              <i className="fas fa-trophy display-1 mb-3"></i>
              <h2 className="h1 fw-bold mb-3">Hackathon Achievement</h2>
              <p className="lead mb-4">
                Selected among <strong>top 50 participants</strong> in college hackathon from <strong>1000+ applicants</strong>
              </p>
              <div className="row justify-content-center">
                <div className="col-auto">
                  <div className="d-flex flex-wrap justify-content-center gap-5">
                    <div className="text-center">
                      <div className="h2 fw-bold mb-1">1000+</div>
                      <small>Participants</small>
                    </div>
                    <div className="text-center">
                      <div className="h2 fw-bold mb-1">Top 50</div>
                      <small>Final Selection</small>
                    </div>
                    <div className="text-center">
                      <div className="h2 fw-bold mb-1">Top 5%</div>
                      <small>Performance</small>
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
        .card {
          border-radius: 12px;
        }
        
        .btn {
          border-radius: 8px;
          font-weight: 500;
        }
        
        .contrib-day {
          transition: transform 0.2s ease;
        }
        
        .contrib-day:hover {
          transform: scale(1.3);
        }
        
        .progress {
          border-radius: 5px;
        }
        
        .progress-bar {
          border-radius: 5px;
          transition: width 1s ease-in-out;
        }
      `}</style>
    </div>
  );
}

export default Achievements;