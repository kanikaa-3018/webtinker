import { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
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

const Counter = () => {
  const [schoolCount, setSchoolCount] = useState(0);
  const [studentCount, setStudentCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  const counterRef = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          startCounting();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  const startCounting = () => {
    const duration = 2000;
    const schoolTarget = 50;
    const studentTarget = 1000;
    const projectTarget = 50;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);

    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      setSchoolCount(Math.floor(progress * schoolTarget));
      setStudentCount(Math.floor(progress * studentTarget));
      setProjectCount(Math.floor(progress * projectTarget));

      if (frame === totalFrames) {
        clearInterval(counter);
        setSchoolCount(schoolTarget);
        setStudentCount(studentTarget);
        setProjectCount(projectTarget);
      }
    }, frameDuration);
  };

  return (
    <motion.div
      ref={counterRef}
      className="counter py-5"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <style>{`
        .fact-item {
          background-color: #ffffff;
          border-radius: 1rem;
          text-align: center;
          padding: 2rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 100%;
        }
        .fact-item:hover {
          transform: translateY(-10px) scale(1.03);
          box-shadow: 0 10px 25px rgba(65, 175, 248, 0.25);
        }
        .fact-item h1 {
          font-size: 2.5rem;
          color: #41aff8;
        }
        .fact-item img {
          max-height: 80px;
          object-fit: contain;
          border-radius: 0.75rem;
        }
      `}</style>

      <Container>
        <Row className="g-4 justify-content-center">
          <Col lg={4} md={6}>
            <motion.div className="fact-item text-center" variants={fadeInUp}>
              <img className="img-fluid mb-3" src="/images/school.jpg" alt="school" />
              <h1 className="mb-2">{schoolCount}+</h1>
              <h5>Schools</h5>
            </motion.div>
          </Col>
          <Col lg={4} md={6}>
            <motion.div className="fact-item text-center" variants={fadeInUp}>
              <img className="img-fluid mb-3" src="/images/students.jpg" alt="students" />
              <h1 className="mb-2">{studentCount}+</h1>
              <h5>Students</h5>
            </motion.div>
          </Col>
          <Col lg={4} md={6}>
            <motion.div className="fact-item text-center" variants={fadeInUp}>
              <img className="img-fluid mb-3" src="/images/projects.jpg" alt="projects" />
              <h1 className="mb-2">{projectCount}+</h1>
              <h5>Projects</h5>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Counter;
