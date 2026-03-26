const SecurityAndPrivacySection = () => {
  return (
    <section
      className="py-4 py-md-5"
      style={{
        backgroundColor: "#020617",
        color: "#E5E7EB",
        borderTop: "1px solid #1F2937",
      }}
    >
      <div className="container py-4 py-md-5">
        {/* Heading */}
        <div className="row justify-content-center text-center mb-4 mb-md-5">
          <div className="col-lg-9">
            <h2
              className="fw-bold"
              style={{
                fontSize: "clamp(1.9rem, 5vw, 3rem)",
                animation: "fadeUp 0.6s ease",
              }}
            >
              Security & Privacy
            </h2>
            <p
              className="mt-3 px-2 px-md-0"
              style={{
                fontSize: "clamp(1rem, 3.5vw, 1.15rem)",
                color: "#9CA3AF",
                animation: "fadeUp 0.8s ease",
              }}
            >
              Your notes are personal. WriteNow is built with
              privacy and security at its core.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="row g-4 g-md-5">
          {[
            {
              title: "🔑 Secure authentication",
              text:
                "JWT-based login ensures only you can access your notes on every request.",
            },
            {
              title: "🔄 Safe session handling",
              text:
                "Short-lived access tokens reduce risk and protect inactive sessions.",
            },
            {
              title: "🔒 User-isolated data",
              text:
                "Each note belongs only to its owner — no shared or public access.",
            },
            {
              title: "🛡 Fully protected APIs",
              text:
                "All endpoints require authentication. No access without login.",
            },
            {
              title: "📦 Minimal data storage",
              text:
                "We store only what’s necessary — no tracking or data sharing.",
            },
            {
              title: "🚪 Instant logout safety",
              text:
                "Logging out immediately revokes access, keeping shared devices safe.",
            },
          ].map((item, index) => (
            <div key={index} className="col-12 col-md-6">
              <h5 className="fw-semibold mb-2">{item.title}</h5>
              <p
                style={{
                  color: "#CBD5F5",
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (max-width: 576px) {
            * {
              animation: none !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default SecurityAndPrivacySection;
