import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 text-center">
          <div className="card border-0 shadow-lg">
            <div className="card-body py-5">
              {/* 404 Icon */}
              <div className="mb-4">
                <i className="fas fa-exclamation-triangle display-1 text-warning"></i>
              </div>
              
              {/* Title */}
              <h1 className="display-4 fw-bold text-dark mb-3">404</h1>
              <h2 className="h3 text-muted mb-4">Page Not Found</h2>
              
              {/* Message */}
              <p className="lead text-muted mb-4">
                Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
              </p>
              
              {/* Action Buttons */}
              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                <Link to="/" className="btn btn-primary btn-lg">
                  <i className="fas fa-home me-2"></i>
                  Go Home
                </Link>
                <Link to="/projects" className="btn btn-outline-primary btn-lg">
                  <i className="fas fa-briefcase me-2"></i>
                  View Projects
                </Link>
                <button 
                  onClick={() => window.history.back()} 
                  className="btn btn-outline-secondary btn-lg"
                >
                  <i className="fas fa-arrow-left me-2"></i>
                  Go Back
                </button>
              </div>
              
              {/* Additional Help */}
              <div className="mt-5">
                <p className="text-muted small">
                  If you believe this is an error, please <Link to="/contact" className="text-decoration-none">contact me</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;