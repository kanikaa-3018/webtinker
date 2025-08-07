

// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Navbar, Nav, Container } from 'react-bootstrap';

// const Header = () => {
//   const [showNavbar, setShowNavbar] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       // Show navbar when scrolling up or at top
//       if (currentScrollY < lastScrollY || currentScrollY <= 0) {
//         setShowNavbar(true);
//       } else {
//         setShowNavbar(false);
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [lastScrollY]);

//   return (
//     <>
//       <Navbar
//         expand="lg"
//         bg="white"
//         variant="light"
//         className={`shadow px-0 py-2 fixed-top transition-navbar ${
//           showNavbar ? 'navbar-visible' : 'navbar-hidden'
//         }`}
//         style={{ transition: 'top 0.4s ease-in-out', top: showNavbar ? '0' : '-100px', zIndex: 1000 }}
//       >
//         <Container fluid>
//           <Navbar.Brand as={Link} to="/" className="d-flex align-items-center px-4 px-lg-5">
//             <p className="m-0 fw-bold" style={{ fontSize: '25px' }}>
//               <img src="images/icon.png" alt="" height="50px" />
//               Tinker<span style={{ color: '#41aff8' }}>Tutor</span>
//             </p>
//           </Navbar.Brand>
//           <Navbar.Toggle className="me-4" />
//           <Navbar.Collapse id="navbarCollapse">
//             <Nav className="ms-auto p-4 p-lg-0">
//               <Nav.Link
//                 as={Link}
//                 to="/"
//                 className={`nav-item nav-link text-black ${location.pathname === '/' ? 'active' : ''}`}
//               >
//                 Home
//               </Nav.Link>
//               <Nav.Link
//                 as={Link}
//                 to="/workshop"
//                 className={`nav-item nav-link text-black ${location.pathname === '/workshop' ? 'active' : ''}`}
//               >
//                 Workshop
//               </Nav.Link>
//               <Nav.Link
//                 as={Link}
//                 to="/courses"
//                 className={`nav-item nav-link text-black ${location.pathname === '/courses' ? 'active' : ''}`}
//               >
//                 Courses
//               </Nav.Link>
//               <Nav.Link
//                 as={Link}
//                 to="/event"
//                 className={`nav-item nav-link text-black ${location.pathname === '/event' ? 'active' : ''}`}
//               >
//                 Events
//               </Nav.Link>
//               <Nav.Link
//                 as={Link}
//                 to="/kits"
//                 className={`nav-item nav-link text-black ${location.pathname === '/kits' ? 'active' : ''}`}
//               >
//                 Kits
//               </Nav.Link>
//               <Nav.Link
//                 as={Link}
//                 to="/about"
//                 className={`nav-item nav-link text-black ${location.pathname === '/about' ? 'active' : ''}`}
//               >
//                 About
//               </Nav.Link>
//               <Nav.Link
//                 as={Link}
//                 to="/contact"
//                 className={`nav-item nav-link text-black ${location.pathname === '/contact' ? 'active' : ''}`}
//               >
//                 Contact
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       {/* This is to prevent content from going under the navbar */}
//       <div style={{ paddingTop: '80px' }}></div>
//     </>
//   );
// };

// export default Header;



import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  // Mock user auth (replace with context or actual auth logic)
  const user = JSON.parse(localStorage.getItem("user")); // Or useContext(AuthContext)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY || currentScrollY <= 0) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleLogin = () => {
    navigate("/auth"); // Adjust to your login route
  };

  const avatarStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
    cursor: "pointer",
    border: "2px solid #41aff8",
    marginLeft: "16px",
  };

  const loginButtonStyle = {
    backgroundColor: "#41aff8",
    border: "none",
    color: "#fff",
    padding: "8px 16px",
    borderRadius: "20px",
    fontWeight: "bold",
    cursor: "pointer",
    marginLeft: "16px",
    transition: "all 0.3s ease",
  };

  return (
    <>
      <Navbar
        expand="lg"
        bg="white"
        variant="light"
        className={`shadow px-0 py-2 fixed-top transition-navbar ${showNavbar ? 'navbar-visible' : 'navbar-hidden'}`}
        style={{
          transition: 'top 0.4s ease-in-out',
          top: showNavbar ? '0' : '-100px',
          zIndex: 1000
        }}
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center px-4 px-lg-5">
            <p className="m-0 fw-bold" style={{ fontSize: '25px' }}>
              <img src="/images/icon.png" alt="" height="50px" />
              Tinker<span style={{ color: '#41aff8' }}>Tutor</span>
            </p>
          </Navbar.Brand>
          <Navbar.Toggle className="me-4" />
          <Navbar.Collapse id="navbarCollapse">
            <Nav className="ms-auto p-4 p-lg-0 align-items-center">
              <Nav.Link as={Link} to="/" className={`nav-item nav-link text-black ${location.pathname === '/' ? 'active' : ''}`}>Home</Nav.Link>
              <Nav.Link as={Link} to="/workshop" className={`nav-item nav-link text-black ${location.pathname === '/workshop' ? 'active' : ''}`}>Workshop</Nav.Link>
              <Nav.Link as={Link} to="/courses" className={`nav-item nav-link text-black ${location.pathname === '/courses' ? 'active' : ''}`}>Courses</Nav.Link>
              <Nav.Link as={Link} to="/event" className={`nav-item nav-link text-black ${location.pathname === '/event' ? 'active' : ''}`}>Events</Nav.Link>
              <Nav.Link as={Link} to="/kits" className={`nav-item nav-link text-black ${location.pathname === '/kits' ? 'active' : ''}`}>Kits</Nav.Link>
              <Nav.Link as={Link} to="/about" className={`nav-item nav-link text-black ${location.pathname === '/about' ? 'active' : ''}`}>About</Nav.Link>
              <Nav.Link as={Link} to="/contact" className={`nav-item nav-link text-black ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Nav.Link>

              {!user ? (
                <button onClick={handleLogin} style={loginButtonStyle}>Login</button>
              ) : (
                <img
                  src={user.photo || "/images/avatar-placeholder.png"}
                  alt="User Avatar"
                  style={avatarStyle}
                  onClick={() => navigate('/profile')}
                  title="Go to profile"
                />
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={{ paddingTop: '80px' }}></div>
    </>
  );
};

export default Header;
