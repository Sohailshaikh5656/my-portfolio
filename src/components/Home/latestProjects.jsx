import React from 'react'
import projectData from '../common/projectData'

function latestProjects() {
    let projects = projectData.slice(0, 3)
    return (
        <section id="projects" className="py-5" style={{ backgroundColor: "#f8fafc" }}>
            <div className="container">
                <h2 className="section-title">Recent Completed Projects</h2>
                <div className="row g-4">
                    {projects.map((project, index) => (
                        <div className="col-md-6 col-lg-4" key={index}>
                            <div className="card h-100 shadow-lg border-0 rounded-4 overflow-hidden">
                                <img src={project.image[0]} className="card-img-top" alt="Screenshot of a Social Media App" style={{ objectFit: "cover", height: "180px" }} />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title text-primary fw-bold mb-2">{project.name} - {project.title}</h5>
                                    <p className="card-text text-muted small mb-3">{project.description}</p>

                                    <div className="d-flex align-items-center mb-3">
                                        <i className="fas fa-microchip me-2 text-secondary"></i>
                                        <span className="text-sm fw-semibold">
                                            {project.techStack.join(", ")}
                                        </span>
                                    </div>

                                    <div className="mt-auto d-flex gap-2">
                                        <a
                                            href={project.liveDemoUrl || "/"}
                                            target={project.liveDemoUrl ? "_blank" : "_self"}
                                            rel={project.liveDemoUrl ? "noopener noreferrer" : ""}
                                            className={`btn btn-primary btn-lg ${!project.liveDemoUrl ? 'disabled' : ''}`}
                                            style={{ opacity: project.liveDemoUrl ? "1" : "0.5" }}
                                            onClick={!project.liveDemoUrl ? (e) => e.preventDefault() : undefined}
                                        >
                                            <i className="fas fa-external-link-alt me-2"></i>
                                            Live Demo
                                        </a> 
                                        <a href={project.githubUrl || "/"}
                                        target={project.githubUrl ? "_blank" : "_self"}
                                        rel={project.githubUrl ? "noopener noreferrer" : ""}
                                        className="btn btn-sm btn-outline-custom flex-grow-1">
                                            <i className="fab fa-github me-1"></i> Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

                <div className="text-center mt-5 p-3 bg-light rounded shadow-sm">
                    <p className="mb-0 text-secondary">
                        <i className="fas fa-info-circle me-2"></i>
                        **Note:** The projects above are self-learning and academic exercises built to demonstrate proficiency across the full stack.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default latestProjects
