import React from 'react'

function heroSection() {
    const handleResume = () => {
        const resumeUrl = '/my-resume/ShaikhSohel_FullStack.pdf';

        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Sohel-FullStackResume.pdf';

        // Append to body, click, and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const handleHireMe = () => {
        const email = 'shaikhsohai1131@gmail.com';
        const subject = 'Hire Inquiry - Full Stack Developer Position';
        const body = `Hello Sohel,\n\nI came across your portfolio and would like to discuss potential opportunities.\n\nBest regards,\n[Your Name]`;

        // Open default email client
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
    return (
        <section className="hero-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-lg-1 order-2">
                        <h1 className="headline">I'm <span>Shaikh Sohel</span> — Full Stack Developer <br />(React | Node.js | Laravel)</h1>
                        <p className="bio">Passionate developer with expertise in building scalable web applications. I transform ideas into functional, user-friendly digital solutions with clean code and modern technologies.</p>
                        <div className="d-flex flex-wrap gap-3">
                            <a onClick={() => { handleResume() }} className="btn btn-primary-custom text-white">
                                <i className="fas fa-file-download me-2"></i>Download Resume
                            </a>
                            <a onClick={() => { handleHireMe() }} className="btn btn-outline-custom">
                                <i className="fas fa-briefcase me-2"></i>Hire Me
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center order-lg-2 order-1 mb-4 mb-lg-0">
                        <img src="/my_profileImage.jpeg" alt="Shaikh Sohel" className="profile-img" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default heroSection
