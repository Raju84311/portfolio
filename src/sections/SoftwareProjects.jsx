import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function SoftwareProjects() {
  return (
    <section
      id="software"
      style={{
        padding: "6rem 2rem"
      }}
    >
      <h2 style={{ fontSize: "2rem" }}>Software Projects</h2>

      {portfolioData.softwareProjects.map((p, i) => (
        <motion.div
          key={i}
          className="card"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3>{p.title}</h3>

          <p>
            <b>Tech Stack:</b> {p.tech}
          </p>

          <p>
            <b>Problem:</b> {p.problem}
          </p>

          <p>
            <b>Solution:</b> {p.solution}
          </p>

          <ul>
            {p.features.map((f, idx) => (
              <li key={idx}>{f}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </section>
  );
}
