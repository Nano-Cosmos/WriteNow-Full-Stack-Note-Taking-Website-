const ProblemSection = () => {
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
          <div className="col-lg-8">
            <h2
              className="fw-bold"
              style={{
                fontSize: "clamp(1.8rem, 5vw, 3rem)",
                animation: "fadeUp 0.6s ease",
              }}
            >
              The problem with note-taking today
            </h2>
            <p
              className="mt-3 px-2 px-md-0"
              style={{
                fontSize: "clamp(1rem, 3.5vw, 1.15rem)",
                color: "#9CA3AF",
                animation: "fadeUp 0.8s ease",
              }}
            >
              Most note apps are either too complex, distracting,
              or don’t respect your privacy.
            </p>
          </div>
        </div>

        {/* Problems Grid */}
        <div className="row g-3 g-md-4">
          {[
            {
              title: "😵 Too much clutter",
              text:
                "Many apps overwhelm users with unnecessary features, complex layouts, and constant distractions.",
            },
            {
              title: "🔐 Privacy concerns",
              text:
                "Notes often contain personal thoughts, yet many platforms don’t clearly protect or isolate your data.",
            },
            {
              title: "⚡ Slow & frustrating",
              text:
                "Laggy interfaces and poor performance break your flow when ideas matter most.",
            },
          ].map((problem, index) => (
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
                  {problem.title}
                </h5>
                <p
                  style={{
                    color: "#CBD5F5",
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                  }}
                >
                  {problem.text}
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

          /* Mobile performance */
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

export default ProblemSection;
