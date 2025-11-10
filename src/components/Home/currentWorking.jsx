import React from 'react'

function currentWorking() {
  return (
    //  Currently Working On 
    <section className="current-work">
        <div className="container">
            <h2 className="section-title">Currently Working On</h2>
            <div className="work-card">
                <h3>E-commerce Platform with Microservices Architecture</h3>
                <p className="text-muted">Building a scalable e-commerce solution using React for the frontend, Node.js microservices for the backend, and Docker for containerization. The platform will include advanced features like real-time inventory management, AI-powered recommendations, and secure payment integration.</p>
                <div className="progress mb-2">
                    <div className="progress-bar bg-primary" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="text-end text-muted small">75% Complete</p>
            </div>
        </div>
    </section>

  )
}

export default currentWorking
