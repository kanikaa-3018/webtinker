import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const HomeCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container-fluid p-0 mb-4">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="header-carousel position-relative"
        controls={true}
        indicators={true}
        fade={true}
      >
        {/* Slide 1 */}
        <Carousel.Item className="position-relative">
          <img
            className="img-fluid"
            src="/images/carousel-1.jpg"
            alt="Empowering Young Innovators"
            style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
          />
          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
            style={{ background: 'rgba(24, 29, 56, .7)' }}
          >
            <Container>
              <Row className="justify-content-start">
                <Col sm={10} lg={8}>
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.h5
                      className="text-uppercase mb-3"
                      style={{ color: '#41aff8' }}
                      variants={fadeInUp}
                    >
                      Empowering Young Innovators
                    </motion.h5>

                    <motion.h1
                      className="display-3 text-white"
                      variants={fadeInUp}
                    >
                      A Safe & Skill-Based Learning Platform for Students
                    </motion.h1>

                    <motion.p
                      className="text-white mb-4 pb-2"
                      variants={fadeInUp}
                    >
                      Tinker Tutor blends technology and creativity to help students learn robotics, coding, and electronics in a fun, guided, and safe environment—ideal for schools and home learning.
                    </motion.p>

                    <motion.div className="d-flex" variants={fadeInUp}>
                      <Link
                        to="/about"
                        className="btn py-md-3 px-md-5 me-3"
                        style={{
                          backgroundColor: '#41aff8',
                          color: '#fff',
                          border: 'none',
                        }}
                      >
                        Read More
                      </Link>
                      <a
                        href="https://chat.whatsapp.com/KpPRurrJWpB00lA4tUWoMF"
                        className="btn btn-light py-md-3 px-md-5"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Join Now
                      </a>
                    </motion.div>
                  </motion.div>
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item className="position-relative">
          <img
            className="img-fluid"
            src="/images/carousel-2.jpg"
            alt="Learn, Build & Shine"
            style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
          />
          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
            style={{ background: 'rgba(24, 29, 56, .7)' }}
          >
            <Container>
              <Row className="justify-content-start">
                <Col sm={10} lg={8}>
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.h5
                      className="text-uppercase mb-3"
                      style={{ color: '#41aff8' }}
                      variants={fadeInUp}
                    >
                      Welcome to Tinker Tutor
                    </motion.h5>

                    <motion.h1
                      className="display-3 text-white"
                      variants={fadeInUp}
                    >
                      Learn, Build & Shine with Real-World Skills
                    </motion.h1>

                    <motion.p
                      className="text-white mb-4 pb-2"
                      variants={fadeInUp}
                    >
                      Dive into exciting tech projects like smartwatches, robots, and home automation. Learn by doing—and earn certificates that make your learning count.
                    </motion.p>

                    <motion.div className="d-flex" variants={fadeInUp}>
                      <Link
                        to="/about"
                        className="btn py-md-3 px-md-5 me-3"
                        style={{
                          backgroundColor: '#41aff8',
                          color: '#fff',
                          border: 'none',
                        }}
                      >
                        Read More
                      </Link>
                      <a
                        href="https://chat.whatsapp.com/KpPRurrJWpB00lA4tUWoMF"
                        className="btn btn-light py-md-3 px-md-5"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Join Now
                      </a>
                    </motion.div>
                  </motion.div>
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
