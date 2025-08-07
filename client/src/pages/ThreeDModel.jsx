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

const ThreeDModel = () => {
  useEffect(() => {
    document.title = "Tinker Tutor: 3D Modeling";
    AOS.init({ duration: 1000 });
  }, []);

  const [expandedModules, setExpandedModules] = useState({});
 const item = {
    name: "Three-D Modeling & Design",
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
  const toggleModule = (moduleId) => {
    setExpandedModules((prev) => ({
      ...prev,
      [moduleId]: !prev[moduleId],
    }));
  };

  return (
    <>
      <style>{`
        .page-header {
          background: linear-gradient(135deg, #781b6cd6, #4c00fcff);
          position: relative;
          text-align: center;
        }
        .page-header .display-3 {
          font-weight: 700;
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
          background-color: #5a01a7;
          border-color: #5a01a7;
          transform: scale(1.05);
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
          color: #41aff8;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
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
          background: linear-gradient(135deg, #781b6cd6, #4c00fcff);
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
          background: linear-gradient(135deg, #a41b92ff, #4c00fcff);
          border-radius: 20px;
          color: white;
          padding: 40px;
          text-align: center;
          box-shadow: 0 15px 30px rgba(65, 175, 248, 0.3);
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
        
        .animated.bounce {
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
      `}</style>

      {/* Header */}
      <div className="container-fluid page-header py-5 mb-5">
        <Link to="/courses" className="back-button">
          <i className="fas fa-arrow-left mr-2"></i> Back to Courses
        </Link>
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            3D Modeling
          </h1>
          <p className="text-white animated slideInDown">
            Create your own 3D objects and animations
          </p>
        </div>
      </div>

      {/* Info Cards */}
      <Container>
        <div className="info-cards">
          <div className="info-card floating">
            <i className="fas fa-clock"></i>
            <h3>8 Weeks</h3>
            <p>Flexible Learning</p>
          </div>
          <div
            className="info-card floating"
            style={{ animationDelay: "0.5s" }}
          >
            <i className="fas fa-cube"></i>
            <h3>10 Projects</h3>
            <p>Portfolio Building</p>
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
                  Designed for school students to explore the world of 3D
                  modeling and design
                </p>
              </div>
              <p className="mb-4" style={{ fontSize: "1.1rem" }}>
                Explore the exciting world of 3D modeling and design. Learn to
                create three-dimensional objects, characters, and environments
                using industry-standard software. This course combines technical
                skills with creative expression, perfect for students interested
                in animation, game design, or product visualization.
              </p>
              <div className="learning-cards">
                <div className="learning-card">
                  <i className="fas fa-cube"></i>
                  <h3>3D Modeling Basics</h3>
                  <p>
                    Learn the fundamentals of creating 3D objects and
                    environments using professional software.
                  </p>
                </div>
                <div className="learning-card">
                  <i className="fas fa-paint-brush"></i>
                  <h3>Texturing & Materials</h3>
                  <p>
                    Master the art of applying realistic textures and materials
                    to your 3D creations.
                  </p>
                </div>
                <div className="learning-card">
                  <i className="fas fa-lightbulb"></i>
                  <h3>Lighting & Rendering</h3>
                  <p>
                    Discover how to light your scenes and render
                    professional-quality images and animations.
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
                <p>Step-by-step curriculum designed for young 3D artists</p>
              </div>

              <div className="curriculum">
                {[
                  {
                    key: "module1",
                    title: "Module 1: Introduction to 3D Modeling",
                    lessons: [
                      "Understanding 3D space and coordinates",
                      "Setting up your 3D workspace",
                      "Project: Create your first 3D object",
                    ],
                  },
                  {
                    key: "module2",
                    title: "Module 2: Basic Modeling Techniques",
                    lessons: [
                      "Primitive shapes and boolean operations",
                      "Extrusion, beveling, and subdivision",
                      "Project: Model a simple character",
                    ],
                  },
                  {
                    key: "module3",
                    title: "Module 3: Texturing and Materials",
                    lessons: [
                      "UV mapping fundamentals",
                      "Creating and applying materials",
                      "Project: Texture your character",
                    ],
                  },
                  {
                    key: "module4",
                    title: "Module 4: Lighting and Rendering",
                    lessons: [
                      "Types of lights and their effects",
                      "Setting up a scene for rendering",
                      "Project: Create a rendered scene",
                    ],
                  },
                  {
                    key: "module5",
                    title: "Module 5: Final Project",
                    lessons: [
                      "Planning your 3D scene",
                      "Implementation and refinement",
                      "Project: Complete 3D environment",
                    ],
                  },
                ].map((mod) => (
                  <div className="module" key={mod.key}>
                    <div
                      className="module-header"
                      onClick={() => toggleModule(mod.key)}
                    >
                      <h4 style={{ fontSize: "1.15rem", margin: 0 }}>
                        <i
                          className="fas fa-play-circle"
                          style={{ marginRight: "8px" }}
                        ></i>{" "}
                        {mod.title}
                      </h4>
                      <i
                        className={`fas ${
                          expandedModules[mod.key]
                            ? "fa-chevron-up"
                            : "fa-chevron-down"
                        }`}
                      ></i>
                    </div>
                    <div
                      className={`module-content ${
                        expandedModules[mod.key] ? "expanded" : ""
                      }`}
                    >
                      {mod.lessons.map((lesson, i) => (
                        <div className="lesson" key={i}>
                          <i className="fas fa-video"></i> {lesson}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
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
                <p>See what you'll create during this course</p>
              </div>
              <div className="projects-grid">
                <div className="project-card">
                  <div className="project-img">
                    <i className="fas fa-robot"></i>
                  </div>
                  <div className="project-content">
                    <h3>Character Modeling</h3>
                    <p>
                      Design and model a fully textured 3D character with
                      personality and detail.
                    </p>
                  </div>
                </div>
                <div className="project-card">
                  <div className="project-img">
                    <i className="fas fa-building"></i>
                  </div>
                  <div className="project-content">
                    <h3>Architectural Visualization</h3>
                    <p>
                      Create a realistic 3D environment of a building interior
                      or exterior.
                    </p>
                  </div>
                </div>
                <div className="project-card">
                  <div className="project-img">
                    <i className="fas fa-gamepad"></i>
                  </div>
                  <div className="project-content">
                    <h3>Game Asset Creation</h3>
                    <p>
                      Design low-poly game assets optimized for real-time
                      rendering in game engines.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Testimonials Section */}
        <Row className="justify-content-center">
          <Col lg={10}>
            <div
              data-aos="fade-up"
              className="bg-white shadow rounded p-4 mb-5"
            >
              <div className="text-center mb-4">
                <h2 className="text-primary">What Students Say</h2>
                <p>Feedback from our young 3D artists</p>
              </div>
              <div className="testimonials">
                <div className="testimonial">
                  <p>
                    "I've always wanted to create 3D models for games. This
                    course taught me everything I needed to get started and now
                    I'm building my own game assets!"
                  </p>
                  <div className="student-info">
                    <div className="student-avatar">RJ</div>
                    <div>
                      <h4>Rahul Joshi</h4>
                      <p>Grade 10, DPS International</p>
                    </div>
                  </div>
                </div>
                <div className="testimonial">
                  <p>
                    "The step-by-step approach made learning 3D modeling so much
                    easier than I expected. I'm amazed at what I can create
                    now!"
                  </p>
                  <div className="student-info">
                    <div className="student-avatar">AS</div>
                    <div>
                      <h4>Ananya Sharma</h4>
                      <p>Grade 9, Ryan International School</p>
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
                <h2 className="text-primary">Start Your 3D Journey Today</h2>
                <p>Join thousands of students learning with Tinker Tutor</p>
              </div>
              <div className="pricing-card">
                <h2>3D Modeling Course</h2>
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
                            color: "#25c210ff",
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
                <p>Complete 8-week course with portfolio projects</p>
                <ul className="features-list">
                  <li>35+ hours of video content</li>
                  <li>10 complete 3D projects</li>
                  <li>Software setup assistance</li>
                  <li>Weekly live modeling sessions</li>
                  <li>Certificate of completion</li>
                  <li>Access to student community</li>
                  <li>24/7 mentor support</li>
                </ul>
                <button
                  className="btn btn-primary px-4 py-2 rounded-pill animated bounce"
                  onClick={() =>
                    handleEnroll(
                      item,
                      "threed" 
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

export default ThreeDModel;
