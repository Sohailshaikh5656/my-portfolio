import React, { useState } from 'react';
import projectData from '../components/common/projectData';
import { useNavigate } from 'react-router-dom';

function Projects() {
    const navigate = useNavigate()
    const projectsData = projectData
    const [visibleProjects, setVisibleProjects] = useState(6);

    const loadMore = () => {
        setVisibleProjects(prev => prev + 3);
    };

    const getTypeBadgeColor = (type) => {
        switch (type) {
            case 'Internship Project': return 'bg-primary';
            case 'Academic Project': return 'bg-success';
            case 'Learning Project': return 'bg-info';
            case 'Personal Project': return 'bg-warning';
            default: return 'bg-secondary';
        }
    };

    const getTypeIcon = (type) => {
        switch (type) {
            case 'Internship Project': return 'fas fa-briefcase';
            case 'Academic Project': return 'fas fa-graduation-cap';
            case 'Learning Project': return 'fas fa-laptop-code';
            case 'Personal Project': return 'fas fa-user';
            default: return 'fas fa-folder';
        }
    };

    return (
        <div className="container my-5">
            {/* Header Section */}
            <div className="text-center mb-5">
                <h1 className="display-5 fw-bold text-primary mb-3">My Projects</h1>
                <p className="lead text-muted mb-4">A collection of my work and learning journey</p>

                {/* Project Type Filters */}
                <div className="row justify-content-center mb-4">
                    <div className="col-auto">
                        <div className="d-flex flex-wrap justify-content-center gap-2">
                            <span className="badge bg-primary px-3 py-2">
                                <i className="fas fa-briefcase me-1"></i>
                                Internship Projects
                            </span>
                            <span className="badge bg-success px-3 py-2">
                                <i className="fas fa-graduation-cap me-1"></i>
                                Academic Projects
                            </span>
                            <span className="badge bg-info px-3 py-2">
                                <i className="fas fa-laptop-code me-1"></i>
                                Learning Projects
                            </span>
                            <span className="badge bg-warning px-3 py-2">
                                <i className="fas fa-user me-1"></i>
                                Personal Projects
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="row g-4">
                {projectsData.slice(0, visibleProjects).map((project) => (
                    <div key={project.id} className="col-lg-6 col-xl-4">
                        <div className="card project-card h-100 border-0 shadow-hover">
                            {/* Project Image with Overlay */}
                            <div className="project-image-container position-relative overflow-hidden">
                                <img
                                    src={Array.isArray(project.image)?project.image[0] : project.image}
                                    className="card-img-top project-image"
                                    alt={project.title}
                                />
                                <div className="project-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end">
                                    <div className="w-100 p-3 text-white overlay-content">
                                        <span className={`badge ${getTypeBadgeColor(project.type)} mb-2`}>
                                            <i className={`${getTypeIcon(project.type)} me-1`}></i>
                                            {project.type}
                                        </span>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <small>
                                                <i className="fas fa-calendar me-1"></i>
                                                {project.timeline}
                                            </small>
                                            <div className="tech-preview">
                                                {project.techStack.slice(0, 2).map((tech, index) => (
                                                    <span key={index} className="badge bg-dark bg-opacity-50 me-1">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body d-flex flex-column p-4">
                                {/* Project Title */}
                                <h5 className="card-title text-dark fw-bold mb-3 project-title">
                                    {project.title}
                                </h5>

                                {/* Short Description */}
                                <p className="card-text text-muted mb-4 flex-grow-1 project-description">
                                    {project.description[0]}
                                </p>

                                {/* Tech Stack */}
                                <div className="mb-4">
                                    <h6 className="fw-semibold text-dark mb-3 d-flex align-items-center">
                                        <i className="fas fa-code text-primary me-2"></i>
                                        Tech Stack
                                    </h6>
                                    <div className="d-flex flex-wrap gap-2">
                                        {project.techStack.slice(0, 5).map((tech, index) => (
                                            <span key={index} className="tech-badge">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.techStack.length > 5 && (
                                            <span className="tech-badge-more">
                                                +{project.techStack.length - 5}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Key Features */}
                                <div className="mb-4">
                                    <h6 className="fw-semibold text-dark mb-3 d-flex align-items-center">
                                        <i className="fas fa-star text-warning me-2"></i>
                                        Key Features
                                    </h6>
                                    <ul className="list-unstyled mb-0">
                                        {project.features.slice(0, 3).map((feature, index) => (
                                            <li key={index} className="feature-item">
                                                <i className="fas fa-check-circle text-success me-2"></i>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                        {project.features.length > 3 && (
                                            <li className="feature-item text-muted">
                                                <i className="fas fa-ellipsis-h me-2"></i>
                                                <span>+{project.features.length - 3} more features</span>
                                            </li>
                                        )}
                                    </ul>
                                </div>

                                {/* Action Buttons */}
                                <div className="d-flex gap-3 mt-auto pt-3">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-outline-dark btn-hover flex-fill d-flex align-items-center justify-content-center"
                                    >
                                        <i className="fab fa-github me-2"></i>
                                        Code
                                    </a>
                                    {project.viewMore && (
                                        <button onClick={()=>navigate(`/singleProject/${project.id}`)} className="btn btn-primary btn-hover flex-fill d-flex align-items-center justify-content-center">
                                            <i className="fas fa-external-link-alt me-2"></i>
                                            Details
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Load More Button */}
            {visibleProjects < projectsData.length && (
                <div className="text-center mt-5">
                    <button
                        onClick={loadMore}
                        className="btn btn-primary btn-lg px-5 py-3 load-more-btn"
                    >
                        <i className="fas fa-plus me-2"></i>
                        Load More Projects
                        <span className="badge bg-light text-primary ms-2">
                            {projectsData.length - visibleProjects}
                        </span>
                    </button>
                </div>
            )}

        </div>
    );
}

export default Projects;