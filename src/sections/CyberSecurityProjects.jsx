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
          <div
            key={index}
            className="card"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.8rem",
              justifyContent: "space-between"
            }}
          >
            {/* Title */}
            <h3 style={{ fontSize: "1.3rem", fontWeight: "600" }}>
              {project.title}
            </h3>

            {/* Tools Badge */}
            <div
              style={{
                fontSize: "0.8rem",
                padding: "4px 10px",
                borderRadius: "20px",
                background: "rgba(59,130,246,0.15)",
                width: "fit-content"
              }}
            >
              {project.tools}
            </div>

            {/* Image with SOC Badge */}
            {project.image && (
              <div style={{ position: "relative" }}>
                <img
                  src={`/${project.image}`}
                  alt={project.title}
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    marginTop: "0.5rem"
                  }}
                />

                {/* LIVE ALERT badge */}
                <span
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    background: "#ef4444",
                    color: "white",
                    padding: "4px 8px",
                    borderRadius: "6px",
                    fontSize: "0.7rem"
                  }}
                >
                  LIVE ALERTS
                </span>
              </div>
            )}

            {/* Description */}
            <p style={{ opacity: 0.9 }}>
              {project.description}
            </p>

            <hr style={{ opacity: 0.2 }} />

            {/* What I Did */}
            {project.whatIDid && (
              <div>
                <h4 style={{ color: "#3b82f6" }}>What I Did</h4>
                <ul style={{ paddingLeft: "1rem" }}>
                  {project.whatIDid.map((item, i) => (
                    <li key={i}>✔️ {item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Attacks Detected */}
            {project.attacksDetected && (
              <div>
                <h4 style={{ color: "#ef4444" }}>Attacks Detected</h4>
                <ul style={{ paddingLeft: "1rem" }}>
                  {project.attacksDetected.map((attack, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px"
                      }}
                    >
                      <span
                        style={{
                          background: "#ef4444",
                          color: "white",
                          padding: "3px 8px",
                          borderRadius: "6px",
                          fontSize: "0.7rem"
                        }}
                      >
                        CRITICAL
                      </span>
                      {attack}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Workflow */}
            {project.investigationWorkflow && (
              <div>
                <h4 style={{ color: "#22c55e" }}>
                  Investigation Workflow
                </h4>
                <ul style={{ paddingLeft: "1rem" }}>
                  {project.investigationWorkflow.map((step, i) => (
                    <li key={i}>➡️ {step}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Vulnerabilities */}
            {project.vulnerabilities && (
              <div>
                <h4 style={{ color: "#f97316" }}>
                  Vulnerabilities Identified
                </h4>
                <ul style={{ paddingLeft: "1rem" }}>
                  {project.vulnerabilities.map((vuln, i) => (
                    <li key={i}>⚠️ {vuln}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Highlights */}
            {project.highlights && (
              <div>
                <h4 style={{ color: "#a855f7" }}>Highlights</h4>
                <ul style={{ paddingLeft: "1rem" }}>
                  {project.highlights.map((item, i) => (
                    <li key={i}>✔️ {item}</li>
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