import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { motion } from 'framer-motion';

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: 'What is the Tinker Tutor ?',
      answer: "Tinker Tutor is a hands-on learning platform for students from grades 5 to 12, offering interactive courses in Robotics, IoT, Coding, and Electronics. Our mission is to turn your ideas into reality through fun projects, real-world experiments, and expert guidance. Whether you're a beginner or a budding innovator, Tinker Tutor is your launchpad to the future of technology."
    },
    {
      id: 2,
      question: 'How can I enroll in these online courses?',
      answer: "It’s simple! Just visit our website, create a free account, and choose your favorite course. With a few clicks and make payment, you’ll be on your way to building cool projects and gaining practical knowledge. No complicated steps just pure learning."
    },
    {
      id: 3,
      question: 'What materials are provided in the course?',
      answer: "Tinker Tutor’s free courses are designed by experts, and each one comes with a recognized certificate that adds value to your academic and career profile. You’ll not only learn core concepts but also build real projects like smartwatches, home automation systems, and games—skills that matter in the real world. Plus, our courses are beginner-friendly and interactive!"
    },
    {
      id: 4,
      question: 'How many courses can I enroll in at the same time?',
      answer: "You can enroll in as many courses as you like at the same time! Our flexible learning system lets you learn at your own pace, explore different tech domains, and discover your true interest without limits."
    },
    {
      id: 5,
      question: 'What are the most popular free courses offered by Tinker Tutor ?',
      answer: "Tinker Tutor focuses on in-demand concepts and skills, where learners can develop industry-relevant knowledge in their chosen sector."
    }
  ];

  return (
    <Container className="py-5">
      <Row className="g-5">
        <Col lg={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h6 className="section-title bg-white text-start text-primary pe-3">FAQs</h6>
            <h1 className="mb-4">Frequently Asked Questions</h1>
            <p className="mb-4">Here are some common questions about our courses and programs. If you don't find the answer you're looking for, feel free to contact us!</p>
            <div className="d-flex align-items-center mb-4">
              <div
                className="d-flex align-items-center justify-content-center rounded shadow"
                style={{
                  width: '70px',
                  height: '70px',
                  backgroundColor: '#41aff8',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'
                }}
              >
                <i className="fas fa-phone-alt text-white" style={{ fontSize: '24px' }}></i>
              </div>
              <div className="ps-4">
                <h5 className="mb-2">Call to ask any question</h5>
                <h4 className="text-primary mb-0">+91 6375829791</h4>
              </div>
            </div>
          </motion.div>
        </Col>
        <Col lg={6}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Accordion defaultActiveKey="0">
              {faqs.map((faq, index) => (
                <Accordion.Item eventKey={index.toString()} key={faq.id}>
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body>{faq.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default FAQ;
