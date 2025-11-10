import React from 'react'

function footer() {
  return (
    <footer>
      <div className="container text-center">
        <p className="fs-5 mb-4">Let's build something amazing together!</p>
        <div className="social-links mb-4">
          <a target='_blank' href="https://www.linkedin.com/in/sohail-shaikh-153467283" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a target='_blank' href="https://github.com/Sohailshaikh5656" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://twitter.com/yourusername" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com/yourusername" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p className="mb-0">&copy; 2025 Shaikh Sohel. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default footer
