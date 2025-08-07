import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="container-fluid text-light footer pt-5 mt-5 wow fadeIn" style={{ backgroundColor: '#001f3f' }} data-wow-delay="0.1s">
  <div className="container py-5">
    <div className="row g-5">
      {/* Company Info */}
      <div className="col-lg-4 col-md-6">
        <h4 class="text-white mb-3">Contact</h4>
                    <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Near Rani Sati Mandir, Pilani, Rajasthan</p>
                    <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+91 63758-29791</p>
                    <p class="mb-2"><i class="fa fa-envelope me-3"></i>tinkertutor@tinkertutor.tech</p>
        <div className="d-flex pt-2">
          <a className="btn btn-outline-light btn-social me-2 text-decoration-none" href="https://www.facebook.com/p/Tinker-Tutor-61564653234663/?locale=pt_BR">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="btn btn-outline-light btn-social me-2 text-decoration-none" href="https://www.instagram.com/tinkertutor/">
            <i className="fab fa-instagram"></i>
          </a>
          <a className="btn btn-outline-light btn-social me-2 text-decoration-none" href="https://www.linkedin.com/company/tinkertutor/">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className="btn btn-outline-light btn-social me-2 text-decoration-none" href="https://www.youtube.com/@TinkerTutor/shorts">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>

      {/* Useful Links */}
      <div className="col-lg-4 col-md-6">
        <h4 className="text-white mb-4">Useful Links</h4>
        <Link to="/about" className="text-light d-block mb-2 text-decoration-none">
          <i className="fa fa-angle-right me-2"></i>About Us
        </Link>
        <Link to="/courses" className="text-light d-block mb-2 text-decoration-none">
          <i className="fa fa-angle-right me-2"></i>Courses
        </Link>
        <Link to="/contact" className="text-light d-block mb-2 text-decoration-none">
          <i className="fa fa-angle-right me-2"></i>Contact Us
        </Link>
        <Link to="/privacy" className="text-light d-block mb-2 text-decoration-none">
          <i className="fa fa-angle-right me-2"></i>Privacy Policy
        </Link>
      </div>

      {/* WhatsApp Group */}
      <div className="col-lg-4 col-md-6">
        <h4 className="text-white mb-4">Join Our WhatsApp Group</h4>
        <p>Subscribe now and become part of the Tinker Tutor community — where young innovators learn robotics, IoT, and coding with hands-on projects!</p>
        <a
          href="https://chat.whatsapp.com/KpPRurrJWpB00lA4tUWoMF"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success text-white text-decoration-none"
        >
          <i className="fab fa-whatsapp me-2"></i>Join Now
        </a>
      </div>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="container">
    <div className="copyright">
      <div className="row">
        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
          &copy; {new Date().getFullYear()} <Link to="/" className="text-light text-decoration-none">Tinker Tutor</Link>, All Right Reserved.
        </div>
        <div className="col-md-6 text-center text-md-end">
          <div className="footer-menu">
            <Link to="/" className="text-light text-decoration-none me-3">Home</Link>
            <Link to="/contact" className="text-light text-decoration-none me-3">Help</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Footer;