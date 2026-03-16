import { portfolioData } from "../data/portfolioData";

export default function CyberSecurityProjects() {
  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "8rem 2rem 4rem"
      }}
    >
      <h2 style={{ fontSize: "2.2rem", marginBottom: "2rem" }}>
        Cybersecurity Projects
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2rem"
        }}
      >
        {portfolioData.cyberProjects.map((project, index) => (
          <div key={index} className="card">
            <h3>{project.title}</h3>

            <p>
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

            <p>{project.description}</p>

            {project.whatIDid && (
              <>
                <h4 style={{ marginTop: "1rem" }}>What I Did</h4>
                <ul>
                  {project.whatIDid.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {project.attacksDetected && (
              <>
                <h4 style={{ marginTop: "1rem" }}>Attacks Detected</h4>
                <ul>
                  {project.attacksDetected.map((attack, i) => (
                    <li key={i}>{attack}</li>
                  ))}
                </ul>
              </>
            )}

            {project.investigationWorkflow && (
              <>
                <h4 style={{ marginTop: "1rem" }}>Investigation Workflow</h4>
                <ul>
                  {project.investigationWorkflow.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ul>
              </>
            )}

            {project.vulnerabilities && (
              <>
                <h4 style={{ marginTop: "1rem" }}>Vulnerabilities Identified</h4>
                <ul>
                  {project.vulnerabilities.map((vuln, i) => (
                    <li key={i}>{vuln}</li>
                  ))}
                </ul>
              </>
            )}

            {project.highlights && (
              <>
                <h4 style={{ marginTop: "1rem" }}>Highlights</h4>
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