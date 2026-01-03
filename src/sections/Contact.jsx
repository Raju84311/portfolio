import { portfolioData } from "../data/portfolioData";

export default function Contact() {
  const { contact, hero } = portfolioData;

  return (
    <section
      id="contact"
      style={{
        padding: "8rem 2rem",
        textAlign: "center"
      }}
    >
      <h2 style={{ fontSize: "2rem" }}>Contact</h2>

      <p style={{ marginTop: "1rem" }}>
        📧 {contact.email}
      </p>

      <p style={{ marginTop: "0.5rem" }}>
        📞 {contact.phone}
      </p>

      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          flexWrap: "wrap"
        }}
      >
        <a
          href={hero.links.github}
          target="_blank"
          className="btn btn-primary"
        >
          GitHub
        </a>

        <a
          href={hero.links.linkedin}
          target="_blank"
          className="btn btn-outline"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
