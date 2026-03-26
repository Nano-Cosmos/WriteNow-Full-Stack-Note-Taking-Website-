import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="d-flex align-items-center"
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #0f172a 0%, #020617 70%)",
        color: "#E5E7EB",
      }}
    >
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-7 text-center text-lg-start mb-5 mb-lg-0">
            <h1
              className="fw-bold"
              style={{
                fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
                lineHeight: "1.1",
                animation: "fadeUp 0.8s ease",
              }}
            >
              Capture ideas. <br />
              <span style={{ color: "#38BDF8" }}>Write freely.</span>
            </h1>

            <p
              className="mt-4"
              style={{
                fontSize: "1.2rem",
                maxWidth: "600px",
                color: "#9CA3AF",
                animation: "fadeUp 1s ease",
              }}
            >
              WriteNow helps you store thoughts, ideas, and notes securely
              without distractions. Simple, fast, and built for focus.
            </p>

            <div
              className="mt-5 d-flex gap-3 justify-content-center justify-content-lg-start"
              style={{ animation: "fadeUp 1.2s ease" }}
            >
              <Link
                to="/register"
                className="btn px-4 py-3 fw-semibold"
                style={{
                  backgroundColor: "#38BDF8",
                  color: "#020617",
                  borderRadius: "10px",
                }}
              >
                Get Started Free
              </Link>

              <Link
                to="/login"
                className="btn px-4 py-3 fw-semibold"
                style={{
                  border: "1px solid #334155",
                  color: "#E5E7EB",
                  borderRadius: "10px",
                }}
              >
                Login
              </Link>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="col-lg-5 text-center">
            <div
              className="p-4 rounded-4 shadow-lg"
              style={{
                backgroundColor: "#020617",
                border: "1px solid #1E293B",
                animation: "float 4s ease-in-out infinite",
              }}
            >
              <div
                className="rounded-3 p-3 text-start"
                style={{
                  backgroundColor: "#020617",
                  color: "#CBD5F5",
                  fontFamily: "monospace",
                  fontSize: "0.95rem",
                }}
              >
                <p>📝 Today’s Notes</p>
                <p>• Finish React landing page</p>
                <p>• Improve note editor UX</p>
                <p>• Push project to GitHub</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* CSS animations */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0px);
            }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
