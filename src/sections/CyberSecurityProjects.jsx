import { portfolioData } from "../data/portfolioData";

export default function CyberSecurityProjects() {
  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "8rem 2rem 4rem"
      }}
    >
      <h2 style={{ fontSize: "2.3rem", marginBottom: "2rem" }}>
        Cybersecurity Projects
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "2rem"
        }}
      >
        {portfolioData.cyberProjects.map((project, index) => (
          <div key={index} className="card">

            {/* Title */}
            <h3>{project.title}</h3>

            {/* Tools */}
            <p style={{ opacity: 0.85 }}>
              <strong>Tools:</strong> {project.tools}
            </p>

            {/* Image */}
            {project.image && (
              <img
                src={`/${project.image}`}
                alt={project.title}
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  margin: "1rem 0"
                }}
              />
            )}

            {/* Description */}
            <p>{project.description}</p>

            {/* What I Did */}
            {project.whatIDid && (
              <>
                <h4 style={{ marginTop: "1rem", color: "#3b82f6" }}>
                  What I Did
                </h4>
                <ul>
                  {project.whatIDid.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {/* Attacks Detected */}
            {project.attacksDetected && (
              <>
                <h4 style={{ marginTop: "1rem", color: "#ef4444" }}>
                  Attacks Detected
                </h4>
                <ul>
                  {project.attacksDetected.map((attack, i) => (
                    <li key={i}>{attack}</li>
                  ))}
                </ul>
              </>
            )}

            {/* Investigation Workflow */}
            {project.investigationWorkflow && (
              <>
                <h4 style={{ marginTop: "1rem", color: "#22c55e" }}>
                  Investigation Workflow
                </h4>
                <ul>
                  {project.investigationWorkflow.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ul>
              </>
            )}

            {/* Vulnerabilities */}
            {project.vulnerabilities && (
              <>
                <h4 style={{ marginTop: "1rem", color: "#f97316" }}>
                  Vulnerabilities Identified
                </h4>
                <ul>
                  {project.vulnerabilities.map((vuln, i) => (
                    <li key={i}>{vuln}</li>
                  ))}
                </ul>
              </>
            )}

            {/* Highlights */}
            {project.highlights && (
              <>
                <h4 style={{ marginTop: "1rem", color: "#a855f7" }}>
                  Highlights
                </h4>
                <ul>
                  {project.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            )}

          </div>
        ))}
      </div>
    </section>
  );
}