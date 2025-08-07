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

const MySQL = () => {
  useEffect(() => {
    document.title = "Tinker Tutor: MySQL Database";
    AOS.init({ duration: 1000 });
  }, []);

  // State to track which modules are expanded
  const [expandedModules, setExpandedModules] = useState({});
  const item = {
    name: "MySQL Essentials",
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
          background: linear-gradient(135deg, #00758f, #f29111);
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
          color: #00758f;
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
          border-left: 5px solid #00758f;
          transition: transform 0.3s;
        }
        
        .learning-card:hover {
          transform: translateY(-5px);
        }
        
        .learning-card i {
          font-size: 1.8rem;
          color: #00758f;
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
          background: linear-gradient(135deg, #00758f, #f29111);
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
          background: #00758f;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          margin-right: 15px;
        }

        .pricing-card {
          background: linear-gradient(135deg, #00758f, #f29111);
          border-radius: 20px;
          color: white;
          padding: 40px;
          text-align: center;
          box-shadow: 0 15px 30px rgba(0, 117, 143, 0.3);
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
            MySQL Database
          </h1>
          <p className="text-white animated slideInDown">
            Learn database concepts with fun projects
          </p>
        </div>
      </div>

      {/* Info Cards */}
      <Container>
        <div className="info-cards">
          <div className="info-card floating">
            <i className="fas fa-clock"></i>
            <h3>10 Weeks</h3>
            <p>Flexible Learning</p>
          </div>

          <div
            className="info-card floating"
            style={{ animationDelay: "0.5s" }}
          >
            <i className="fas fa-book"></i>
            <h3>12 Lessons</h3>
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
                  Designed for school students to explore the world of database
                  management
                </p>
              </div>

              <p className="mb-4" style={{ fontSize: "1.1rem" }}>
                Learn the fundamentals of database design and management with
                MySQL. This course will teach you how to create, query, and
                maintain relational databases. Perfect for students who want to
                understand how data is stored and retrieved in modern
                applications.
              </p>

              <div className="learning-cards">
                <div className="learning-card">
                  <i className="fas fa-database"></i>
                  <h3>Database Design</h3>
                  <p>
                    Learn how to design efficient and scalable database
                    structures for various applications.
                  </p>
                </div>

                <div className="learning-card">
                  <i className="fas fa-code"></i>
                  <h3>SQL Mastery</h3>
                  <p>
                    Master the SQL language to create, manipulate, and retrieve
                    data from databases.
                  </p>
                </div>

                <div className="learning-card">
                  <i className="fas fa-server"></i>
                  <h3>Database Administration</h3>
                  <p>
                    Learn essential database administration tasks to maintain
                    and optimize MySQL databases.
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
                <p>
                  Step-by-step curriculum designed for young database
                  enthusiasts
                </p>
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
                      Module 1: Database Fundamentals
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
                      <i className="fas fa-video"></i> Introduction to databases
                      and MySQL
                    </div>
                    <div className="lesson">
                      <i className="fas fa-tasks"></i> Setting up MySQL
                      environment
                    </div>
                    <div className="lesson">
                      <i className="fas fa-project-diagram"></i> Project: Create
                      your first database
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
                      Module 2: SQL Basics
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
                      <i className="fas fa-video"></i> SQL syntax and commands
                    </div>
                    <div className="lesson">
                      <i className="fas fa-code"></i> Creating and modifying
                      tables
                    </div>
                    <div className="lesson">
                      <i className="fas fa-project-diagram"></i> Project: Build
                      a simple database schema
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
                      Module 3: Data Manipulation
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
                      <i className="fas fa-video"></i> INSERT, UPDATE, and
                      DELETE operations
                    </div>
                    <div className="lesson">
                      <i className="fas fa-search"></i> SELECT queries and
                      filtering data
                    </div>
                    <div className="lesson">
                      <i className="fas fa-project-diagram"></i> Project:
                      Populate and manipulate a database
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
                      Module 4: Advanced Queries
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
                      <i className="fas fa-video"></i> JOINs and relationships
                    </div>
                    <div className="lesson">
                      <i className="fas fa-chart-bar"></i> Aggregation and
                      grouping
                    </div>
                    <div className="lesson">
                      <i className="fas fa-project-diagram"></i> Project: Create
                      complex queries
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
                      <i className="fas fa-video"></i> Database design planning
                    </div>
                    <div className="lesson">
                      <i className="fas fa-tasks"></i> Implementation and
                      optimization
                    </div>
                    <div className="lesson">
                      <i className="fas fa-project-diagram"></i> Project: Build
                      a complete database application
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
                    <i className="fas fa-shopping-cart"></i>
                  </div>
                  <div className="project-content">
                    <h3>E-commerce Database</h3>
                    <p>
                      Design and implement a database for an online store with
                      products, customers, and orders.
                    </p>
                  </div>
                </div>

                <div className="project-card">
                  <div className="project-img">
                    <i className="fas fa-school"></i>
                  </div>
                  <div className="project-content">
                    <h3>School Management System</h3>
                    <p>
                      Create a database for managing students, teachers,
                      classes, and grades.
                    </p>
                  </div>
                </div>

                <div className="project-card">
                  <div className="project-img">
                    <i className="fas fa-film"></i>
                  </div>
                  <div className="project-content">
                    <h3>Movie Database</h3>
                    <p>
                      Build a database for storing and querying information
                      about movies, actors, and reviews.
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
                <p>Feedback from our young database developers</p>
              </div>

              <div className="testimonials">
                <div className="testimonial">
                  <p>
                    "I never thought databases could be so interesting! Now I
                    understand how all the apps I use store their data."
                  </p>
                  <div className="student-info">
                    <div className="student-avatar">AK</div>
                    <div>
                      <h4>Arjun Kumar</h4>
                      <p>Grade 11, Army Public School</p>
                    </div>
                  </div>
                </div>

                <div className="testimonial">
                  <p>
                    "The projects were challenging but so rewarding. I built a
                    complete database for my school's library system!"
                  </p>
                  <div className="student-info">
                    <div className="student-avatar">SP</div>
                    <div>
                      <h4>Sneha Patel</h4>
                      <p>Grade 10, Delhi Public School</p>
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
                  Start Your Database Journey Today
                </h2>
                <p>Join thousands of students learning with Tinker Tutor</p>
              </div>

              <div className="pricing-card">
                <h2>MySQL Database Course</h2>
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
                            color: "#25d50dff",
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
                <p>Complete 10-week course with hands-on projects</p>

                <ul className="features-list">
                  <li>40+ hours of video content</li>
                  <li>3 complete database projects</li>
                  <li>MySQL environment setup</li>
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
                      "mysql" 
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

export default MySQL;
