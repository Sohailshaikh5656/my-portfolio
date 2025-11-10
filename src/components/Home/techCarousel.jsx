import React from 'react'

function techCarousel() {
    return (
        <section className="tech-section">
            <div className="container">
                <h2 className="section-title mb-5">Technologies I Work With</h2>

                {/* Programming Languages */}
                <div className="skill-category mb-5">
                    <div className="category-header mb-4">
                        <i className="fas fa-code category-icon"></i>
                        <h3 className="category-title">Programming Languages</h3>
                    </div>
                    <div className="row g-3">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="tech-card">
                                <div className="tech-icon-wrapper">
                                    <i className="fab fa-js-square" style={{ color: "#F7DF1E" }}></i>
                                </div>
                                <div className="tech-info">
                                    <h6 className="tech-name">JavaScript</h6>
                                    <span className="tech-level">Advanced</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="tech-card">
                                <div className="tech-icon-wrapper">
                                    <i className="fab fa-python" style={{ color: "#3776AB" }}></i>
                                </div>
                                <div className="tech-info">
                                    <h6 className="tech-name">Python</h6>
                                    <span className="tech-level">Intermediate</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="tech-card">
                                <div className="tech-icon-wrapper">
                                    <i className="fab fa-php" style={{ color: "#777BB4" }}></i>
                                </div>
                                <div className="tech-info">
                                    <h6 className="tech-name">PHP</h6>
                                    <span className="tech-level">Intermediate</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="tech-card">
                                <div className="tech-icon-wrapper">
                                    <i className="fab fa-java" style={{ color: "#ED8B00" }}></i>
                                </div>
                                <div className="tech-info">
                                    <h6 className="tech-name">Java</h6>
                                    <span className="tech-level">Basic</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Frontend Technologies */}
                <div className="skill-category mb-5">
                    <div className="category-header mb-4">
                        <i className="fas fa-palette category-icon"></i>
                        <h3 className="category-title">Frontend Technologies</h3>
                    </div>
                    <div className="row g-3">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="tech-card">
                                <div className="tech-icon-wrapper">
                                    <i className="fab fa-react" style={{ color: "#61DAFB" }}></i>
                                </div>
                                <div className="tech-info">
                                    <h6 className="tech-name">React</h6>
                                    <span className="tech-level">Advanced</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="tech-card">
                                <div className="tech-icon-wrapper">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="#000000">
                                        <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727zm-3.332-8.533l1.6 2.061V7.2h-1.6v6.245z" />
                                    </svg>
                                </div>
                                <div className="tech-info">
                                    <h6 className="tech-name">Next.js</h6>
                                    <span className="tech-level">Advanced</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="tech-card">
                                <div className="tech-icon-wrapper">
                                    <i className="fab fa-html5" style={{ color: "#E34F26" }}></i>
                                </div>
                                <div className="tech-info">
                                    <h6 className="tech-name">HTML5</h6>
                                    <span className="tech-level">Expert</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="tech-card">
                                <div className="tech-icon-wrapper">
                                    <i className="fab fa-css3-alt" style={{ color: "#1572B6" }}></i>
                                </div>
                                <div className="tech-info">
                                    <h6 className="tech-name">CSS3</h6>
                                    <span className="tech-level">Expert</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="tech-card">
                                <div className="tech-icon-wrapper">
                                    <i className="fab fa-bootstrap" style={{ color: "#7952B3" }}></i>
                                </div>
                                <div className="tech-info">
                                    <h6 className="tech-name">Bootstrap</h6>
                                    <span className="tech-level">Advanced</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Backend Technologies */}
                <div className="skill-category mb-5">
                    <div className="category-header mb-4">
                        <i className="fas fa-server category-icon"></i>
                        <h3 className="category-title">Backend Technologies</h3>
                    </div>
                    <div className="row g-3">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="tech-card">
                                <div className="tech-icon-wrapper">
                                    <i className="fab fa-node-js" style={{ color: "#339933" }}></i>
                                </div>
                                <div className="tech-info">
                                    <h6 className="tech-name">Node.js</h6>
                                    <span className="tech-level">Advanced</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="tech-card">
                                <div className="tech-icon-wrapper">
                                    <i className="fab fa-laravel" style={{ color: "#FF2D20" }}></i>
                                </div>
                                <div className="tech-info">
                                    <h6 className="tech-name">Laravel</h6>
                                    <span className="tech-level">Intermediate</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="tech-card">
                                <div className="tech-icon-wrapper">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="#092E20">
                                        <path d="M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.001 2.65-6.6 6.753-6.6.637 0 1.121.05 1.707.203zm0 9.143a3.894 3.894 0 00-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.53 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39V.021z" />
                                    </svg>
                                </div>
                                <div className="tech-info">
                                    <h6 className="tech-name">Django</h6>
                                    <span className="tech-level">Intermediate</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="tech-card">
                                <div className="tech-icon-wrapper">
                                    <i className="fas fa-bolt" style={{ color: "#000000" }}></i>
                                </div>
                                <div className="tech-info">
                                    <h6 className="tech-name">Express.js</h6>
                                    <span className="tech-level">Advanced</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Databases */}
                <div className="skill-category mb-5">
                    <div className="category-header mb-4">
                        <i className="fas fa-database category-icon"></i>
                        <h3 className="category-title">Databases</h3>
                    </div>
                    <div className="row g-3">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="tech-card">
                                <div className="tech-icon-wrapper">
                                    <i className="fas fa-database" style={{ color: "#4479A1" }}></i>
                                </div>
                                <div className="tech-info">
                                    <h6 className="tech-name">MySQL</h6>
                                    <span className="tech-level">Advanced</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="tech-card">
                                <div className="tech-icon-wrapper">
                                    <i className="fas fa-leaf" style={{ color: "#47A248" }}></i>
                                </div>
                                <div className="tech-info">
                                    <h6 className="tech-name">MongoDB</h6>
                                    <span className="tech-level">Intermediate</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="tech-card">
                                <div className="tech-icon-wrapper">
                                    <i className="fas fa-database" style={{ color: "#003B57" }}></i>
                                </div>
                                <div className="tech-info">
                                    <h6 className="tech-name">SQLite</h6>
                                    <span className="tech-level">Intermediate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tools & Platforms */}
                <div className="skill-category">
                    <div className="category-header mb-4">
                        <i className="fas fa-tools category-icon"></i>
                        <h3 className="category-title">Tools & Platforms</h3>
                    </div>
                    <div className="row g-3">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="tech-card">
                                <div className="tech-icon-wrapper">
                                    <i className="fab fa-git-alt" style={{ color: "#F05032" }}></i>
                                </div>
                                <div className="tech-info">
                                    <h6 className="tech-name">Git</h6>
                                    <span className="tech-level">Advanced</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="tech-card">
                                <div className="tech-icon-wrapper">
                                    <i className="fab fa-github" style={{ color: "#181717" }}></i>
                                </div>
                                <div className="tech-info">
                                    <h6 className="tech-name">GitHub</h6>
                                    <span className="tech-level">Advanced</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="tech-card">
                                <div className="tech-icon-wrapper">
                                    <i className="fas fa-cloud" style={{ color: "#FF6C37" }}></i>
                                </div>
                                <div className="tech-info">
                                    <h6 className="tech-name">Postman</h6>
                                    <span className="tech-level">Advanced</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="tech-card">
                                <div className="tech-icon-wrapper">
                                    <i className="fas fa-rocket" style={{ color: "#000000" }}></i>
                                </div>
                                <div className="tech-info">
                                    <h6 className="tech-name">Vercel</h6>
                                    <span className="tech-level">Intermediate</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="tech-card">
                                <div className="tech-icon-wrapper">
                                    <i className="fas fa-globe" style={{ color: "#00C7B7" }}></i>
                                </div>
                                <div className="tech-info">
                                    <h6 className="tech-name">Netlify</h6>
                                    <span className="tech-level">Intermediate</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="tech-card">
                                <div className="tech-icon-wrapper">
                                    <i className="fas fa-infinity" style={{ color: "#000000" }}></i>
                                </div>
                                <div className="tech-info">
                                    <h6 className="tech-name">Infinity</h6>
                                    <span className="tech-level">Intermediate</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="tech-card">
                                <div className="tech-icon-wrapper">
                                    <i className="fas fa-code" style={{ color: "#007ACC" }}></i>
                                </div>
                                <div className="tech-info">
                                    <h6 className="tech-name">VS Code</h6>
                                    <span className="tech-level">Expert</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
    .section-title {
        font-size: 2.5rem;
        font-weight: 700;
        text-align: center;
        color: #1e293b;
        margin-bottom: 3rem;
    }

    .skill-category {
        padding: 2rem;
        background: #ffffff;
        border-radius: 16px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        border: 1px solid #f1f5f9;
    }

    .category-header {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .category-icon {
        font-size: 1.75rem;
        color: #3b82f6;
        background: #eff6ff;
        padding: 0.75rem;
        border-radius: 12px;
    }

    .category-title {
        font-size: 1.5rem;
        font-weight: 600;
        color: #1e293b;
        margin: 0;
    }

    .tech-card {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1.25rem;
        background: #f8fafc;
        border-radius: 12px;
        border: 1px solid #e2e8f0;
        transition: all 0.3s ease;
        cursor: pointer;
        height: 100%;
    }

    .tech-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        border-color: #3b82f6;
        background: #ffffff;
    }

    .tech-icon-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        background: white;
        border-radius: 10px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        flex-shrink: 0;
    }

    .tech-icon-wrapper i,
    .tech-icon-wrapper svg {
        font-size: 1.5rem;
    }

    .tech-info {
        flex: 1;
    }

    .tech-name {
        font-size: 1rem;
        font-weight: 600;
        color: #1e293b;
        margin: 0 0 0.25rem 0;
    }

    .tech-level {
        font-size: 0.8rem;
        font-weight: 500;
        color: #64748b;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
        .section-title {
            font-size: 2rem;
        }
        
        .category-header {
            flex-direction: column;
            text-align: center;
            gap: 0.5rem;
        }
        
        .tech-card {
            padding: 1rem;
        }
        
        .tech-icon-wrapper {
            width: 45px;
            height: 45px;
        }
    }
`}</style>
        </section>
    )
}

export default techCarousel
