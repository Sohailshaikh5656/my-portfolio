import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';

function Contact() {
  const [btn, setBtn] = useState(false);
  document.getElementsByTagName("title")[0].innerText = "Shaikh Sohel - Contact";
  const initialState = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  // Fixed validation schema
  const validateSchema = Yup.object({
    name: Yup.string().min(3, "Name must be at least 3 characters").required("Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    subject: Yup.string().min(8, "Subject must be at least 8 characters").required("Subject is required"),
    message: Yup.string().min(16, "Message must be at least 16 characters").required("Message is required") // Fixed this line
  });

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: validateSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        setBtn(true);
        console.log("Values ", values);
         const templateParams = {
          from_name: values.name,
          from_email: values.email,
          subject: values.subject,
          message: values.message,
          to_email: 'shaikhsohai1131@gmail.com'
        };

        // Send email using EmailJS
        await emailjs.send(
          'service_wqm7r45', // Get from EmailJS dashboard
          'template_muzrssb', // Get from EmailJS dashboard
          templateParams,
          'yi9s4efahnOOYqqP0' // Get from EmailJS dashboard
        );
        resetForm();
        toast.success("Message Sent!");
        setTimeout(() => {
          setBtn(false);
        }, 2000);
      } catch (error) {
        toast.error("Error In Sending Message!");
        console.log("Error: ", error);
        setBtn(false);
      }
    }
  });

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'shaikhsohai1131@gmail.com',
      link: 'mailto:shaikhsohai1131@gmail.com',
      color: 'text-danger'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: '+91 63546 21866',
      link: 'tel:+916354621866',
      color: 'text-success'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'Ahmedabad, Gujarat, India',
      link: '#',
      color: 'text-primary'
    }
  ];

  const socialLinks = [
    {
      icon: 'fab fa-linkedin',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sohail-shaikh-153467283',
      color: 'bg-linkedin'
    },
    {
      icon: 'fab fa-github',
      name: 'GitHub',
      url: 'https://github.com/Sohailshaikh5656',
      color: 'bg-dark'
    },
    {
      icon: 'fas fa-code',
      name: 'LeetCode',
      url: 'https://leetcode.com/u/Sohail56/',
      color: 'bg-warning'
    },
    {
      icon: 'fab fa-twitter',
      name: 'Twitter',
      url: '#',
      color: 'bg-info'
    },
    {
      icon: 'fab fa-instagram',
      name: 'Instagram',
      url: '#',
      color: 'bg-instagram'
    }
  ];

  return (
    <div className="container my-5">
      <ToastContainer />
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold text-primary mb-3">Get In Touch</h1>
        <p className="lead text-muted mb-4">
          I'm always open to discussing new opportunities and interesting projects
        </p>
      </div>

      <div className="row">
        {/* Contact Information */}
        <div className="col-lg-4 mb-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h3 className="h4 fw-bold text-dark mb-4">Let's Connect</h3>
              <p className="text-muted mb-4">
                Feel free to reach out for collaborations, job opportunities, or just to say hello!
              </p>

              {/* Contact Details */}
              <div className="mb-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="d-flex align-items-center mb-3">
                    <div className={`${item.color} me-3`} style={{ fontSize: '1.5rem', width: '30px' }}>
                      <i className={item.icon}></i>
                    </div>
                    <div>
                      <h6 className="fw-bold text-dark mb-1">{item.title}</h6>
                      <a 
                        href={item.link} 
                        className="text-muted text-decoration-none"
                        target={item.link.startsWith('http') ? '_blank' : '_self'}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h6 className="fw-bold text-dark mb-3">Follow Me</h6>
                <div className="d-flex flex-wrap gap-2">
                  {socialLinks.map((social, index) => (
                    social.url !== "#" ? (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn ${social.color} ${social.name === "LinkedIn"?"":"text-white"} btn-sm d-flex align-items-center`}
                        style={{ borderRadius: '8px' }}
                      >
                        <i className={`${social.icon} me-2`}></i>
                        {social.name}
                      </a>
                    ) : (
                      <button
                        key={index}
                        className={`btn ${social.color} text-white btn-sm d-flex align-items-center`}
                        style={{ borderRadius: '8px', opacity: 0.5 }}
                        disabled
                      >
                        <i className={`${social.icon} me-2`}></i>
                        {social.name}
                      </button>
                    )
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h3 className="h4 fw-bold text-dark mb-4">Send Me a Message</h3>

              <form onSubmit={formik.handleSubmit} noValidate>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label fw-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      className={`form-control ${formik.errors.name && formik.touched.name ? 'is-invalid' : ''}`}
                      id="name"
                      name="name"
                      value={formik.values.name}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      placeholder="Enter your full name"
                    />
                    {formik.errors.name && formik.touched.name && (
                      <div className='text-danger small mt-1'>{formik.errors.name}</div>
                    )}
                  </div>
                  
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label fw-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className={`form-control ${formik.errors.email && formik.touched.email ? 'is-invalid' : ''}`}
                      id="email"
                      name="email"
                      value={formik.values.email}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      placeholder="Enter your email address"
                    />
                    {formik.errors.email && formik.touched.email && (
                      <div className='text-danger small mt-1'>{formik.errors.email}</div>
                    )}
                  </div>
                  
                  <div className="col-12">
                    <label htmlFor="subject" className="form-label fw-semibold">
                      Subject *
                    </label>
                    <input
                      type="text"
                      className={`form-control ${formik.errors.subject && formik.touched.subject ? 'is-invalid' : ''}`}
                      id="subject"
                      name="subject"
                      value={formik.values.subject}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      placeholder="What's this about?"
                    />
                    {formik.errors.subject && formik.touched.subject && (
                      <div className='text-danger small mt-1'>{formik.errors.subject}</div>
                    )}
                  </div>
                  
                  <div className="col-12">
                    <label htmlFor="message" className="form-label fw-semibold">
                      Message *
                    </label>
                    <textarea
                      className={`form-control ${formik.errors.message && formik.touched.message ? 'is-invalid' : ''}`}
                      id="message"
                      name="message"
                      rows="6"
                      value={formik.values.message}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      placeholder="Tell me about your project or inquiry..."
                    ></textarea>
                    {formik.errors.message && formik.touched.message && (
                      <div className='text-danger small mt-1'>{formik.errors.message}</div>
                    )}
                  </div>
                  
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg px-5"
                      disabled={btn}
                    >
                      {btn ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-paper-plane me-2"></i>
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of your component remains the same */}
      {/* ... */}
    </div>
  );
}

export default Contact;