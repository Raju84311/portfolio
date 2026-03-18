import { portfolioData } from "../data/portfolioData";

export default function Certifications() {
  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "8rem 2rem 4rem"
      }}
    >
      <h2 style={{ fontSize: "2.3rem", marginBottom: "2rem" }}>
        Certifications
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem"
        }}
      >
        {portfolioData.certifications.map((cert, index) => (
          <div
            key={index}
            className="card"
            style={{
              transition: "transform 0.3s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-6px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            {/* Clickable Image */}
            {cert.image && (
              <a
                href={`/portfolio/${cert.file}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`/portfolio/${cert.image}`}
                  alt={cert.title}
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    marginBottom: "1rem"
                  }}
                />
              </a>
            )}

            {/* Title */}
            <h3>{cert.title}</h3>

            {/* Issuer */}
            <p style={{ opacity: 0.8 }}>
              <strong>Issuer:</strong> {cert.issuer}
            </p>

            {/* Description */}
            <p style={{ marginTop: "0.5rem" }}>
              {cert.description}
            </p>

            {/* Button */}
            <a
              href={`/portfolio/${cert.file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                marginTop: "1rem",
                display: "inline-block",
                textAlign: "center"
              }}
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}