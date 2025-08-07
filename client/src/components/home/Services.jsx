import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      id: 1,
      img: "/images/icon1.png",
      title: "Learn anything",
      description:
        "Explore any interest or trending topic, take prerequisites, and advance your skills.",
    },
    {
      id: 2,
      img: "/images/icon2.png",
      title: "Save money",
      description:
        "Spend less money on your learning if you plan to take multiple courses this year.",
    },
    {
      id: 3,
      img: "/images/icon3.png",
      title: "Flexible learning",
      description:
        "Learn at your own pace, move between multiple courses, or switch to a different course.",
    },
    {
      id: 4,
      img: "/images/icon4.png",
      title: "Unlimited certificates",
      description:
        "Earn a certificate for every learning program that you complete at no additional cost.",
    },
  ];

  return (
    <div className="container-xxl py-5">
      <style>{`
        .service-tile {
          background: #ffffff;
          border: 1px solid #eaeaea;
          border-radius: 16px;
          padding: 24px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .service-tile:hover {
          transform: translateY(-6px);
          border-color: #41aff8;
          box-shadow: 0 12px 24px rgba(0,0,0,0.06);
          background: #f8fbff;
        }

        .icon-circle {
          width: 60px;
          height: 60px;
          background: #e8f5ff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        .icon-circle img {
          width: 30px;
          height: 30px;
        }

        .service-title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 8px;
          color: #1f1f1f;
        }

        .service-desc {
          font-size: 14px;
          color: #5a5a5a;
        }
      `}</style>

      <Container>
        <Row className="g-2 text-center mb-4">
          <Col>
            <h1 style={{ color: "#41aff8" }}>
              Fulfill your goals with Tinker Tutor
            </h1>
            <p className="mb-4">
              Get unlimited access to over 90% of courses, projects,
              specializations, and professional certificates, taught by top
              instructors.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {services.map((service, index) => (
            <Col key={service.id} lg={3} sm={6}>
              <motion.div
                className="service-tile"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                <div className="icon-circle">
                  <img src={service.img} alt={service.title} />
                </div>
                <div>
                  <div className="service-title">{service.title}</div>
                  <div className="service-desc">{service.description}</div>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
