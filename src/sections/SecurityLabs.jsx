import { portfolioData } from "../data/portfolioData";

export default function SecurityLabs() {
  return (
    <section style={{ padding: "4rem 2rem" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>
        Security Lab Experience
      </h2>

      {portfolioData.securityLabs.map((lab, index) => (
        <div key={index} className="card">

          <h3>{lab.title}</h3>

          <p><strong>Tools:</strong> {lab.tools}</p>

          <p>{lab.description}</p>

          <ul>
            {lab.activities.map((act, i) => (
              <li key={i}>{act}</li>
            ))}
          </ul>

        </div>
      ))}

    </section>
  );
}