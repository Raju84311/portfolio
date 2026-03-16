import { portfolioData } from "../data/portfolioData";

export default function Certifications() {
  return (
    <section style={{ padding: "4rem 2rem" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>
        Certifications
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2rem"
        }}
      >
        {portfolioData.certifications.map((cert, index) => (
          <div key={index} className="card">

            <img
              src={cert.image}
              alt={cert.title}
              style={{
                width: "100%",
                borderRadius: "8px",
                marginBottom: "1rem"
              }}
            />

            <h3>{cert.title}</h3>

            <p>
              <strong>Issuer:</strong> {cert.issuer}
            </p>

            <p>{cert.description}</p>

          </div>
        ))}
      </div>
    </section>
  );
}