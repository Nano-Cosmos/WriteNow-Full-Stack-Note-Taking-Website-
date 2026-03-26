import { Link } from "react-router-dom";

const PublicNavbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "#020617",
        padding: "20px",
        borderBottom: "1px solid #1E293B"
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <h3 style={{ color: "#E5E7EB", margin: 0 }}>WriteNow</h3>

        <div>
          <Link
            to="/register"
            className="btn btn-primary"
            style={{ marginRight: "10px" }}
          >
            Register
          </Link>

          <Link to="/login" className="btn btn-outline-light">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default PublicNavbar;
