// import { Container, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// const Categories = () => {
//   const categories = [
//     {
//       id: 1,
//       title: 'Internet Of Things (IoT)',
//       icon: '/images/cat2.png',
//     },
//     {
//       id: 2,
//       title: 'Robotics',
//       icon: '/images/cat10.png',

//     },
//     {
//       id: 3,
//       title: 'Drone Technology',
//       icon: '/images/cat11.png',
//     },
//     {
//       id: 4,
//       title: 'Python',
//       icon: '/images/cat3.png',
//     },
//     {
//       id: 5,
//       title: 'App Development',
//       icon: '/images/cat5.png',
//     },
//     {
//       id: 6,
//       title: 'Web Development',
//       icon: '/images/cat6.png',
//     },
//     {
//       id: 7,
//       title: 'MySQL',
//       icon: '/images/cat7.png',
//     },
//     {
//       id: 8,
//       title: '3D Modeling',
//       icon: '/images/cat12.png',
//     },
//   ];

//   return (
//     <div className="container-xxl py-5 category">
//       <Container>
//         <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
//           <h6 className="section-title bg-white text-center px-3">Categories</h6>
//           <h1 className="mb-5" style={{ color: '#41aff8' }}>Popular Topics to Explore</h1>
//         </div>

//         <Row className="justify-content-center">
//           {categories.map((category, index) => (
//             <Col key={category.id} lg={3} md={6} className="text-center mb-4">
//               <div
//                 className="content shadow p-3 mb-2 wow fadeInUp"
//                 data-wow-delay={`${0.3 + index * 0.1}s`}
//               >
//                 <img src={category.icon} className="img-fluid mb-2" alt="categories" />
//                 <h5 className="my-2">
//                   <Link to="/courses" className="text-center">
//                     {category.title}
//                   </Link>
//                 </h5>
//               </div>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Categories;

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      id: 1,
      title: "Internet Of Things (IoT)",
      icon: "/images/cat2.png",
      path: "/courses/iot",
    },
    {
      id: 2,
      title: "Robotics",
      icon: "/images/cat10.png",
      path: "/courses/robotics",
    },
    {
      id: 3,
      title: "Drone Technology",
      icon: "/images/cat11.png",
      path: "/courses/drone",
    },
    {
      id: 4,
      title: "Python",
      icon: "/images/cat3.png",
      path: "/courses/python",
    },
    {
      id: 5,
      title: "App Development",
      icon: "/images/cat5.png",
      path: "/courses/appdev",
    },
    {
      id: 6,
      title: "Web Development",
      icon: "/images/cat6.png",
      path: "/courses/webdev",
    },
    {
      id: 7,
      title: "MySQL",
      icon: "/images/cat7.png",
      path: "/courses/mysql",
    },
    {
      id: 8,
      title: "3D Modeling",
      icon: "/images/cat12.png",
      path: "/courses/3dmodel",
    },
  ];

  return (
    <div className="container-xxl py-5 category">
      <style>{`
        .category-card {
          position: relative;
          border-radius: 12px;
          padding: 30px 20px;
          background-color: #fff;
          text-align: center;
          transition: all 0.4s ease;
          height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          border: 1px solid #e5e5e5;
          overflow: hidden;
        }

        .category-card:hover {
          transform: translateY(-6px);
          border-color: #41aff8;
          box-shadow: 0 0 12px rgba(65, 175, 248, 0.4);
        }

        .category-card::after {
          content: "";
          position: absolute;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, rgba(65, 175, 248, 0.4) 20%, transparent 70%);
          top: -20px;
          right: -20px;
          transform: scale(0);
          transition: transform 0.4s ease;
          border-radius: 50%;
          pointer-events: none;
        }

        .category-card:hover::after {
          transform: scale(1.5);
        }
      `}</style>

      <Container>
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center px-3">Categories</h6>
          <h1 className="mb-5" style={{ color: "#41aff8" }}>
            Popular Topics to Explore
          </h1>
        </div>

        <Row className="justify-content-center">
          {categories.map((category, index) => (
            <Col key={category.id} lg={3} md={6} sm={6} className="mb-4">
              <Link
                to={category.path || "/courses"}
                className="text-decoration-none text-dark"
              >
                <div
                  className="category-card wow fadeInUp"
                  data-wow-delay={`${0.2 + index * 0.1}s`}
                >
                  <img
                    src={category.icon}
                    alt={category.title}
                    style={{
                      width: "60px",
                      height: "60px",
                      marginBottom: "12px",
                      objectFit: "contain",
                    }}
                  />
                  <h6
                    className="mb-0"
                    style={{ fontSize: "15px", fontWeight: "600" }}
                  >
                    {category.title}
                  </h6>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Categories;
