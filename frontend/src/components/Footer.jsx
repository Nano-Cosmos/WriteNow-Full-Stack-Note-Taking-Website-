import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#020617",
        color: "#9CA3AF",
        borderTop: "1px solid #1F2937",
      }}
      className="pt-5"
    >
      <div className="container py-5">
        <div className="row g-4 text-center text-md-start">

          {/* Brand */}
          <div className="col-md-4">
            <h4 className="fw-bold" style={{ color: "#E5E7EB" }}>
              WriteNow
            </h4>
            <p className="mt-3 small">
              A secure, distraction-free note-taking app built for
              speed, privacy, and simplicity.
            </p>
          </div>

          {/* Product */}
          <div className="col-6 col-md-2">
            <h6 className="fw-semibold mb-3" style={{ color: "#E5E7EB" }}>
              Product
            </h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/register" className="footer-link">Get Started</Link></li>
              <li><Link to="/login" className="footer-link">Login</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-6 col-md-3">
            <h6 className="fw-semibold mb-3" style={{ color: "#E5E7EB" }}>
              Resources
            </h6>
            <ul className="list-unstyled">
              <li><span className="footer-link">Privacy Policy</span></li>
              <li><span className="footer-link">Terms of Service</span></li>
              <li><span className="footer-link">Security</span></li>
            </ul>
          </div>

          {/* Tech */}
          <div className="col-md-3">
            <h6 className="fw-semibold mb-3" style={{ color: "#E5E7EB" }}>
              Built With
            </h6>
            <p className="small">
              React • Django REST • JWT Auth
            </p>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid #1F2937",
          padding: "15px 0",
        }}
      >
        <div className="container text-center text-md-start d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <p className="mb-0 small">
            © {new Date().getFullYear()} WriteNow. All rights reserved.
          </p>

          <p className="mb-0 small">
            Built with ❤️ by you
          </p>
        </div>
      </div>

      {/* Styles */}
      <style>
        {`
          .footer-link {
            display: inline-block;
            padding: 4px 0;
            color: #9CA3AF;
            text-decoration: none;
            transition: color 0.2s ease;
          }

          .footer-link:hover {
            color: #60A5FA;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
