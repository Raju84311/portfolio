import { portfolioData } from "../data/portfolioData";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "8rem 2rem 4rem"
      }}
    >
      <h2 style={{ fontSize: "2.2rem", marginBottom: "2rem" }}>
        Education
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "1.5rem"
        }}
      >
        {education.map((edu, index) => (
          <div key={index} className="card">
            <h3>{edu.degree}</h3>

            <p style={{ marginTop: "0.5rem" }}>
              <strong>{edu.institution}</strong>
            </p>

            <p style={{ marginTop: "0.3rem" }}>
              {edu.year}
            </p>

            <p style={{ marginTop: "0.3rem" }}>
              CGPA: {edu.cgpa}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
