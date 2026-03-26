const FeaturesSection = () => {
  return (
    <section
      className="py-4 py-md-5"
      style={{
        backgroundColor: "#020617",
        color: "#E5E7EB",
      }}
    >
      <div className="container py-4 py-md-5">
        {/* Heading */}
        <div className="row justify-content-center text-center mb-4 mb-md-5">
          <div className="col-lg-9">
            <h2
              className="fw-bold"
              style={{
                fontSize: "clamp(1.8rem, 5vw, 3.2rem)",
                animation: "fadeUp 0.6s ease",
              }}
            >
              Everything you need. Nothing you don’t.
            </h2>
            <p
              className="mt-3 px-2 px-md-0"
              style={{
                fontSize: "clamp(1rem, 3.5vw, 1.15rem)",
                color: "#9CA3AF",
                animation: "fadeUp 0.8s ease",
              }}
            >
              WriteNow is designed to help you focus on what matters —
              capturing ideas, organizing thoughts, and staying productive.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="row g-3 g-md-4">
          {[
            {
              title: "📝 Simple note creation",
              text:
                "Create notes instantly with a clean, distraction-free editor that lets your ideas flow naturally.",
            },
            {
              title: "📂 Smart organization",
              text:
                "Categorize your notes and find them quickly using built-in search and filters.",
            },
            {
              title: "🔐 Secure authentication",
              text:
                "Your notes are protected with secure login — only you can access your personal space.",
            },
            {
              title: "⚡ Fast & responsive",
              text:
                "Built for speed so you never lose momentum, whether on desktop or mobile.",
            },
            {
              title: "🌙 Clean dark theme",
              text:
                "A carefully designed dark interface that’s easy on your eyes and looks professional.",
            },
            {
              title: "✏️ Edit anytime",
              text:
                "Update, refine, or delete notes whenever you want — your content stays flexible.",
            },
          ].map((feature, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div
                className="h-100 p-3 p-md-4 rounded-4"
                style={{
                  backgroundColor: "#020617",
                  border: "1px solid #1E293B",
                  animation: `fadeUp ${1 + index * 0.2}s ease`,
                }}
              >
                <h5 className="fw-semibold mb-2 mb-md-3">
                  {feature.title}
                </h5>
                <p
                  style={{
                    color: "#CBD5F5",
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                  }}
                >
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
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

export default FeaturesSection;
