import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    document.title = 'About Us - Tinker Tutor';
  }, []);

  return (
    <>
      {/* Header with background image and overlay */}
      <div className="container-fluid py-5 mb-5 page-header position-relative text-white">
        {/* Background image */}
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

        {/* Dark overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
  style={{
    backgroundColor: 'rgba(0, 20, 50, 0.4)', // dark bluish
    zIndex: 2
  }}
        ></div>

        {/* Text content */}
        <div className="container py-5 position-relative" style={{ zIndex: 3 }}>
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className="display-3 text-white animated slideInDown">About Us</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <Link className="text-white" to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">
                    About
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Content */}
      <div className="py-5">
        <Container>
          <h6 className="section-title bg-white text-start px-1 ">About us</h6>
          <h1 className="mb-4" style={{ color: '#41aff8' }}>Welcome to Tinker Tutor</h1>
          <p>
            Welcome to Tinker Tutor, where innovation meets education! We’re a dynamic edtech platform empowering students with hands-on skills in AI, robotics, IoT, and coding. Through interactive workshops and real-world projects, we turn curiosity into tangible tech mastery.
          </p>
          <p>
            We envision a world where every student—whether in cities, towns, or villages—can access cutting-edge tech education. By bridging the educational gap, we inspire young minds to become tomorrow’s innovators and problem-solvers.
          </p>

          <h3 className="mt-5 mb-3">Our Vision</h3>
          <p>
            At Tinker Tutor, we envision a world where learning is accessible to everyone, regardless of their location, background, or circumstances. We strive to break barriers and make education a transformative and inclusive experience for all.
          </p>

          <h3 className="mt-5 mb-3">A Commitment to Excellence</h3>
          <p>We craft industry-aligned curricula in AI, robotics, IoT, and coding (Python/C++/Java/Web). Collaborating with tech experts, we ensure our courses deliver:</p>
          <ul>
            <li>Practical, project-based learning.</li>
            <li>Up-to-date skills for real-world challenges.</li>
            <li>Structured pathways from fundamentals to advanced concepts.</li>
          </ul>

          <h3 className="mt-5 mb-3">Empowering Learners</h3>
          <p>We transform students from passive learners into creators:</p>
          <ul>
            <li>Build robots, smart devices, and apps in hands-on sessions.</li>
            <li>Solve community challenges through tech projects.</li>
            <li>Gain confidence with 90%+ practical workshop time.</li>
          </ul>

          <h3 className="mt-5 mb-3">Innovation in Learning</h3>
          <p>Learning by doing is our mantra. We pioneer:</p>
          <ul>
            <li>Interactive labs with electronic kits (sensors, microcontrollers).</li>
            <li>Live innovation bootcamps for prototyping solutions.</li>
            <li>"Fail-forward" environments that reward experimentation.</li>
          </ul>

          <p className="mt-4">Thank you! for being a part of Tinker Tutor.</p>
        </Container>
      </div>
    </>
  );
};

export default About;
