import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <>
      {/* About Section */}
      <Container className="py-5">
        <Row className="g-5">
          <Col lg={6} className="wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: '400px' }}>
            <div className="position-relative h-100">
              <img
                className="img-fluid position-absolute w-100 h-100"
                src="/images/about.jpg"
                alt="About Tinker Tutor"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </Col>
          <Col lg={6} className="wow fadeInUp" data-wow-delay="0.3s">
            <h6 className="section-title bg-white text-start pe-3">About Us</h6>
            <h1 className="mb-4" style={{ color: '#41aff8' }}>Welcome to Tinker Tutor</h1>
            <p className="mb-4">
              At Tinker Tutor, we specialize in hands-on learning that empowers students from Grades 5 to 12
              to explore the exciting world of robotics, coding, and electronics. Our safe, guided, and skill-based
              approach ensures that every child learns by doing, gaining real-world knowledge while having fun.
            </p>
            <p className="mb-4">
              Trusted by parents and school educators, Tinker Tutor is designed to align with school curriculums
              and enhance academic learning with practical experience. Whether it's in the classroom or at home,
              we help build creativity, problem-solving abilities, and technical confidence in every learner.
            </p>
            <Row className="gy-2 gx-4 mb-4">
              <Col sm={6}><p className="mb-0"><i className="fa fa-arrow-right me-2"></i>Certified & Friendly Instructors</p></Col>
              <Col sm={6}><p className="mb-0"><i className="fa fa-arrow-right me-2"></i>Live Interactive Sessions</p></Col>
              <Col sm={6}><p className="mb-0"><i className="fa fa-arrow-right me-2"></i>Curriculum-Aligned Program</p></Col>
              <Col sm={6}><p className="mb-0"><i className="fa fa-arrow-right me-2"></i>Live Project-Based Sessions</p></Col>
              <Col sm={6}><p className="mb-0"><i className="fa fa-arrow-right me-2"></i>Personalized Learning Paths</p></Col>
              <Col sm={6}><p className="mb-0"><i className="fa fa-arrow-right me-2"></i>Certification and Recognition</p></Col>
            </Row>
            <Link to="/about" className="btn btn-primary py-3 px-5 mt-2" style={{ backgroundColor: '#41aff8' }}>
              Read More
            </Link>
          </Col>
        </Row>
      </Container>

      {/* Appreciation Section */}
      <div className="container-xxl py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <Container>
          <Row className="g-5 align-items-center">
            {/* Text */}
            <Col lg={6} className="wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title bg-light text-start pe-3">Appreciation</h6>
              <h1 className="mb-4" style={{ color: '#41aff8' }}>
                Adarsh Vidya Niketan Sr Sec School, Pilani
              </h1>
              <p className="mb-4">
                We are honored to receive this appreciation from Adharsh Public School, Pilani for conducting a
                successful robotics workshop for their students.
              </p>
              <p className="mb-4">
                The certificate recognizes the outstanding work of Ravi Prakash Sunia and his colleague Kapil Kumar in
                delivering hands-on robotics education and inspiring young minds.
              </p>
              <Row className="gy-2 gx-4 mb-4">
                <Col sm={6}><p className="mb-0"><i className="fa fa-check-circle text-primary me-2"></i>Robotics Workshop</p></Col>
                <Col sm={6}><p className="mb-0"><i className="fa fa-check-circle text-primary me-2"></i>Hands-on Learning</p></Col>
                <Col sm={6}><p className="mb-0"><i className="fa fa-check-circle text-primary me-2"></i>Student Engagement</p></Col>
                <Col sm={6}><p className="mb-0"><i className="fa fa-check-circle text-primary me-2"></i>Practical Skills</p></Col>
              </Row>
              <Link to="/workshop" className="btn btn-primary py-3 px-5 mt-2" style={{ backgroundColor: '#41aff8' }}>View More Workshops</Link>
            </Col>

            {/* Image */}
            <Col lg={6} className="wow fadeInUp" data-wow-delay="0.3s">
              <div className="text-center">
                <img
                  className="img-fluid rounded shadow"
                  src="/images/pic1.jpg"
                  alt="Appreciation from Adarsh Vidya Niketan"
                  style={{ maxHeight: '400px', width: 'auto' }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
