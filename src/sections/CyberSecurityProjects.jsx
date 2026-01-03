import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function CyberSecurityProjects() {
  return (
    <section
      id="cyber"
      style={{
        padding: "6rem 2rem"
      }}
    >
      <h2 style={{ fontSize: "2rem" }}>Cybersecurity Projects</h2>

      {portfolioData.cyberProjects.map((p, i) => (
        <motion.div
          key={i}
          className="card"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3>{p.title}</h3>

          <p>
            <b>Tools & Technologies:</b> {p.tools}
          </p>

          <p>{p.description}</p>

          {p.attacksDetected && (
            <>
              <b>Attacks Detected:</b>
              <ul>
                {p.attacksDetected.map((a, idx) => (
                  <li key={idx}>{a}</li>
                ))}
              </ul>
            </>
          )}

          {p.vulnerabilities && (
            <>
              <b>Vulnerabilities Identified:</b>
              <ul>
                {p.vulnerabilities.map((v, idx) => (
                  <li key={idx}>{v}</li>
                ))}
              </ul>
            </>
          )}

          {p.highlights && (
            <>
              <b>Key Highlights:</b>
              <ul>
                {p.highlights.map((h, idx) => (
                  <li key={idx}>{h}</li>
                ))}
              </ul>
            </>
          )}
        </motion.div>
      ))}
    </section>
  );
}
