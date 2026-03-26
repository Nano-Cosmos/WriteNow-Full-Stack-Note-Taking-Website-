const BenefitsSection = () => {
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
                fontSize: "clamp(1.9rem, 5vw, 3.2rem)",
                animation: "fadeUp 0.6s ease",
              }}
            >
              Why you’ll love using WriteNow
            </h2>
            <p
              className="mt-3 px-2 px-md-0"
              style={{
                fontSize: "clamp(1rem, 3.5vw, 1.15rem)",
                color: "#9CA3AF",
                animation: "fadeUp 0.8s ease",
              }}
            >
              Designed to improve focus, reduce friction,
              and help you think clearly — every single day.
            </p>
          </div>
        </div>

        {/* Benefits Rows */}
        {[
          [
            {
              title: "🧠 Clear thinking, less clutter",
              text:
                "WriteNow helps you unload ideas from your mind into a clean space, so you can focus better and think clearly.",
            },
            {
              title: "⏱ Save time every day",
              text:
                "With fast search and simple organization, you’ll always find your notes when you need them.",
            },
          ],
          [
            {
              title: "😌 Stress-free note taking",
              text:
                "No unnecessary buttons, no distractions — just a calm space to write and reflect.",
            },
            {
              title: "🔒 Peace of mind",
              text:
                "Your notes stay private and secure, accessible only to you at any time.",
            },
          ],
          [
            {
              title: "📱 Use anywhere",
              text:
                "Works smoothly across devices, so your ideas are always within reach — wherever you are.",
            },
            {
              title: "✨ Stay consistent",
              text:
                "A clean, reliable experience encourages you to build a daily writing and note-taking habit.",
            },
          ],
        ].map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="row g-4 g-md-5 align-items-start mb-4 mb-md-5"
          >
            {row.map((benefit, index) => (
              <div key={index} className="col-12 col-md-6">
                <h4
                  className="fw-semibold mb-2 mb-md-3"
                  style={{ fontSize: "1.15rem" }}
                >
                  {benefit.title}
                </h4>
                <p
                  style={{
                    color: "#CBD5F5",
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                  }}
                >
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        ))}
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

export default BenefitsSection;
