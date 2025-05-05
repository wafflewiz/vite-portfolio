import React from "react";
import { Link } from "react-router-dom";
import newsgatorImage from "/assets/newsgator.png"; // Update with the correct path
import newsgator2Image from "/assets/newsgator2.png"; // Update with the correct path
import contact1Image from "/assets/contact1.png"; // Update with the correct path
import contact2Image from "/assets/contact2.png"; // Update with the correct path

const Home: React.FC = () => {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f9fafb", color: "#1f2937" }}>
      {/* Header */}
      <header>
        <div>
          <h1>Rami A.</h1>
        </div>
      </header>

      {/* Hero */}
      <section>
        <div>
          <h2>Hi, I'm Rami A.</h2>
          <p>
            I'm a full-stack developer passionate about building clean, efficient, and scalable web applications using technologies like React, .NET, PHP, and SQL.
          </p>
        </div>
        <div>
          <div></div>
        </div>
      </section>

      {/* Projects Preview */}
      <section>
        <div>
          <h3>Featured Projects</h3>
          <div>
            {/* Project 1 */}
            <div>
              <img
                src={newsgatorImage}
                alt="React/Vite/Node.JS Project"
                style={{ width: "100%", maxWidth: "200px", height: "auto", borderRadius: "0.5rem", marginBottom: "1rem", display: "block", marginLeft: "auto", marginRight: "auto" }}
              />
              <img
                src={newsgator2Image}
                alt="React/Vite/Node.JS Project"
                style={{ width: "100%", maxWidth: "200px", height: "auto", borderRadius: "0.5rem", marginBottom: "1rem", display: "block", marginLeft: "auto", marginRight: "auto" }}
              />
              <h2>React/Vite/Node.JS Project</h2>
              <p>
                A full-stack application using React, Vite, and Node.js to curate news based on user preference.
              </p>
              <Link to="https://github.com/wafflewiz/news-gator">View Project</Link>
            </div>

            {/* Project 2 */}
            <div>
              <img
                src={contact1Image}
                alt="C# Contact Manager Project"
                style={{ width: "100%", maxWidth: "200px", height: "auto", borderRadius: "0.5rem", marginBottom: "1rem", display: "block", marginLeft: "auto", marginRight: "auto" }}
              />
              <img
                src={contact2Image}
                alt="C# Contact Manager Project 2"
                style={{ width: "100%", maxWidth: "200px", height: "auto", borderRadius: "0.5rem", marginBottom: "1rem", display: "block", marginLeft: "auto", marginRight: "auto" }}
              />
              <h2>C# Contact Manager Project</h2>
              <p>
                ASP.NET MVC app showcasing CRUD operations, validation, and database integration.
              </p>
              <Link to="https://github.com/wafflewiz/ContactManagerT1">View Project</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
