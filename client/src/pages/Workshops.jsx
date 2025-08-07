import { useEffect, useState } from 'react';
import { Container, Row, Col, Modal, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';

const Workshops = () => {
  useEffect(() => {
    document.title = 'Workshops - Tinker Tutor';
    AOS.init({ duration: 1000 });
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [activeModal, setActiveModal] = useState(1);

  const openModal = (modalId) => {
    setActiveModal(modalId);
    setShowModal(true);
  };

  const workshopData = [
    {
      id: 1,
      schoolName: 'Kids Garden Sr. Sec. School, Pilani.',
      workshopType: 'ROBOTICS WORKSHOP',
      date: '1st-5th July 2024',
      category: 'robotics',
      mainImage: 'images/gallery/school11.jpg',
      carouselImages: [
        'images/gallery/school11.jpg',
        'images/gallery/school12.jpg',
        'images/gallery/school13.jpg'
      ],
      description: 'Our robotics workshop at Kids Garden Sr. Sec. School, Pilani introduced students to the fundamentals of robotics, including basic circuitry, sensor integration, and programming autonomous robots. Students built and programmed their own robots to complete various challenges.',
      participants: '50 Participants',
      ageGroup: 'Class 9-12',
      highlights: ['Sensor', 'Arduino Programming', 'Sensor Integration', '2 Hands-on Project']
    },
    {
      id: 2,
      schoolName: 'Vidhyashram Sr. Sec. School, Pilani.',
      workshopType: 'IoT WORKSHOP',
      date: '23rd-29th July 2024',
      category: 'iot',
      mainImage: 'images/gallery/school21.jpg',
      carouselImages: [
        'images/gallery/school21.jpg',
        'images/gallery/school22.jpg',
        'images/gallery/school23.jpg'
      ],
      description: 'The IoT workshop at Vidhyashram Sr. Sec. School, Pilani covered the basics of Internet of Things technology, where students learned to connect sensors to the cloud, collect data, and control devices remotely.',
      participants: '60 Participants',
      ageGroup: 'Class 9-12',
      highlights: ['Sensor Networks', 'Cloud Connectivity', 'Arduino Programming', 'Remote Control']
    },
    {
      id: 3,
      schoolName: 'Durga Public Sr. Sec. School, Pilani.',
      workshopType: 'IoT WORKSHOP',
      date: '5th -12th August 2024',
      category: 'drone',
      mainImage: 'images/gallery/school31.jpg',
      carouselImages: [
        'images/gallery/school31.jpg',
        'images/gallery/school32.jpg',
        'images/gallery/school33.jpg'
      ],
      description: 'Our IoT workshop at Durga Public Sr. Sec. School, Pilani introduced students to Robotics and IoT sensors. Students build 2 projects. based on real world.',
      participants: '40 Participants',
      ageGroup: 'Class 9-12',
      highlights: ['IoT Sensor', 'Arduino IDE', 'Robots', 'Hands \' on Projects']
    },
    {
      id: 4,
      schoolName: 'Smt Jamuna Mishra Academy , Pilani.',
      workshopType: 'ROBOTICS AND WAR-BOTS WORKSHOP',
      date: '17th August 2024',
      category: 'robotics',
      mainImage: 'images/gallery/school41.jpg',
      carouselImages: [
        'images/gallery/school41.jpg',
        'images/gallery/school42.jpg',
        'images/gallery/school43.jpg'
      ],
      description: 'The advanced robotics workshop at Smt Jamuna Mishra Academy , Pilani covered complex robotics concepts including computer vision, machine learning for robotics, and sensor fusion. Warbot was shown to Students.',
      participants: '60 Participants',
      ageGroup: 'Class 9',
      highlights: ['IoT', 'Robots', 'AI', 'War Bot']
    },
    {
      id: 5,
      schoolName: 'Hemant Children Academy.',
      workshopType: 'IoT AND HTML & CSS WORKSHOP',
      date: '27th August 2024',
      category: 'iot',
      mainImage: 'images/gallery/school51.jpg',
      carouselImages: [
        'images/gallery/school51.jpg',
        'images/gallery/school52.jpg',
        'images/gallery/school53.jpg'
      ],
      description: 'This workshop at Hemant Children Academy focused on robotics and coding to make web page. Students get to know about the website building and robotics.',
      participants: '70 Participants',
      ageGroup: 'Class 8-10',
      highlights: ['Web Design', 'Coding', 'AI', 'Robotics']
    },
    {
      id: 6,
      schoolName: 'Smt Janki Devi Mandelia School, Pilani.',
      workshopType: 'ROBOTICS WORKSHOP',
      date: '31 August 2024',
      category: 'iot',
      mainImage: 'images/gallery/school61.png',
      carouselImages: [
        'images/gallery/school61.png',
        'images/gallery/school62.jpg',
        'images/gallery/school63.jpg'
      ],
      description: 'This workshop at Smt Janki Devi Mandelia School, Pilani focused on robotics and coding to make web page. Students get to know about the website building and robotics.',
      participants: '50 Participants',
      ageGroup: 'Class 9-10',
      highlights: ['Web Design', 'Coding', 'AI', 'Robotics']
    },
    {
      id: 7,
      schoolName: 'Adarsh Vidya Niketan Sr.Sec.School, Pilani.',
      workshopType: 'ROBOTICS WORKSHOP',
      date: '3rd September 2024',
      category: 'iot',
      mainImage: 'images/gallery/school71.jpg',
      carouselImages: [
        'images/gallery/school71.jpg',
        'images/gallery/school72.jpg',
        'images/gallery/school73.jpg'
      ],
      description: 'This workshop at Adarsh Vidya Niketan Sr.Sec.School, Pilani focused on robotics and IoT. Students get to know about the website building and robotics.',
      participants: '50 Participants',
      ageGroup: 'Class 9-10',
      highlights: ['IoT', 'Coding', 'AI', 'Robotics']
    },
    {
      id: 8,
      schoolName: 'Lohiya Public Sr.Sec.School, Chirawa.',
      workshopType: 'ROBOTICS WORKSHOP',
      date: '22nd November 2024',
      category: 'iot',
      mainImage: 'images/gallery/school81.jpg',
      carouselImages: [
        'images/gallery/school81.jpg',
        'images/gallery/school82.jpg',
        'images/gallery/school83.jpg'
      ],
      description: 'This workshop at Lohiya Public Sr.Sec.School,Chirawa focused on robotics and coding to make web page. Students get to know about the website building and robotics.',
      participants: '50 Participants',
      ageGroup: 'Class 6-8',
      highlights: ['IoT', 'Coding', 'Arduino', 'Robotics']
    }
  ];

  return (
    <>
      {/* Inline Styles */}
      <style>{`
        .page-header {
          position: relative;
          text-align: center;
        }

        .gallery-section {
          padding: 80px 0;
        }
        
        .gallery-filter {
          margin-bottom: 40px;
          text-align: center;
        }
        
        .filter-btn {
          background: transparent;
          border: 2px solid #41aff8;
          color: #41aff8;
          padding: 8px 20px;
          border-radius: 30px;
          margin: 5px;
          transition: all 0.3s;
          font-weight: 500;
        }
        
        .filter-btn:hover, .filter-btn.active {
          background: #41aff8;
          color: white;
        }
        
        .gallery-item {
          margin-bottom: 30px;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          transition: all 0.3s;
        }
        
        .gallery-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        
        .gallery-img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          transition: all 0.3s;
        }
        
        .gallery-item:hover .gallery-img {
          transform: scale(1.05);
        }
        
        .gallery-caption {
          padding: 20px;
          background: white;
          cursor: pointer;
        }
        
        .school-name {
          font-weight: 600;
          margin-bottom: 5px;
          color: #2c3e50;
          transition: color 0.3s;
        }
        
        .school-name:hover {
          color: #41aff8;
        }
        
        .workshop-type {
          color: #41aff8;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 10px;
          display: block;
        }
        
        .workshop-date {
          color: #6c757d;
          font-size: 13px;
        }
        
        .view-more-btn {
          background: #41aff8;
          color: white;
          border: none;
          padding: 10px 25px;
          border-radius: 30px;
          font-weight: 500;
          transition: all 0.3s;
          display: inline-block;
          margin-top: 30px;
        }
        
        .view-more-btn:hover {
          background: #3498db;
          transform: translateY(-2px);
          color: white;
        }
        
        .section-title {
          position: relative;
          margin-bottom: 40px;
        }
        
        .section-title h1 {
          font-weight: 700;
          color: #2c3e50;
        }
        
        .section-title p {
          color: #6c757d;
          max-width: 700px;
          margin: 0 auto;
        }
        
        /* Workshop Modal Styles */
        .workshop-modal .modal-dialog {
          max-width: 900px;
        }
        
        .workshop-modal .modal-content {
          border-radius: 15px;
          overflow: hidden;
        }
        
        .workshop-modal .modal-header {
          border-bottom: none;
          padding-bottom: 0;
          position: relative;
        }
        
        .workshop-modal .modal-header .btn-close {
          position: absolute;
          right: 20px;
          top: 20px;
          z-index: 10;
          background-color: white;
          opacity: 1;
          padding: 10px;
          border-radius: 50%;
        }
        
        .workshop-modal .modal-body {
          padding: 0;
        }
        
        .workshop-gallery {
          width: 100%;
          height: 400px;
          overflow: hidden;
        }
        
        .workshop-gallery img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .workshop-details {
          padding: 30px;
          text-align: center;
        }
        
        .workshop-title {
          font-size: 28px;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 15px;
        }
        
        .workshop-meta {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 25px;
        }
        
        .meta-item {
          display: flex;
          align-items: center;
          color: #6c757d;
        }
        
        .meta-item i {
          margin-right: 8px;
          color: #41aff8;
        }
        
        .workshop-description {
          color: #555;
          line-height: 1.8;
          max-width: 700px;
          margin: 0 auto 25px;
        }
        
        .participants-list {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 10px;
          margin-top: 20px;
        }
        
        .participants-title {
          font-weight: 600;
          margin-bottom: 15px;
          color: #2c3e50;
        }
        
        .participants {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
        }
        
        .participant-badge {
          background: #41aff8;
          color: white;
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 14px;
        }

        .carousel-item img {
          width: 100%;
          height: 400px;
          object-fit: cover;
        }
      `}</style>

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
              <h1 className="display-3 text-white animated slideInDown">Our Gallery</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item"><Link className="text-white" to="/">Home</Link></li>
                  <li className="breadcrumb-item text-white active" aria-current="page">Gallery</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <Container className="py-4">
        <div className="text-center">
          <h6 className="section-title bg-white text-center px-3">Workshops</h6>
          <h1 className="mb-4 text-uppercase">Schools We've Worked With</h1>
          <p className="text-uppercase text-center">Explore our journey through various schools where we've conducted Robotics and IoT workshops</p>
        </div>

        <Row className="gallery-container" data-aos="fade-up" data-aos-delay="300">
          {workshopData.map((workshop) => (
            <Col lg={4} md={6} key={workshop.id} className="gallery-item">
              <div className="gallery-img-container" onClick={() => openModal(workshop.id)}>
                <img src={workshop.mainImage} className="gallery-img" alt={workshop.schoolName} />
              </div>
              <div className="gallery-caption" onClick={() => openModal(workshop.id)}>
                <h5 className="school-name">{workshop.schoolName}</h5>
                <span className="workshop-type">{workshop.workshopType}</span>
                <span className="workshop-date"><i className="far fa-calendar-alt me-2"></i>{workshop.date}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        size="lg" 
        centered 
        className="workshop-modal"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="p-0">
          {workshopData.filter(workshop => workshop.id === activeModal).map((workshop) => (
            <div key={workshop.id}>
              <div className="workshop-gallery">
                <Carousel>
                  {workshop.carouselImages.map((image, index) => (
                    <Carousel.Item key={index}>
                      <img src={image} className="d-block w-100" alt={`${workshop.schoolName} ${index + 1}`} />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
              <div className="workshop-details p-4">
                <h3 className="workshop-title">{workshop.workshopType}</h3>
                <div className="workshop-meta">
                  <div className="meta-item"><i className="fas fa-school"></i> <span>{workshop.schoolName}</span></div>
                  <div className="meta-item"><i className="far fa-calendar-alt"></i> <span>{workshop.date}</span></div>
                  <div className="meta-item"><i className="fas fa-users"></i> <span>{workshop.participants}</span></div>
                  <div className="meta-item"><i className="fas fa-graduation-cap"></i> <span>{workshop.ageGroup}</span></div>
                </div>
                <p className="workshop-description">{workshop.description}</p>
                <div className="participants-list">
                  <h5 className="participants-title">Workshop Highlights</h5>
                  <div className="participants">
                    {workshop.highlights.map((highlight, index) => (
                      <span key={index} className="participant-badge">{highlight}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Modal.Body>
      </Modal>

      <Container className="py-5">
        <Row className="g-5 align-items-center">
          <Col lg={6} className="wow fadeInUp" data-aos="fade-up" data-aos-delay="100">
            <h6 className="section-title bg-white text-start text-primary pe-3">For Schools</h6>
            <h1 className="mb-4">Partner With Us</h1>
            <p className="mb-4">We offer specialized STEM workshops for schools that can be customized to fit your curriculum and schedule. Our workshops provide hands-on learning experiences that complement classroom education.</p>
            <p className="mb-4">Benefits of partnering with Tinker Tutor:</p>
            <div className="row gy-2 gx-4 mb-4">
              <div className="col-sm-6"><p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Customized curriculum</p></div>
              <div className="col-sm-6"><p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>All materials provided</p></div>
              <div className="col-sm-6"><p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Experienced instructors</p></div>
              <div className="col-sm-6"><p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Flexible scheduling</p></div>
              <div className="col-sm-6"><p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Affordable pricing</p></div>
              <div className="col-sm-6"><p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Certificates for students</p></div>
            </div>
            <a className="btn btn-primary py-3 px-5 mt-2" style={{ backgroundColor: '#41aff8' }} href="/contact">Contact Us For Details</a>
          </Col>
          <Col lg={6} className="wow fadeInUp" data-aos="fade-up" data-aos-delay="300">
            <img src="images/gallery/school44.jpg" className="img-fluid rounded" alt="School Partnership" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Workshops;