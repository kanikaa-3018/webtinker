import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51RsSrOFYA6FO0ffZFQOiNhWfO79uCUco4pNnS802Aw0KHKsjBZYeQaORPCBNgPkAE8JRYdJUBTyT4L4jGayNb7WI00TZShLdbK"
);

const WebDev = () => {
  useEffect(() => {
    document.title = "Tinker Tutor: Web Development";
    AOS.init({ duration: 1000 });
  }, []);

  // State to track which modules are expanded
  const [expandedModules, setExpandedModules] = useState({});
   const item = {
    name: "Web Development",
    price: 1499,
    image: "https://example.com/iot-course.jpg",
    quantity: 1,
  };

  const handleEnroll = async (item, type) => {
    try {
      const res = await fetch(
        "http://localhost:8080/create-course-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ item, type }),
        }
      );

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Checkout session creation failed:", errorText);
        return;
      }

      const data = await res.json();

      if (!data.id) {
        console.error("Stripe session ID not returned");
        return;
      }

      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId: data.id });
    } catch (error) {
      console.error("Checkout error:", error);
    }
  };
  // Toggle module expansion
  const toggleModule = (moduleId) => {
    setExpandedModules((prev) => ({
      ...prev,
      [moduleId]: !prev[moduleId],
    }));
  };

  return (
    <>
      {/* Inline Styles */}
      <style>{`
        .page-header {
          background: linear-gradient(135deg, #ff9966, #ff5e62);
          position: relative;
          text-align: center;
        }

        .page-header .display-3 {
          font-weight: 700;
        }

        .back-button {
          position: absolute;
          top: 20px;
          right: 20px;
          z-index: 100;
          background-color: rgba(255, 255, 255, 0.2);
          color: white;
          border: 2px solid white;
          padding: 8px 15px;
          border-radius: 30px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .back-button:hover {
          background-color: white;
          color: #ff9966;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        .text-primary {
          color: #41aff8 !important;
        }

        .btn-primary {
          background-color: #41aff8;
          border-color: #41aff8;
          transition: 0.3s ease;
        }

        .btn-primary:hover {
          background-color: #1e8ed3;
          border-color: #1e8ed3;
          transform: scale(1.05);
        }

        .animated.bounce {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        .info-cards {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px;
          margin: 30px auto;
          max-width: 1200px;
        }
        
        .info-card {
          background: #e6f7ff;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          padding: 25px;
          width: 220px;
          text-align: center;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        
        .info-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
        }
        
        .info-card i {
          font-size: 2.5rem;
          color: #00758f;
          margin-bottom: 15px;
        }

        .learning-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
          margin-top: 30px;
        }
        
        .learning-card {
          background: linear-gradient(135deg, #f8faff, #e6f0ff);
          border-radius: 15px;
          padding: 25px;
          border-left: 5px solid #41aff8;
          transition: transform 0.3s;
        }
        
        .learning-card:hover {
          transform: translateY(-5px);
        }
        
        .learning-card i {
          font-size: 1.8rem;
          color: #41aff8;
          margin-bottom: 15px;
        }

        .module {
          border-bottom: 1px solid #eaeaea;
          margin-bottom: 10px;
        }
        
        .module-header {
          padding: 15px 20px;
          background: white;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
        
        .module-header:hover {
          background: #f5f9ff;
        }

        .module-content {
          padding: 0 20px;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-out, padding 0.3s ease;
        }

        .module-content.expanded {
          max-height: 500px;
          padding: 20px;
        }
        
        .lesson {
          padding: 10px 0 10px 20px;
          border-bottom: 1px dashed #eaeaea;
        }
        
        .lesson:last-child {
          border-bottom: none;
        }
        
        .lesson i {
          color: #0ed44c;
          margin-right: 10px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
          margin-top: 30px;
        }
        
        .project-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          transition: transform 0.3s;
        }
        
        .project-card:hover {
          transform: translateY(-10px);
        }
        
        .project-img {
          height: 180px;
          background: linear-gradient(135deg, #ff9966, #ff5e62);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 4rem;
        }
        
        .project-content {
          padding: 20px;
        }

        .testimonials {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
          margin-top: 30px;
        }
        
        .testimonial {
          background: white;
          border-radius: 15px;
          padding: 25px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          position: relative;
          border: 1px solid #eaeaea;
        }
        
        .student-info {
          display: flex;
          align-items: center;
          margin-top: 20px;
        }
        
        .student-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #41aff8;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          margin-right: 15px;
        }

        .pricing-card {
          background: linear-gradient(135deg, #ff6200ff, #5d1010ff);
          border-radius: 20px;
          color: white;
          padding: 40px;
          text-align: center;
          box-shadow: 0 15px 30px rgba(255, 153, 102, 0.3);
          max-width: 500px;
          margin: 30px auto;
        }
        
        .price {
          font-size: 3.5rem;
          font-weight: 700;
          margin: 20px 0;
        }
        
        .features-list {
          text-align: left;
          margin: 25px 0;
          padding-left: 20px;
        }
        
        .features-list li {
          margin-bottom: 12px;
          position: relative;
          padding-left: 30px;
        }
        
        .features-list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #0ed44c;
          font-weight: bold;
        }

        .floating {
          animation: float 4s ease-in-out infinite;
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

      {/* Header */}
      <div className="container-fluid page-header py-5 mb-5">
        <Link to="/courses" className="back-button">
          <i className="fas fa-arrow-left mr-2"></i> Back to Courses
        </Link>
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Web Development
          </h1>
          <p className="text-white animated slideInDown">
            Create your first website from scratch
          </p>
        </div>
      </div>

      {/* Info Cards */}
      <Container>
        <div className="info-cards">
          <div className="info-card floating">
            <i className="fas fa-clock"></i>
            <h3>12 Weeks</h3>
            <p>Flexible Learning</p>
          </div>

          <div
            className="info-card floating"
            style={{ animationDelay: "0.5s" }}
          >
            <i className="fas fa-book"></i>
            <h3>15 Lessons</h3>
            <p>Hands-on Projects</p>
          </div>

          <div className="info-card floating" style={{ animationDelay: "1s" }}>
            <i className="fas fa-user-graduate"></i>
            <h3>Beginner Friendly</h3>
            <p>No prior experience needed</p>
          </div>

          <div
            className="info-card floating"
            style={{ animationDelay: "1.5s" }}
          >
            <i className="fas fa-certificate"></i>
            <h3>Certificate</h3>
            <p>Upon Completion</p>
          </div>
        </div>
      </Container>

      {/* Content */}
      <Container className="py-4">
        {/* About Section */}
        <Row className="justify-content-center">
          <Col lg={10}>
            <div
              data-aos="fade-up"
              className="bg-white shadow rounded p-4 mb-5"
            >
              <div className="text-center mb-4">
                <h2 className="text-primary">About This Course</h2>
                <p>
                  Designed for school students to explore the exciting world of
                  web development
                </p>
              </div>

              <p className="mb-4" style={{ fontSize: "1.1rem" }}>
                Learn the fundamentals of web development in this comprehensive
                course. You'll master HTML, CSS, and JavaScript to build
                interactive websites from scratch. This course is designed for
                students who want to create their own web presence and
                understand how the web works.
              </p>

              <div className="learning-cards">
                <div className="learning-card">
                  <i className="fas fa-laptop-code"></i>
                  <h3>Coding Skills</h3>
                  <p>
                    Learn HTML, CSS, and JavaScript through practical, hands-on
                    exercises.
                  </p>
                </div>

                <div className="learning-card">
                  <i className="fas fa-paint-brush"></i>
                  <h3>Design Principles</h3>
                  <p>
                    Understand UI/UX design concepts to create beautiful,
                    user-friendly websites.
                  </p>
                </div>

                <div className="learning-card">
                  <i className="fas fa-rocket"></i>
                  <h3>Project Building</h3>
                  <p>
                    Create complete websites from scratch that you can showcase
                    in your portfolio.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Curriculum Section */}
        <Row className="justify-content-center">
          <Col lg={10}>
            <div
              data-aos="fade-up"
              className="bg-white shadow rounded p-4 mb-5"
            >
              <div className="text-center mb-4">
                <h2 className="text-primary">What You'll Learn</h2>
                <p>Step-by-step curriculum designed for young web developers</p>
              </div>

              <div className="curriculum">
                <div className="module">
                  <div
                    className="module-header"
                    onClick={() => toggleModule("module1")}
                  >
                    <h4 style={{ fontSize: "1.3rem", margin: 0 }}>
                      <i
                        className="fas fa-play-circle"
                        style={{ marginRight: "8px" }}
                      ></i>{" "}
                      Module 1: HTML Fundamentals
                    </h4>
                    <i
                      className={`fas ${
                        expandedModules.module1
                          ? "fa-chevron-up"
                          : "fa-chevron-down"
                      }`}
                    ></i>
                  </div>
                  <div
                    className={`module-content ${
                      expandedModules.module1 ? "expanded" : ""
                    }`}
                  >
                    <div className="lesson">
                      <i className="fas fa-video"></i> Introduction to HTML and
                      web structure
                    </div>
                    <div className="lesson">
                      <i className="fas fa-tasks"></i> HTML tags and elements
                    </div>
                    <div className="lesson">
                      <i className="fas fa-project-diagram"></i> Project: Create
                      your first webpage
                    </div>
                  </div>
                </div>

                <div className="module">
                  <div
                    className="module-header"
                    onClick={() => toggleModule("module2")}
                  >
                    <h4 style={{ fontSize: "1.3rem", margin: 0 }}>
                      <i
                        className="fas fa-play-circle"
                        style={{ marginRight: "8px" }}
                      ></i>{" "}
                      Module 2: CSS Styling
                    </h4>
                    <i
                      className={`fas ${
                        expandedModules.module2
                          ? "fa-chevron-up"
                          : "fa-chevron-down"
                      }`}
                    ></i>
                  </div>
                  <div
                    className={`module-content ${
                      expandedModules.module2 ? "expanded" : ""
                    }`}
                  >
                    <div className="lesson">
                      <i className="fas fa-video"></i> CSS selectors and
                      properties
                    </div>
                    <div className="lesson">
                      <i className="fas fa-palette"></i> Colors, fonts, and
                      layouts
                    </div>
                    <div className="lesson">
                      <i className="fas fa-project-diagram"></i> Project: Style
                      your webpage
                    </div>
                  </div>
                </div>

                <div className="module">
                  <div
                    className="module-header"
                    onClick={() => toggleModule("module3")}
                  >
                    <h4 style={{ fontSize: "1.3rem", margin: 0 }}>
                      <i
                        className="fas fa-play-circle"
                        style={{ marginRight: "8px" }}
                      ></i>{" "}
                      Module 3: Responsive Design
                    </h4>
                    <i
                      className={`fas ${
                        expandedModules.module3
                          ? "fa-chevron-up"
                          : "fa-chevron-down"
                      }`}
                    ></i>
                  </div>
                  <div
                    className={`module-content ${
                      expandedModules.module3 ? "expanded" : ""
                    }`}
                  >
                    <div className="lesson">
                      <i className="fas fa-video"></i> Media queries and
                      breakpoints
                    </div>
                    <div className="lesson">
                      <i className="fas fa-mobile-alt"></i> Mobile-first design
                      principles
                    </div>
                    <div className="lesson">
                      <i className="fas fa-project-diagram"></i> Project: Create
                      a responsive website
                    </div>
                  </div>
                </div>

                <div className="module">
                  <div
                    className="module-header"
                    onClick={() => toggleModule("module4")}
                  >
                    <h4 style={{ fontSize: "1.3rem", margin: 0 }}>
                      <i
                        className="fas fa-play-circle"
                        style={{ marginRight: "8px" }}
                      ></i>{" "}
                      Module 4: JavaScript Basics
                    </h4>
                    <i
                      className={`fas ${
                        expandedModules.module4
                          ? "fa-chevron-up"
                          : "fa-chevron-down"
                      }`}
                    ></i>
                  </div>
                  <div
                    className={`module-content ${
                      expandedModules.module4 ? "expanded" : ""
                    }`}
                  >
                    <div className="lesson">
                      <i className="fas fa-video"></i> Variables, functions, and
                      control flow
                    </div>
                    <div className="lesson">
                      <i className="fas fa-code"></i> DOM manipulation
                    </div>
                    <div className="lesson">
                      <i className="fas fa-project-diagram"></i> Project: Add
                      interactivity to your website
                    </div>
                  </div>
                </div>

                <div className="module">
                  <div
                    className="module-header"
                    onClick={() => toggleModule("module5")}
                  >
                    <h4 style={{ fontSize: "1.3rem", margin: 0 }}>
                      <i
                        className="fas fa-play-circle"
                        style={{ marginRight: "8px" }}
                      ></i>{" "}
                      Module 5: Final Project
                    </h4>
                    <i
                      className={`fas ${
                        expandedModules.module5
                          ? "fa-chevron-up"
                          : "fa-chevron-down"
                      }`}
                    ></i>
                  </div>
                  <div
                    className={`module-content ${
                      expandedModules.module5 ? "expanded" : ""
                    }`}
                  >
                    <div className="lesson">
                      <i className="fas fa-video"></i> Project planning and
                      wireframing
                    </div>
                    <div className="lesson">
                      <i className="fas fa-tasks"></i> Implementation and
                      testing
                    </div>
                    <div className="lesson">
                      <i className="fas fa-project-diagram"></i> Project: Build
                      a complete interactive website
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Projects Section */}
        <Row className="justify-content-center">
          <Col lg={10}>
            <div
              data-aos="fade-up"
              className="bg-white shadow rounded p-4 mb-5"
            >
              <div className="text-center mb-4">
                <h2 className="text-primary">Student Projects</h2>
                <p>See what you'll build during this course</p>
              </div>

              <div className="projects-grid">
                <div className="project-card">
                  <div className="project-img">
                    <i className="fas fa-user"></i>
                  </div>
                  <div className="project-content">
                    <h3>Personal Portfolio</h3>
                    <p>
                      Create a professional portfolio website to showcase your
                      skills and projects.
                    </p>
                  </div>
                </div>

                <div className="project-card">
                  <div className="project-img">
                    <i className="fas fa-store"></i>
                  </div>
                  <div className="project-content">
                    <h3>E-commerce Site</h3>
                    <p>
                      Build a simple online store with product listings and a
                      shopping cart.
                    </p>
                  </div>
                </div>

                <div className="project-card">
                  <div className="project-img">
                    <i className="fas fa-gamepad"></i>
                  </div>
                  <div className="project-content">
                    <h3>Interactive Game</h3>
                    <p>
                      Develop a browser-based game using HTML, CSS, and
                      JavaScript.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Testimonials */}
        <Row className="justify-content-center">
          <Col lg={10}>
            <div
              data-aos="fade-up"
              className="bg-white shadow rounded p-4 mb-5"
            >
              <div className="text-center mb-4">
                <h2 className="text-primary">What Students Say</h2>
                <p>Feedback from our young web developers</p>
              </div>

              <div className="testimonials">
                <div className="testimonial">
                  <p>
                    "I never thought I could build my own website! Now I've
                    created three different sites and even helped my school with
                    their website."
                  </p>
                  <div className="student-info">
                    <div className="student-avatar">VK</div>
                    <div>
                      <h4>Vikram Kapoor</h4>
                      <p>Grade 10, Delhi Public School</p>
                    </div>
                  </div>
                </div>

                <div className="testimonial">
                  <p>
                    "The step-by-step approach made learning web development so
                    much easier. I love being able to create anything I can
                    imagine!"
                  </p>
                  <div className="student-info">
                    <div className="student-avatar">PG</div>
                    <div>
                      <h4>Priya Gupta</h4>
                      <p>Grade 9, Sanskriti School</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Enrollment Section */}
        <Row className="justify-content-center">
          <Col lg={10}>
            <div
              data-aos="fade-up"
              className="bg-white shadow rounded p-4 mb-5"
            >
              <div className="text-center mb-4">
                <h2 className="text-primary">
                  Start Your Web Development Journey Today
                </h2>
                <p>Join thousands of students learning with Tinker Tutor</p>
              </div>

              <div className="pricing-card">
                <h2>Web Development Course</h2>
                {(() => {
                  const originalPrice = 4499;
                  const discountPercent = 20;
                  const discountedPrice = Math.round(
                    originalPrice * (1 - discountPercent / 100)
                  );
                  return (
                    <>
                      <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
                        <span
                          style={{
                            color: "#25b312ff",
                            fontSize: "2.2rem",
                            fontWeight: "bold",
                          }}
                        >
                          ₹{discountedPrice}
                        </span>
                        <span
                          style={{
                            textDecoration: "line-through",
                            color: "#d4dbd3ff",
                            display: "inline-block",
                            fontSize: "1.2rem",
                          }}
                        >
                          ₹{originalPrice}
                        </span>
                      </div>
                      <div
                        style={{
                          fontSize: "0.95rem",
                          color: "#1eff00ff",
                          marginBottom: "10px",
                        }}
                      >
                        🎉 Limited Time Offer:{" "}
                        <strong>{discountPercent}% OFF</strong>
                      </div>
                    </>
                  );
                })()}
                <p>Complete 12-week course with hands-on projects</p>

                <ul className="features-list">
                  <li>50+ hours of video content</li>
                  <li>5 complete web projects</li>
                  <li>Code editor and web hosting setup</li>
                  <li>Weekly live coding sessions</li>
                  <li>Certificate of completion</li>
                  <li>Access to student community</li>
                  <li>24/7 mentor support</li>
                </ul>

                <button
                  className="btn btn-primary px-4 py-2 rounded-pill animated bounce"
                  onClick={() =>
                    handleEnroll(
                      item,
                      "web" 
                    )
                  }
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WebDev;
