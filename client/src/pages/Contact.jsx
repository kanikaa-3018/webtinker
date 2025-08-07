import { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact Us - Tinker Tutor';
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState(""); // 'success' | 'error'
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setValidated(false);
      } else {
        setSubmitStatus("error");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setSubmitStatus("error");
    }

    setValidated(true);
  };

  return (
    <>
      {/* Header */}
      <div className="container-fluid py-5 mb-5 page-header position-relative text-white">
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: `url('/images/carousel-1.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 1,
            opacity: 0.4,
          }}
        ></div>

        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: 'rgba(0, 20, 50, 0.4)',
            zIndex: 2
          }}
        ></div>

        <div className="container py-5 position-relative" style={{ zIndex: 3 }}>
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className="display-3 text-white animated slideInDown">Contact Us</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <Link className="text-white" to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">
                    Contact
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <Container className="py-5">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">Contact Us</h6>
          <h1 className="mb-5">Get In Touch</h1>
        </div>
        <Row className="g-4">
          <Col lg={4} md={6}>
            <h5>Get In Touch</h5>
            <p className="mb-4">
              Have questions about our courses, workshops, or events? We're here to help!
            </p>
            <div className="d-flex align-items-center mb-3">
              <div className="bg-primary d-flex align-items-center justify-content-center" style={{ width: 50, height: 50 }}>
                <i className="fa fa-map-marker-alt text-white"></i>
              </div>
              <div className="ms-3">
                <h5 className="text-primary">Office</h5>
                <p className="mb-0">Near Rani Sati Mandir, Pilani, Rajasthan</p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3">
              <div className="bg-primary d-flex align-items-center justify-content-center" style={{ width: 50, height: 50 }}>
                <i className="fa fa-phone-alt text-white"></i>
              </div>
              <div className="ms-3">
                <h5 className="text-primary">Mobile</h5>
                <p className="mb-0">+91 6375829791</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div className="bg-primary d-flex align-items-center justify-content-center" style={{ width: 50, height: 50 }}>
                <i className="fa fa-envelope-open text-white"></i>
              </div>
              <div className="ms-3">
                <h5 className="text-primary">Email</h5>
                <p className="mb-0">tinkertutor@tinkertutor.tech</p>
              </div>
            </div>
          </Col>

          <Col lg={4} md={6}>
            <iframe
              className="rounded w-100 h-100"
              style={{ minHeight: '300px', border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.2!4d75.6!3d28.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDE4JzAwLjAiTiA3NcKwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tinker Tutor Location"
            ></iframe>
          </Col>

          <Col lg={4} md={12}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="g-3">
                <Col md={6}>
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">Please enter your name</Form.Control.Feedback>
                </Col>
                <Col md={6}>
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">Please enter a valid email</Form.Control.Feedback>
                </Col>
                <Col xs={12}>
                  <Form.Control
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">Please enter a subject</Form.Control.Feedback>
                </Col>
                <Col xs={12}>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">Please enter your message</Form.Control.Feedback>
                </Col>
                <Col xs={12}>
                  <Button className="btn btn-primary w-100 py-3" type="submit" style={{ backgroundColor: '#41aff8' }}>
                    Send Message
                  </Button>
                </Col>
              </Row>
            </Form>

            {/* Feedback message */}
            {submitStatus === "success" && (
              <Alert variant="success" className="mt-3">
                ✅ Your message has been sent successfully!
              </Alert>
            )}
            {submitStatus === "error" && (
              <Alert variant="danger" className="mt-3">
                ❌ Something went wrong. Please try again later.
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
