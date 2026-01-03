import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <nav style={styles.nav}>
      {/* LEFT EMPTY SPACE */}
      <div />

      {/* RIGHT CONTROLS */}
      <div style={styles.right}>
        <button onClick={toggleTheme} style={styles.themeBtn}>
          🌙 / ☀️
        </button>

        <button onClick={() => setOpen(!open)} style={styles.hamburger}>
          ☰
        </button>

        {open && (
          <div style={styles.menu}>
            <Link to="/" style={styles.link} onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link to="/skills" style={styles.link} onClick={() => setOpen(false)}>
              Skills
            </Link>

            <Link
              to="/education"
              style={styles.link}
              onClick={() => setOpen(false)}
            >
              Education
            </Link>

            <Link
              to="/software"
              style={styles.link}
              onClick={() => setOpen(false)}
            >
              View Software Projects
            </Link>

            <Link
              to="/cyber"
              style={styles.link}
              onClick={() => setOpen(false)}
            >
              View Cybersecurity Projects
            </Link>

            <Link
              to="/contact"
              style={styles.link}
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgba(0,0,0,0.65)",
    backdropFilter: "blur(12px)",
    zIndex: 1000
  },

  right: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: "1rem"
  },

  themeBtn: {
    background: "none",
    border: "1px solid white",
    color: "white",
    padding: "4px 8px",
    borderRadius: "6px",
    cursor: "pointer"
  },

  hamburger: {
    fontSize: "1.6rem",
    background: "none",
    border: "none",
    color: "white",
    cursor: "pointer"
  },

  menu: {
    position: "absolute",
    top: "48px",
    right: "0",
    minWidth: "240px",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem",
    borderRadius: "12px",
    background: "rgba(0,0,0,0.9)",
    boxShadow: "0 12px 30px rgba(0,0,0,0.4)"
  },

  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "0.95rem"
  }
};
