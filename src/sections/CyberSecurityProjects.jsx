import { portfolioData } from "../data/portfolioData";

export default function CyberSecurityProjects() {
  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "8rem 2rem 4rem"
      }}
    >
      <h2 style={{ fontSize: "2.4rem", marginBottom: "2.5rem" }}>
        Cybersecurity Projects
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "2rem"
        }}
      >
        {portfolioData.cyberProjects.map((project, index) => (
          <div
            key={index}
            className="card"
            style={{
              padding: "1.8rem"
            }}
          >
            <h3 style={{ marginBottom: "0.5rem" }}>{project.title}</h3>

            <p style={{ opacity: 0.8 }}>
              <strong>Tools:</strong> {project.tools}
            </p>

            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  margin: "1rem 0"
                }}
              />
            )}

            <p style={{ marginBottom: "1rem" }}>{project.description}</p>

            {project.whatIDid && (
              <div style={{ marginTop: "1rem" }}>
                <h4 style={{ color: "#3b82f6" }}>What I Did</h4>
                <ul>
                  {project.whatIDid.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.attacksDetected && (
              <div style={{ marginTop: "1rem" }}>
                <h4 style={{ color: "#ef4444" }}>Attacks Detected</h4>
                <ul>
                  {project.attacksDetected.map((attack, i) => (
                    <li key={i}>{attack}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.investigationWorkflow && (
              <div style={{ marginTop: "1rem" }}>
                <h4 style={{ color: "#22c55e" }}>Investigation Workflow</h4>
                <ul>
                  {project.investigationWorkflow.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.vulnerabilities && (
              <div style={{ marginTop: "1rem" }}>
                <h4 style={{ color: "#f97316" }}>
                  Vulnerabilities Identified
                </h4>
                <ul>
                  {project.vulnerabilities.map((vuln, i) => (
                    <li key={i}>{vuln}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.highlights && (
              <div style={{ marginTop: "1rem" }}>
                <h4 style={{ color: "#a855f7" }}>Highlights</h4>
                <ul>
                  {project.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}