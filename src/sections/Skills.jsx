import { portfolioData } from "../data/portfolioData";

export default function Skills() {
  const skills = portfolioData.skills;

  if (!skills) return null;

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "8rem 2rem 4rem"
      }}
    >
      <h2 style={{ fontSize: "2.2rem", marginBottom: "2rem" }}>
        Cybersecurity & Technical Skills
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem"
        }}
      >
        <div className="card">
          <h3>Cybersecurity</h3>
          <p>{skills.cybersecurity.join(", ")}</p>
        </div>

        <div className="card">
          <h3>Security Tools</h3>
          <p>{skills.tools.join(", ")}</p>
        </div>

        <div className="card">
          <h3>Programming</h3>
          <p>{skills.programming.join(", ")}</p>
        </div>

        <div className="card">
          <h3>Web & Mobile</h3>
          <p>{skills.webMobile.join(", ")}</p>
        </div>
      </div>
    </section>
  );
}