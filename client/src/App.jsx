// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import Header from './components/common/Header';
// import Footer from './components/common/Footer';
// import Spinner from './components/common/Spinner';
// import BackToTop from './components/common/BackToTop';
// import PageTransition from './components/common/PageTransition';
// import Home from './pages/Home';
// import Workshops from './pages/Workshops';
// import Courses from './pages/Courses';
// import Events from './pages/Events';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


// {/* courses imports */}
// import Robotics from './pages/Robotics';
// import IoT from './pages/IoT';
// import Python from './pages/Python';
// import WebDev from './pages/WebDev';
// import AppDev from './pages/AppDev';
// import MySQL from './pages/MySQL';
// import ThreeDModel from './pages/ThreeDModel';
// import Drone from './pages/Drone';

// import './assets/css/style.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import Kits from './pages/Kits';
// import SuccessPage from './pages/Success';

// const AnimatedRoutes = () => {
//   const location = useLocation();

//   return (
//     <PageTransition>
//       <Routes location={location} key={location.pathname}>
//         <Route path="/" element={<Home />} />
//         <Route path="/workshop" element={<Workshops />} />
//         <Route path="/courses" element={<Courses />} />

//         {/* courses routes */}
//         <Route path="/courses/robotics" element={<Robotics />} />
//         <Route path="/courses/iot" element={<IoT />} />
//         <Route path="/courses/python" element={<Python />} />
//         <Route path="/courses/webdev" element={<WebDev />} />
//         <Route path="/courses/appdev" element={<AppDev />} />
//         <Route path="/courses/mysql" element={<MySQL />} />
//         <Route path="/courses/3dmodel" element={<ThreeDModel />} />
//         <Route path="/courses/drone" element={<Drone />} />
//         <Route path="/kits" element={<Kits />} />
//         <Route path="/success" element={<SuccessPage />} />

//         <Route path="/event" element={<Events />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </PageTransition>
//   );
// };

// function App() {
//   const location = useLocation();

//   // Hide header/footer on these paths
//   const hideLayout = [
//     '/courses/robotics',
//     '/courses/iot',
//     '/courses/python',
//     '/courses/webdev',
//     '/courses/appdev',
//     '/courses/mysql',
//     '/courses/3dmodel',
//     '/courses/drone'
//   ].includes(location.pathname);

//   return (
//     <>
//       <Spinner />
//       {!hideLayout && <Header />}
//       <AnimatedRoutes />
//       {!hideLayout && <Footer />}
//       <BackToTop />
//     </>
//   );
// }

// // Wrap App with Router
// const AppWrapper = () => (
//   <Router>
//     <App />
//   </Router>
// );

// export default AppWrapper;


import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Spinner from './components/common/Spinner';
import BackToTop from './components/common/BackToTop';
import PageTransition from './components/common/PageTransition';
import Home from './pages/Home';
import Workshops from './pages/Workshops';
import Courses from './pages/Courses';
import Events from './pages/Events';
import About from './pages/About';
import Contact from './pages/Contact';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Course pages
import Robotics from './pages/Robotics';
import IoT from './pages/IoT';
import Python from './pages/Python';
import WebDev from './pages/WebDev';
import AppDev from './pages/AppDev';
import MySQL from './pages/MySQL';
import ThreeDModel from './pages/ThreeDModel';
import Drone from './pages/Drone';

import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Kits from './pages/Kits';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import CourseSuccess from './pages/CourseSuccess';
import StudentAuth from './pages/StudentAuth';
import CompleteProfile from './pages/CompleteProfile';
import Profile from './pages/Profile';

// Component handling routes with animation
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <PageTransition>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path='/auth' element={<StudentAuth/>} />
        <Route path="/complete-profile" element={<CompleteProfile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/workshop" element={<Workshops />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/robotics" element={<Robotics />} />
        <Route path="/courses/iot" element={<IoT />} />
        <Route path="/courses/python" element={<Python />} />
        <Route path="/courses/webdev" element={<WebDev />} />
        <Route path="/courses/appdev" element={<AppDev />} />
        <Route path="/courses/mysql" element={<MySQL />} />
        <Route path="/courses/3dmodel" element={<ThreeDModel />} />
        <Route path="/courses/drone" element={<Drone />} />
        <Route path="/kits" element={<Kits />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/course-success" element={<CourseSuccess />} />
        <Route path="/event" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </PageTransition>
  );
};

function App() {
  const location = useLocation();

  // Define pages where Footer should be hidden
  const hideFooter = [
    '/courses/robotics',
    '/courses/iot',
    '/courses/python',
    '/courses/webdev',
    '/courses/appdev',
    '/courses/mysql',
    '/courses/3dmodel',
    '/courses/drone'
  ].includes(location.pathname);

  return (
    <>
      <Spinner />
      <Header />
      <AnimatedRoutes />
      {!hideFooter && <Footer />}
      <BackToTop />
    </>
  );
}

// Wrap App with Router
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;

