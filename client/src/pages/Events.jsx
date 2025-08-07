import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Modal, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Events = () => {
  useEffect(() => {
    document.title = 'STEM Events & Workshops - Tinker Tutor';
  }, []);

  const [showWorkshopModal, setShowWorkshopModal] = useState(false);
  const [showQuizModal, setShowQuizModal] = useState(false);

  const handleWorkshopModalClose = () => setShowWorkshopModal(false);
  const handleWorkshopModalShow = () => setShowWorkshopModal(true);

  const handleQuizModalClose = () => setShowQuizModal(false);
  const handleQuizModalShow = () => setShowQuizModal(true);

  const events = [
    {
      id: 1,
      title: 'Robotics & IoT Workshop',
      description: 'A 3-day hands-on workshop where 35 students from Lohiya School, Chirawa built 6 real-world Robotics and IoT projects with Tinker Tutor.',
      image: '/images/event/workshop/workshop1.jpg',
      date: { day: '1-3rd', month: 'April' },
      location: 'Lohiya School, Chirawa',
      status: 'Completed',
      participants: '35',
      tags: ['Robotics', 'IoT'],
      showModal: handleWorkshopModalShow,
    },
    {
      id: 2,
      title: 'Tinker Tutor Science & Aptitude Challenge 2025',
      description: "An exciting quiz competition testing students' knowledge in science and mathematics with practical problem-solving challenges.",
      image: 'images/event/quiz/quiz1.jpg',
      date: { day: '9', month: 'April 2025' },
      location: 'BKBIET, Pilani',
      status: 'Completed',
      participants: '200+',
      tags: ['Science', 'Maths'],
      showModal: handleQuizModalShow,
    }
  ];

  return (
    <>
      {/* Page Header */}
      <div className="container-fluid py-5 mb-5 page-header position-relative text-white">
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: `url('/images/carousel-1.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1,
            opacity: 0.4,
          }}
        ></div>
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: 'rgba(0, 20, 50, 0.4)', zIndex: 2 }}
        ></div>
        <div className="container py-5 position-relative" style={{ zIndex: 3 }}>
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className="display-3 text-white animated slideInDown">Events</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item"><Link className="text-white" to="/">Home</Link></li>
                  <li className="breadcrumb-item text-white active" aria-current="page">Events</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <Container className="py-5">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">Events</h6>
        </div>
        <Row className="g-4">
          {events.map(event => (
            <Col lg={4} md={6} className="wow fadeInUp" data-wow-delay="0.5s" key={event.id}>
              <Card className="event-card h-100 shadow-sm border rounded-4 overflow-hidden bg-white">
  <div className="position-relative">
    <Card.Img
      className="img-fluid w-100 event-img"
      src={event.image}
      alt={event.title}
    />
    <div className="event-date">
      <span className="event-day">{event.date.day}</span>
      <span className="event-month">{event.date.month}</span>
    </div>
    <span className={`event-status ${event.status === 'Completed' ? 'status-completed' : 'status-upcoming'}`}>
      {event.status}
    </span>
  </div>
  <Card.Body className="p-4 d-flex flex-column">
    <div className="mb-3">
      {event.tags.map((tag, idx) => (
        <span className="event-tag me-2" key={idx}>{tag}</span>
      ))}
    </div>
    <Card.Title className="mb-3">{event.title}</Card.Title>
    <Card.Text className="flex-grow-1">{event.description}</Card.Text>
    <div className="d-flex justify-content-between align-items-center mt-3">
      <small>
        <i className="far fa-calendar-alt text-primary me-2"></i>
        {`${event.date.day} ${event.date.month}`}
      </small>
      <small>
        <i className="fa fa-users text-primary me-2"></i>
        {event.participants} Participants
      </small>
    </div>
    <div className="text-center mt-4">
      <button className="btn event-details-btn" onClick={event.showModal}>
        View Details
      </button>
    </div>
  </Card.Body>
</Card>

            </Col>
          ))}
        </Row>
      </Container>

      {/* Workshop Modal */}
      <Modal show={showWorkshopModal} onHide={handleWorkshopModalClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Robotics & IoT Workshop</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel className="mb-4">
            <Carousel.Item>
              <img className="d-block w-100" src="/images/event/workshop/robotics0.jpg" alt="Workshop photo 1" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="/images/event/workshop/robotics1.jpg" alt="Workshop photo 2" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="/images/event/workshop/robotics2.jpg" alt="Workshop photo 3" />
            </Carousel.Item>
          </Carousel>
          <div className="mb-3">
            <span className="event-tag me-2">Robotics</span>
            <span className="event-tag me-2">IoT</span>
          </div>
          <h5>Robotics Workshop</h5>
          <p>This intensive 3-day workshop was conducted at Lohiya School, Chirawa from April 1-3, 2025. Students learned practical applications of Robotics and IoT through hands-on projects.</p>
          <h5 className="mt-4">Key Highlights</h5>
          <ul>
            <li>35 students participated from grades 8-12</li>
            <li>Built 6 different projects including bluetooth car</li>
            <li>Certificates awarded to all participants</li>
            <li>Free Refreshments provided</li>
          </ul>
          <div className="event-stats mt-4">
            <div className="d-flex justify-content-between">
              <div><i className="far fa-calendar-alt text-primary me-2"></i><span>1–3 April, 2025</span></div>
              <div><i className="fa fa-users text-primary me-2"></i><span>35 Participants</span></div>
              <div><i className="fas fa-project-diagram text-primary me-2"></i><span>6 Projects</span></div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Quiz Modal */}
      <Modal show={showQuizModal} onHide={handleQuizModalClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Tinker Tutor Science & Aptitude Challenge 2025</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel className="mb-4">
            <Carousel.Item>
              <img className="d-block w-100" src="/images/event/quiz/quiz9.jpg" alt="Quiz photo 1" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="/images/event/quiz/quiz2.jpg" alt="Quiz photo 2" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="/images/event/quiz/quiz3.jpg" alt="Quiz photo 3" />
            </Carousel.Item>
          </Carousel>
          <div className="mb-3">
            <span className="event-tag me-2">Science</span>
            <span className="event-tag me-2">Maths</span>
          </div>
          <h5>Tinker Tutor Science & Aptitude Challenge</h5>
          <p>This thrilling multi-round quiz event was designed to spark curiosity and celebrate intellectual talent among students. Held at BKBIET, Pilani, it tested science concepts, logical reasoning, and real-world problem-solving.</p>
          <h5 className="mt-4">Key Highlights</h5>
          <ul>
            <li>200+ students participated from grades 6-12</li>
            <li>Top 3 Winners received cash prizes of ₹2500, ₹1500, and ₹1000</li>
            <li>Trophies and gifts awarded to the top performers</li>
            <li>Special Prize for the Best Performing Girl Student</li>
            <li>Participation Certificates for all</li>
            <li>Free Refreshments were arranged</li>
          </ul>
          <div className="event-stats mt-4">
            <div className="d-flex justify-content-between">
              <div><i className="far fa-calendar-alt text-primary me-2"></i><span>9 April, 2025</span></div>
              <div><i className="fa fa-users text-primary me-2"></i><span>200+ Participants</span></div>
              <div><i className="fas fa-trophy text-primary me-2"></i><span>3 Winners</span></div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Events;
