import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Courses = () => {
  useEffect(() => {
    document.title = 'STEM Courses - Tinker Tutor';
  }, []);

  const categories = [
    { id: 1, name: 'Internet Of Things (IoT)', icon: '/images/cat2.png' },
    { id: 2, name: 'Robotics', icon: '/images/cat10.png' },
    { id: 3, name: 'Drone Technology', icon: '/images/cat11.png' },
    { id: 4, name: 'Python Programming', icon: '/images/cat3.png' },
    { id: 5, name: 'App Development', icon: '/images/cat5.png' },
    { id: 6, name: 'Web Development', icon: '/images/cat6.png' },
    { id: 7, name: 'Database Fundamentals', icon: '/images/cat7.png' },
    { id: 8, name: '3D Modeling', icon: '/images/cat12.png' },
  ];

  const courses = [
  {
    id: 1,
    title: 'Beginner Robotics',
    description: 'Build your first robot with easy-to-use components',
    image: '/images/robotics-kids.jpg',
    targetClass: 'Class 5-12',
    duration: '10 weeks',
    lessons: 12,
    difficulty: 'Beginner',
    students: 200,
    rating: 4.8,
    price: '₹ 4999',
    path: '/courses/robotics',
    delay: '0.1s',
  },
  {
    id: 2,
    title: 'IoT Starter',
    description: 'Create smart devices with basic electronics',
    image: '/images/iot-kids.jpg',
    targetClass: 'Class 5-12',
    duration: '6 weeks',
    lessons: 7,
    difficulty: 'Beginner',
    students: 100,
    rating: 4.7,
    price: '₹ 4999',
    path: '/courses/iot',
    delay: '0.2s',
  },
  {
    id: 3,
    title: 'Python Programming',
    description: 'Learn coding fundamentals with fun projects',
    image: '/images/python-kids.jpg',
    targetClass: 'Class 5-12',
    duration: '8 weeks',
    lessons: 10,
    difficulty: 'Beginner',
    students: 20,
    rating: 4.9,
    price: '₹ 3999',
    path: '/courses/python',
    delay: '0.3s',
  },
  {
    id: 4,
    title: 'Drone Technology',
    description: 'Build and program your first drone',
    image: '/images/drone-kids.jpg',
    targetClass: 'Class 8-12',
    duration: '8 weeks',
    lessons: 10,
    difficulty: 'Beginner',
    students: 25,
    rating: 4.6,
    price: '₹ 4999',
    path: '/courses/drone',
    delay: '0.4s',
  },
  {
    id: 5,
    title: 'Web Development',
    description: 'Create your first website from scratch',
    image: '/images/web-kids.jpg',
    targetClass: 'Class 9-12',
    duration: '8 weeks',
    lessons: 10,
    difficulty: 'Beginner',
    students: 30,
    rating: 4.8,
    price: '₹ 4499',
    path: '/courses/webdev',
    delay: '0.5s',
  },
  {
    id: 6,
    title: 'Mobile App Development',
    description: 'Build your first mobile application',
    image: '/images/app-kids.jpg',
    targetClass: 'Class 9-12',
    duration: '8 weeks',
    lessons: 10,
    difficulty: 'Intermediate',
    students: 30,
    rating: 4.2,
    price: '₹ 4999',
    path: '/courses/appdev',
    delay: '0.6s',
  },
  {
    id: 7,
    title: 'MySQL Database',
    description: 'Learn database concepts with fun projects',
    image: '/images/mysql-kids.jpg',
    targetClass: 'Class 8-12',
    duration: '6 weeks',
    lessons: 8,
    difficulty: 'Beginner',
    students: 50,
    rating: 4.0,
    price: '₹ 4499',
    path: '/courses/mysql',
    delay: '0.7s',
  },
  {
    id: 8,
    title: '3D Modeling',
    description: 'Create your own 3D objects and animations',
    image: '/images/3dmodeling.jpg',
    targetClass: 'Class 5-12',
    duration: '8 weeks',
    lessons: 10,
    difficulty: 'Beginner',
    students: 100,
    rating: 4.7,
    price: '₹ 4499',
    path: '/courses/3dmodel',
    delay: '0.8s',
  },
];

  return (
    <>
      {/* Header with background image and overlay */}
      <div className="container-fluid py-5 mb-5 page-header position-relative text-white" style={{ height: "317px" }}>
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
            backgroundColor: 'rgba(0, 20, 50, 0.4)',
            zIndex: 2,
          }}
        ></div>

        {/* Text Content */}
        <div className="container py-5 position-relative" style={{ zIndex: 3 }}>
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className="display-3 text-white animated slideInDown">Courses</h1>
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

      {/* Categories Section */}
      <Container className="py-5 category">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center px-3">Categories</h6>
          <h1 className="mb-5" style={{ color: '#41aff8' }}>Explore Our Learning Domains</h1>
        </div>
        <Row className="justify-content-center">
          {categories.map((category) => (
            <Col lg={3} md={6} className="text-center" key={category.id}>
              <div className="content shadow p-3 mb-2 wow fadeInUp" data-wow-delay="0.3s">
                <img src={category.icon} className="img-fluid" alt={category.name} />
                <h5 className="my-2">
                  <a href="#" className="text-center text-dark">{category.name}</a>
                </h5>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Courses Section */}
      <Container className="py-5">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center px-3">Hands-On Courses</h6>
          <h1 className="mb-5" style={{ color: '#41aff8' }}>Tech Courses for School Students (Class 5-12)</h1>
        </div>
        <Row className="g-4 py-2">
  {courses.map((course) => {
    const discountPercent = 20;
    const originalPrice = parseFloat(course.price.replace('₹', ''));
    const discountedPrice = Math.round(originalPrice * (1 - discountPercent / 100));

    return (
      <Col
        lg={4}
        md={6}
        className="wow fadeInUp"
        data-wow-delay={course.delay}
        key={course.id}
      >
        <Link to={course.path} className="text-decoration-none text-dark">
          <div className="course-item shadow">
            <div className="position-relative overflow-hidden text-light image">
              <img className="img-fluid" src={course.image} alt={course.title} />
              <div className="course-badge">{course.targetClass}</div>
            </div>
            <div className="p-2 pb-0 text-center">
              <h5 className="mb-1">{course.title}</h5>
              <p className="mb-0 text-muted small">{course.description}</p>
            </div>
            <div className="d-flex">
              <small className="flex-fill text-center py-1 px-2">
                <i className="fa fa-star text-warning me-2"></i>{course.rating}
              </small>
              <small className="flex-fill text-center py-1 px-2">
                <i className="fa fa-user-graduate me-2"></i>{course.students}+ Students
              </small>
              <small className="flex-fill text-center py-1 px-2">
                <i className="fa fa-user me-2"></i>{course.difficulty}
              </small>
            </div>
            <div className="d-flex align-items-center px-2 py-2">
              <small className="text-start">
                <i className="fa fa-clock me-2"></i>
                {course.duration} • {course.lessons} lessons
              </small>

              {/* price container pushed right */}
              <div className="ms-auto text-end">
                <div className="d-flex align-items-center justify-content-end">
                  <span className="fw-bold fs-6 text-success me-2">
                    ₹{discountedPrice}
                  </span>
                  <span
                    className="text-muted fs-6"
                    style={{
                      textDecoration: 'line-through',
                      // transform: 'rotate(-12deg)',
                      display: 'inline-block',
                    }}
                  >
                    {course.price}
                  </span>
                </div>
                <span className="badge bg-danger text-white mt-1" style={{ fontSize: '0.7rem' }}>
                  {discountPercent}% OFF
                </span>
              </div>

              <small className="text-primary fw-bold fs-6 ms-2">
                <i className="fa fa-chevron-right fs-10"></i>
              </small>
            </div>
          </div>
        </Link>
      </Col>
    );
  })}
</Row>

      </Container>
    </>
  );
};

export default Courses;
