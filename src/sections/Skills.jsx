import { SiWireshark, SiNmap, SiBurpsuite, SiSplunk, SiElastic, SiMetasploit } from "react-icons/si";
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

      {/* Existing Skills Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem"
        }}
      >
        {/* Programming */}
        <div className="card">
          <h3>Programming</h3>
          <p>{skills.programming.join(", ")}</p>
        </div>

        {/* Web & Mobile */}
        <div className="card">
          <h3>Web & Mobile</h3>
          <p>{skills.webMobile.join(", ")}</p>
        </div>

        {/* Cybersecurity */}
        <div className="card">
          <h3>Cybersecurity</h3>
          <p>{skills.cybersecurity.join(", ")}</p>
        </div>

        {/* Tools */}
        <div className="card">
          <h3>Tools</h3>
          <p>{skills.tools.join(", ")}</p>
        </div>
      </div>

      {/* Security Tools Icons Section */}

      <h3 style={{ marginTop: "3rem", marginBottom: "1rem" }}>
        Security Tools
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: "1.5rem"
        }}
      >
        <div className="card" style={{ textAlign: "center" }}>
          <SiWireshark size={40} />
          <p>Wireshark</p>
        </div>

        <div className="card" style={{ textAlign: "center" }}>
          <SiNmap size={40} />
          <p>Nmap</p>
        </div>

        <div className="card" style={{ textAlign: "center" }}>
          <SiSplunk size={40} />
          <p>Splunk</p>
        </div>

        <div className="card" style={{ textAlign: "center" }}>
          <SiBurpsuite size={40} />
          <p>Burp Suite</p>
        </div>

        <div className="card" style={{ textAlign: "center" }}>
          <SiElastic size={40} />
          <p>ELK Stack</p>
        </div>

        <div className="card" style={{ textAlign: "center" }}>
          <SiMetasploit size={40} />
          <p>Metasploit</p>
        </div>
      </div>

    </section>
  );
}