import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projectData from '../components/common/projectData';

function SingleProject() {
  const { id } = useParams();

  // Sample project data - you can replace this with your actual data
  let project = projectData.filter((item) => item.id == id)
  console.log("This is Selected Project : ", project)

  if (Array.isArray(project)) {
    project = project[0]
  }
  return (
    <div className="container my-5">
      {/* Back Button */}
      <div className="mb-4">
        <Link to="/projects" className="btn btn-outline-primary">
          <i className="fas fa-arrow-left me-2"></i>
          Back to Projects
        </Link>
      </div>

      {/* Project Header */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-8">
          <div className="d-flex align-items-center mb-3">
            <span className="badge bg-primary me-3 px-3 py-2">
              {project.type}
            </span>
            <span className="text-muted">
              <i className="fas fa-calendar me-1"></i>
              {project.timeline}
            </span>
          </div>
          <h1 className="display-5 fw-bold text-dark mb-3">{project.title}</h1>
          <div className="d-flex flex-wrap gap-4 mb-4">
            <div>
              <h6 className="text-muted mb-1">Role</h6>
              <p className="mb-0 fw-semibold">{project.role}</p>
            </div>
            <div>
              <h6 className="text-muted mb-1">Duration</h6>
              <p className="mb-0 fw-semibold">{project.duration}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 text-lg-end">
          <div className="d-flex flex-column flex-sm-row flex-lg-column gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark btn-lg"
            >
              <i className="fab fa-github me-2"></i>
              View GitHub
            </a>
            <a
              href={project.liveDemoUrl || "#"}
              target={project.liveDemoUrl ? "_blank" : "_self"}
              rel={project.liveDemoUrl ? "noopener noreferrer" : ""}
              className={`btn btn-primary btn-lg ${!project.liveDemoUrl ? 'disabled' : ''}`}
              style={{ opacity: project.liveDemoUrl ? "1" : "0.5" }}
              onClick={!project.liveDemoUrl ? (e) => e.preventDefault() : undefined}
            >
              <i className="fas fa-external-link-alt me-2"></i>
              Live Demo
            </a> 
        </div>
      </div>
    </div>

      {/* Project Overview */ }
      <div className="row mb-5">
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h3 className="h4 fw-bold text-dark mb-3">Project Overview</h3>
              <p className="lead text-muted mb-0" style={{ lineHeight: '1.8' }}>
                {project?.description || "Description : N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Left Column - Features & Tech Stack */}
        <div className="col-lg-8">
          {/* Features Section */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h3 className="h4 fw-bold text-dark mb-4">
                <i className="fas fa-star text-warning me-2"></i>
                Key Features
              </h3>
              <div className="row">
                {project.features.map((feature, index) => (
                  <div key={index} className="col-md-6 mb-3">
                    <div className="d-flex">
                      <i className="fas fa-check-circle text-success mt-1 me-3"></i>
                      <span>{feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Challenges Section */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h3 className="h4 fw-bold text-dark mb-4">
                <i className="fas fa-tasks text-info me-2"></i>
                Challenges & Solutions
              </h3>
              <div className="row">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="col-12 mb-3">
                    <div className="d-flex">
                      <i className="fas fa-exclamation-triangle text-warning mt-1 me-3"></i>
                      <span>{challenge}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Tech Stack & Achievements */}
        <div className="col-lg-4">
          {/* Tech Stack */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h3 className="h4 fw-bold text-dark mb-4">
                <i className="fas fa-code text-primary me-2"></i>
                Tech Stack
              </h3>
              <div className="d-flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span 
                    key={index} 
                    className={`badge ${tech} px-3 py-2 tech-badge`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h3 className="h4 fw-bold text-dark mb-4">
                <i className="fas fa-trophy text-warning me-2"></i>
                Achievements
              </h3>
              <div className="row">
                {project.achievements.map((achievement, index) => (
                  <div key={index} className="col-12 mb-3">
                    <div className="d-flex">
                      <i className="fas fa-award text-success mt-1 me-3"></i>
                      <span className="small">{achievement}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

  {/* Screenshots Section */ }
  <div className="row mt-5">
    <div className="col-12">
      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <h3 className="h4 fw-bold text-dark mb-4">
            <i className="fas fa-images text-info me-2"></i>
            Project Screenshots
          </h3>
          <div className="row g-4">
            {project.image.map((screenshot, index) => (
              <div key={index} className="col-md-4">
                <div className="screenshot-card">
                  <img
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="img-fluid rounded shadow-sm screenshot-image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Call to Action */ }
  <div className="row mt-5">
    <div className="col-12 text-center">
      <div className="card border-0 bg-primary text-white">
        <div className="card-body py-5">
          <h3 className="h2 fw-bold mb-3">Like what you see?</h3>
          <p className="lead mb-4 opacity-90">
            Check out the code or see the live demo to explore this project in detail.
          </p>
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light btn-lg"
            >
              <i className="fab fa-github me-2"></i>
              View Source Code
            </a>
            <a
              href={project.liveDemoUrl || "#"}
              target={project.liveDemoUrl ? "_blank" : "_self"}
              rel={project.liveDemoUrl ? "noopener noreferrer" : ""}
              className={`btn btn-primary btn-lg ${!project.liveDemoUrl ? 'disabled' : ''}`}
              style={{ opacity: project.liveDemoUrl ? "1" : "0.5" }}
              onClick={!project.liveDemoUrl ? (e) => e.preventDefault() : undefined}
            >
              <i className="fas fa-external-link-alt me-2"></i>
              Live Demo
            </a> 
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Minimal CSS */ }
  <style jsx>{`
        .tech-badge {
          transition: all 0.3s ease;
        }
        
        .tech-badge:hover {
          transform: translateY(-2px);
        }
        
        .screenshot-card {
          transition: all 0.3s ease;
        }
        
        .screenshot-card:hover {
          transform: translateY(-5px);
        }
        
        .screenshot-image {
          transition: all 0.3s ease;
        }
        
        .screenshot-card:hover .screenshot-image {
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
        
        .bg-purple {
          background-color: #6f42c1 !important;
        }
        
        .bg-orange {
          background-color: #fd7e14 !important;
        }
        
        .bg-google {
          background-color: #db4437 !important;
        }
        
        .card {
          border-radius: 12px;
        }
        
        .btn {
          border-radius: 8px;
          font-weight: 500;
        }
      `}</style>
    </div >
  );
}

export default SingleProject;
